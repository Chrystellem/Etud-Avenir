using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;

namespace Etud_Avenir.Services
{
    public class ReportService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly List<string> ClassPossibilities = new List<string>(){"Première","Terminale"};
        private readonly List<int> QuarterPossibilities = new List<int>() { 1, 2, 3 };
        
        public ReportService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Report GetReportByInfos(int userId, int quarter, string schoolYear)
        {
            return _dbContext.Report.Where(r => r.Quarter == quarter && r.SchoolYear == schoolYear && r.UserId == userId).Single();
        }

        public Report GetReportById(int reportId)
        {
            return _dbContext.Report.Where(r => r.ReportId == reportId).Single();
        }

        public List<Report> GetUserAllReports(int userId)
        {
            return _dbContext.Report.Where(r => r.UserId == userId).ToList();
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

        public void UpdateReport(int reportId, string schoolyear, int quarter, Dictionary<string, float> grades) //update schoolyear and quarter too
        {
            Report report = GetReportById(reportId);
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

        public async Task AddReportAsync(int userId, int quarter, string schoolYear, Dictionary<string, float> grades) //conversion quarter string to int ?
        {
            if( QuarterPossibilities.Contains(quarter) && ClassPossibilities.Contains(schoolYear) ) {
                Report NewReport = new Report { Quarter = quarter, SchoolYear = schoolYear, UserId = userId };
                await _dbContext.AddAsync(NewReport);
                await AddGradesToReport(GetReportByInfos(userId, quarter,schoolYear).ReportId, grades);
                _dbContext.SaveChanges();
            }
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

        public void RemoveReport(int reportId) 
        {
            Report isReport = GetReportById(reportId);
            if (isReport is not null)
            {
                _dbContext.Remove(isReport);
                _dbContext.SaveChanges();
            }
        }
    }
}
