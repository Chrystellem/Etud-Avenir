using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.DTOs.Report;
using Etud_Avenir.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Web;
using System.Text.Json;

namespace Etud_Avenir.Services
{
    public class ReportService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly SubjectService _subjectService;
        private readonly GradeService _gradeService;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly List<string> ClassPossibilities = new List<string>(){"Première","Terminale"};
        private readonly List<int> QuarterPossibilities = new List<int>() { 1, 2, 3 };
        
        public ReportService(
            ApplicationDbContext dbContext,
            SubjectService subjectService,
            GradeService gradeService,
            UserManager<IdentityUser> userManager)
        {
            _dbContext = dbContext;
            _subjectService = subjectService;
            _gradeService = gradeService;
            _userManager = userManager;
        }

        public Report GetReportByInfos(string userId, int quarter, string schoolYear)
        {
            return _dbContext.Report.Where(r => r.Quarter == quarter && r.SchoolYear == schoolYear && r.UserId == userId).Single();
        }

        public Task<Report> GetReportByIdAsync(int reportId) => 
            _dbContext.Report.FirstOrDefaultAsync(r => r.ReportId == reportId);

        public Task<List<Report>> GetUserAllReportsAsync(string userId) 
            => _dbContext.Report.Where(r => r.UserId == userId).ToListAsync();

        public Task<List<SmallReportDTO>> GetSmallReportsDTOAsync(string userId)
        {
            return _dbContext.Report.Where(r => r.UserId == userId).Select(r => new SmallReportDTO
            {
                ReportId = r.ReportId,
                CreatedAt = r.CreatedAt,
                SchoolYear = r.SchoolYear,
                Quarter = r.Quarter
            }).ToListAsync();
        }
            

        public Dictionary<string,float> GetReportGrades(int reportId) 
        {
            Dictionary<string, float> reportGrades = new Dictionary<string, float>();

            List<Grade> grades = new List<Grade>();
            grades = _dbContext.Grade.Where(g => g.ReportId == reportId).ToList();

            foreach(Grade grade in grades)
            {
                string subject = _dbContext.Subject.Where(s => s.SubjectId == grade.SubjectId).Single().Name;
                reportGrades.Add(subject, grade.GradeValue);
            }

            return reportGrades;
        }

        public Task<List<GradeBySubjectDTO>> GetGradeBySubjectDTOs(int reportId)
        {
            return _dbContext.Grade
                .Where(g => g.ReportId == reportId)
                .Join(
                    _dbContext.Subject,
                    g => g.SubjectId, 
                    s => s.SubjectId, 
                    (g, s) => new GradeBySubjectDTO
                    {
                        Grade = g.GradeValue,
                        Subject = s.Name
                    })
                .ToListAsync();
        }

        public async void UpdateReport(int reportId, string schoolyear, int quarter, Dictionary<string, float> grades) 
        {
            Report report = await GetReportByIdAsync(reportId);
            if (report is not null)
            {
                report.SchoolYear = schoolyear;
                report.Quarter = quarter;

                foreach (string subject in grades.Keys) {
                    int subjectId = _dbContext.Subject.Where(s => s.Name == subject).Single().SubjectId;
                    Grade grade = _dbContext.Grade.Where(g => g.ReportId == reportId && g.SubjectId == subjectId).Single();
                    grade.GradeValue = grades[subject];
                }
                _dbContext.SaveChanges();
            }
        }

        public async Task AddReportAsync(string userId, int quarter, string schoolYear, Dictionary<string, float> grades) 
        {
            if( QuarterPossibilities.Contains(quarter) && ClassPossibilities.Contains(schoolYear) ) {
                Report NewReport = new Report { Quarter = quarter, SchoolYear = schoolYear, UserId = userId };
                await _dbContext.AddAsync(NewReport);
                await AddGradesToReport(GetReportByInfos(userId, quarter,schoolYear).ReportId, grades);
                _dbContext.SaveChanges();
            }
        }

        /// <summary>
        /// Sauvegarde le dto dans les cookies de l'utilisateur
        /// </summary>
        /// <returns></returns>
        public void SaveReportDTOInCookies(ReportDTO reportDTO, HttpContext context)
        {
            if (string.IsNullOrWhiteSpace(context.Request.Cookies["report"]))
            {
                CreateReportCookie(context);
            }

            AddReportDTOInCookies(reportDTO, context);
        }

        /// <summary>
        /// Créer le cookie reports
        /// </summary>
        /// <param name="reportDTO"></param>
        /// <param name="context"></param>
        public void CreateReportCookie(HttpContext context)
        {
            var cookieOptions = new CookieOptions
            {
                MaxAge = TimeSpan.FromMinutes(60*24*14), // sauvegarde pendant 2 semaines
                Path = "/"
            };

            context.Response.Cookies.Append("reports", JsonSerializer.Serialize(new List<ReportDTO> { }), cookieOptions);
        }

        /// <summary>
        /// Ajoute un bulletin dans les cookies
        /// </summary>
        /// <param name="reportDTO"></param>
        /// <param name="context"></param>
        public void AddReportDTOInCookies(ReportDTO reportDTO, HttpContext context)
        {
            var jsonString = context.Request.Cookies["reports"] ?? "[]";
            var reportDTOs = JsonSerializer.Deserialize<List<ReportDTO>>(jsonString);

            var random = new Random();
            reportDTO.ReportId = random.Next(0, 1000000);
            reportDTOs.Add(reportDTO);

            context.Response.Cookies.Append("reports", JsonSerializer.Serialize(reportDTOs));
        }

        /// <summary>
        /// Ajoute le contenu d'un reportDTO en BDD. Notamment Report et les Grades
        /// </summary>
        /// <param name="reportDTO"></param>
        /// <param name="context"></param>
        /// <exception cref="KeyNotFoundException"></exception>
        public async Task<bool> AddReportDTOAsync(ReportDTO reportDTO, string userId)
        {
            var report = new Report { 
                Quarter = reportDTO.Quarter, 
                SchoolYear = reportDTO.SchoolYear, 
                UserId = userId,
                CreatedAt = DateTime.Now,
            };

            _dbContext.Add(report);
            var nbReportAdded = await _dbContext.SaveChangesAsync();
            if (nbReportAdded != 1) return false;

            // Retrouver les ids des notes
            return await _gradeService.AddGradeDTOs(reportDTO.GradeBySubject, report.ReportId);
        }


        public async Task UpdateReportDTOAsync(ReportDTO reportDTO, string userId)
        {
            var report = await GetReportByIdAsync(reportDTO.ReportId);
            if (report == null) throw new KeyNotFoundException();

            report.Quarter = reportDTO.Quarter;
            report.SchoolYear = reportDTO.SchoolYear;

            var subjects = await _subjectService.GetSubjects();
            var grades = await _gradeService.GetReportGradesAsync(report.ReportId);
            foreach (var gradeBySubject in reportDTO.GradeBySubject)
            {
                var subject = subjects.FirstOrDefault(s => s.Name == gradeBySubject.Subject);
                if (subject == null) continue;

                var grade = grades.FirstOrDefault(g => g.SubjectId == subject.SubjectId);
                grade.GradeValue = gradeBySubject.Grade;
            }

            await _dbContext.SaveChangesAsync();
        }


        public async Task AddGradesToReport(int reportId, Dictionary<string, float> grades)
        {
            foreach(string subject in grades.Keys)
            {
                int subjectId = _dbContext.Subject.Where(s => s.Name == subject).Single().SubjectId ;
                Grade newGrade = new Grade { GradeValue = grades[subject], ReportId = reportId, SubjectId = subjectId };
                await _dbContext.AddAsync(newGrade);
            }
        }

        public async Task<bool> RemoveReport(int reportId) 
        {
            var report = await GetReportByIdAsync(reportId);
            if (report == null) throw new KeyNotFoundException();

            _dbContext.Remove(report);
            return (await _dbContext.SaveChangesAsync()) == 1;
        }

        /// <summary>
        /// Permet de récupérer le dto comprenant les notes et les infos du bulletin
        /// </summary>
        /// <param name="reportId"></param>
        /// <returns></returns>
        /// <exception cref="KeyNotFoundException"></exception>
        public async Task<ReportDTO> GetReportDTO(int reportId)
        {
            var report = await GetReportByIdAsync(reportId);
            if (report == null) throw new KeyNotFoundException("Report not found");

            return new ReportDTO
            {
                Quarter = report.Quarter,
                SchoolYear = report.SchoolYear,
                ReportId = report.ReportId,
                GradeBySubject = await GetGradeBySubjectDTOs(reportId)
            };
        }


        /// <summary>
        /// Récupère un reportDTO depuis les cookies ou depuis la bdd si pas présent
        /// </summary>
        /// <param name="reportIds"></param>
        /// <returns></returns>
        public async Task<ReportDTO> GetReportDTOFromCookieOrDatabase(int reportId, HttpContext context)
        {
            var jsonString = context.Request.Cookies["reports"] ?? "[]";
            var reportDTOs = JsonSerializer
                .Deserialize<List<ReportDTO>>(
                    jsonString,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true,
                    });

            var reportDTO = reportDTOs.FirstOrDefault(r => r.ReportId == reportId);
            if (reportDTO != null) return reportDTO;

            return await GetReportDTO(reportId);            
        }


        /// <summary>
        /// Récupère une liste de reportDTO dans les cookies ou base de données
        /// </summary>
        /// <param name="reportIds"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<List<ReportDTO>> GetReportDTOsFromCookiesOrDatabase(List<int> reportIds, HttpContext context)
        {
            List<ReportDTO> reportDTOs = new();
            foreach (var reportId in reportIds)
            {
                var reportDTO = await GetReportDTOFromCookieOrDatabase(reportId, context);
                reportDTOs.Add(reportDTO);
            }

            return reportDTOs;
        }
    }
}
