using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.DTOs.Report;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;

namespace Etud_Avenir.Services
{
    public class ReportService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly SubjectService _subjectService;
        private readonly GradeService _gradeService;
        private readonly List<string> ClassPossibilities = new List<string>(){"Première","Terminale"};
        private readonly List<int> QuarterPossibilities = new List<int>() { 1, 2, 3 };
        
        public ReportService(
            ApplicationDbContext dbContext,
            SubjectService subjectService,
            GradeService gradeService)
        {
            _dbContext = dbContext;
            _subjectService = subjectService;
            _gradeService = gradeService;
        }

        public Report GetReportByInfos(string userId, int quarter, string schoolYear)
        {
            return _dbContext.Report.Where(r => r.Quarter == quarter && r.SchoolYear == schoolYear && r.UserId == userId).Single();
        }

        public Task<Report> GetReportByIdAsync(int reportId)
        {
            return _dbContext.Report.FirstOrDefaultAsync(r => r.ReportId == reportId);
        }

        public Task<List<Report>> GetUserAllReportsAsync(string userId)
        {
            return _dbContext.Report.Where(r => r.UserId == userId).ToListAsync();
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
            Console.WriteLine("Hello world");
            return _dbContext.Grade.Join(_dbContext.Subject, g => g.SubjectId, s => s.SubjectId, (g, s) => new GradeBySubjectDTO
            {
                Grade = g.GradeValue,
                Subject = s.Name
            }).ToListAsync();
        }

        public async void UpdateReport(int reportId, string schoolyear, int quarter, Dictionary<string, float> grades) //update schoolyear and quarter too
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

        public async Task AddReportAsync(string userId, int quarter, string schoolYear, Dictionary<string, float> grades) //conversion quarter string to int ?
        {
            if( QuarterPossibilities.Contains(quarter) && ClassPossibilities.Contains(schoolYear) ) {
                Report NewReport = new Report { Quarter = quarter, SchoolYear = schoolYear, UserId = userId };
                await _dbContext.AddAsync(NewReport);
                await AddGradesToReport(GetReportByInfos(userId, quarter,schoolYear).ReportId, grades);
                _dbContext.SaveChanges();
            }
        }

        /// <summary>
        /// Ajoute le contenu d'un reportDTO en BDD. Notamment Report et les Grades
        /// </summary>
        /// <param name="reportDTO"></param>
        /// <param name="userId"></param>
        /// <exception cref="KeyNotFoundException"></exception>
        public async Task<bool> AddReportDTOAsync(ReportDTO reportDTO, string userId)
        {
            var report = new Report { 
                Quarter = reportDTO.Quarter, 
                SchoolYear = reportDTO.SchoolYear, 
                UserId = userId 
            };

            _dbContext.Add(report);
            var nbReportAdded = await _dbContext.SaveChangesAsync();
            if (nbReportAdded != 1) return false;

            // Retrouver les ids des notes
            return await _gradeService.AddGradeDTOs(reportDTO.GradeBySubject, report.ReportId);
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

        public async void RemoveReport(int reportId) 
        {
            Report isReport = await GetReportByIdAsync(reportId);
            if (isReport is not null)
            {
                _dbContext.Remove(isReport);
                _dbContext.SaveChanges();
            }
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
    }
}
