using Etud_Avenir.Data;
using Etud_Avenir.DTOs.Research;
using Etud_Avenir.DTOs.School;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Services
{
    public class CurriculumService
    {
        private readonly ApplicationDbContext _dbContext;

        public CurriculumService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<SchoolInformationsResponseDTO> GetCurriculumInformationDTO(int curriculumId)
        {
            var query = _dbContext.Curriculum.Join(_dbContext.School, c => c.SchoolId, s => s.SchoolId, (c, s) => new { School = s, Curriculum = c });
            var result = await query.FirstOrDefaultAsync(q => q.Curriculum.CurriculumId == curriculumId);
            if (result == null) throw new KeyNotFoundException();

            return new SchoolInformationsResponseDTO
            {
                AdmissionType = result.Curriculum.AdmissionType,
                IsInternshipAvailable = result.Curriculum.IsApprenticeship,
                IsPublic = result.School.IsPublic,
                IsStateApproved = result.School.StateRecognition,
                City = result.School.City,
                CurriculumId = result.Curriculum.CurriculumId,
                Domain = result.Curriculum.Domain,
                Name = result.School.Name,
                ProgramDuration = result.Curriculum.Duration,
                SchoolId = result.School.SchoolId,
                ZipCode = result.School.ZipCode
            };
        }

        /// <summary>
        /// Appelée sur la page base de données
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public Task<List<ResearchResultSchoolDTO>> GetCurriculumDTOs(ResearchDTO filter)
        {
            var query = _dbContext.Curriculum.Join(_dbContext.School, c => c.SchoolId, s => s.SchoolId, (c, s) => new { School = s, Curriculum = c });
            if (!string.IsNullOrWhiteSpace(filter.Domain)) query = query.Where(q => q.Curriculum.Domain == filter.Domain);
            //if (!string.IsNullOrWhiteSpace(filter.Localization)) query = query.Where(q => q.School.ZipCode );
            if (filter.IsPrivate) query = query.Where(q => q.School.IsPrivate);
            if (filter.IsPublic) query = query.Where(q => q.School.IsPublic);
            if (filter.IsApprenticeship) query = query.Where(q => q.Curriculum.IsApprenticeship);
            if (filter.IsInitialFormation) query = query.Where(q => !q.Curriculum.IsApprenticeship);
            if (filter.AdmissionType != Data.Enums.AdmissionTypeEnum.NoSelection) query = query.Where(q => q.Curriculum.AdmissionType == filter.AdmissionType);

            return query.Select(q => new ResearchResultSchoolDTO
            {
                City = q.School.City,
                Domain = q.Curriculum.Domain,
                Formation = q.Curriculum.Name,
                Name = q.School.Name,
                CurriculumId = q.Curriculum.CurriculumId,
                ZipCode = q.School.ZipCode,
            }).ToListAsync();
        }

        public Task<Curriculum> GetCurriculum(int curriculumId)
            => _dbContext.Curriculum.FirstOrDefaultAsync(c => c.CurriculumId == curriculumId);
    }
}
