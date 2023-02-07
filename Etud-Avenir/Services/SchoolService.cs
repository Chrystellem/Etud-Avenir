using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;

namespace Etud_Avenir.Services
{

    public class SchoolService
    {

        private readonly ApplicationDbContext _dbContext;
        private readonly FavoriteService _favoriteService;

        public SchoolService(ApplicationDbContext dbContext, FavoriteService favoriteService)
        {
            _dbContext = dbContext;
            _favoriteService = favoriteService;
        }


        public School GetSchool(int SchoolId)
        {
            return _dbContext.School.Where(s => s.SchoolId == SchoolId).Single();
        }

        public async Task AddSchoolAsync(string name, float score, string address, string website)
        {
            School NewSchool = new School { Name = name, Score=score, Address = address, Website = website };

            await _dbContext.AddAsync(NewSchool);
            _dbContext.SaveChanges();
        }

        public async Task AddSchoolCurriculumAsync(string name, int duration, int idSchool)
        {
            Curriculum newCurriculum = new Curriculum{Name = name, Duration = duration};
            CurriculumSchool schoolCurriculum = new CurriculumSchool { SchoolId = _dbContext.School.Where(s => s.SchoolId == idSchool).Single().SchoolId, CurriculumId = newCurriculum.CurriculumID };
            await _dbContext.AddAsync(newCurriculum);
            await _dbContext.AddAsync(schoolCurriculum);
            _dbContext.SaveChanges();
        }

        public async Task AddSchoolToFavoritesAsync(int SchoolId, string label, int UserId)
        {
            await _favoriteService.AddSchoolToFavoritesAsync(SchoolId, label, UserId);
        }

        public void RemoveSchoolToFavorites(int SchoolId, string label, int UserId)
        {
            _favoriteService.RemoveSchoolToFavorites(SchoolId, label, UserId);
        }


    }
}
