using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;

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

        public List<SchoolRequest> GetUserFavorites(int UserId)
        {
            List<Favorite> favorites = _dbContext.Favorite.Where(f => f.UserId == UserId).ToList();
            List<SchoolRequest> favoritesSchools = new List<SchoolRequest>();
            foreach(Favorite school in favorites)
            {
                favoritesSchools.Add(_schoolService.GetSchoolRequest(school.SchoolId));
            }

            return favoritesSchools;
        }

        public async Task AddSchoolToFavoritesAsync(int SchoolId, int UserId)
        {
            Favorite newFavorite = new Favorite {SchoolId = SchoolId, UserId = UserId };
            await _dbContext.AddAsync(newFavorite);
            _dbContext.SaveChanges();
        }

        public void RemoveSchoolToFavorites(int SchoolId, int UserId)
        {
            Favorite isFavorite = _dbContext.Favorite.Where(f => f.UserId == UserId && f.SchoolId == SchoolId).Single();
            if (isFavorite is not null)
            {
                _dbContext.Remove(isFavorite);
                _dbContext.SaveChanges();
            }
        }
    }
}
