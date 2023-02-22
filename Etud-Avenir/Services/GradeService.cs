using Etud_Avenir.Data;
using Etud_Avenir.DTOs.Report;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Services
{
    public class GradeService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly SubjectService _subjectService;

        public GradeService(
            ApplicationDbContext dbContext, 
            SubjectService subjectService)
        {
            _dbContext = dbContext;
            _subjectService = subjectService;
        }

        /// <summary>
        /// Ajoute une liste de Notes (selon la matière) en bdd
        /// </summary>
        /// <param name="gradeBySubjectDTOs"></param>
        /// <param name="reportId"></param>
        /// <returns></returns>
        /// <exception cref="KeyNotFoundException"></exception>
        public async Task<bool> AddGradeDTOs(IEnumerable<GradeBySubjectDTO> gradeBySubjectDTOs, int reportId)
        {
            var subjects = await _subjectService.GetSubjects();

            List<Grade> grades = new();
            foreach (var gradeBySubject in gradeBySubjectDTOs)
            {
                var subject = subjects.FirstOrDefault(s => s.Name == gradeBySubject.Subject);
                if (subject == null) throw new KeyNotFoundException("Cette matière n'a pas été retrouvée");

                grades.Add(new Grade
                {
                    GradeValue = gradeBySubject.Grade,
                    SubjectId = subject.SubjectId,
                    ReportId = reportId
                });
            }

            _dbContext.AddRange(grades);
            var nbGradesAdded = await _dbContext.SaveChangesAsync();

            return nbGradesAdded == gradeBySubjectDTOs.Count();
        }
    }
}
