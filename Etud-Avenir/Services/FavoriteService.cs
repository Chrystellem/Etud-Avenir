using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.DTOs.Curriculum;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;

namespace Etud_Avenir.Services
{
    public class FavoriteService
    {

        private readonly ApplicationDbContext _dbContext;
        private readonly SchoolService _schoolService;

        public FavoriteService(ApplicationDbContext dbContext, SchoolService schoolService)
        {
            _dbContext = dbContext;
            _schoolService = schoolService;
        }

        public Task<List<CurriculumSmallDTO>> GetCurriculumSmallDTOs(string userId)
        {
            return (from f in _dbContext.Favorite
                     join c in _dbContext.Curriculum on f.CurriculumId equals c.CurriculumId
                     join s in _dbContext.School on c.SchoolId equals s.SchoolId
                     where
                        f.UserId == userId
                     select new
                     {
                         Curriculum = c,
                         School = s
                     })
                     .Select(e => new CurriculumSmallDTO
                     {
                        CurriculumId = e.Curriculum.CurriculumId,
                        Name = e.Curriculum.Name,
                        SchoolName = e.School.Name
                     })
                     .ToListAsync();
        } 

        public List<SchoolRequest> GetUserFavorites(string UserId)
        {
            List<Favorite> favorites = _dbContext.Favorite.Where(f => f.UserId == UserId).ToList();
            List<SchoolRequest> favoritesSchools = new();
            foreach(Favorite school in favorites)
            {
                favoritesSchools.Add(_schoolService.GetSchoolRequest(school.CurriculumId));
            }

            return favoritesSchools;
        }

        public async Task AddCurriculumToFavoritesAsync(int curriculumId, string UserId)
        {
            var isAlreadyInFavorite = await _dbContext.Favorite.FirstOrDefaultAsync(f => f.UserId == UserId && f.CurriculumId == curriculumId);
            if (isAlreadyInFavorite != null) throw new SqlAlreadyFilledException();

            var newFavorite = new Favorite {CurriculumId = curriculumId, UserId = UserId };
            await _dbContext.AddAsync(newFavorite);
            _dbContext.SaveChanges();
        }

        public void RemoveCurriculumToFavorites(int curriculumId, string UserId)
        {
            Favorite isFavorite = _dbContext.Favorite.Where(f => f.UserId == UserId && f.CurriculumId == curriculumId).Single();
            if (isFavorite is not null)
            {
                _dbContext.Remove(isFavorite);
                _dbContext.SaveChanges();
            }
        }
    }
}
