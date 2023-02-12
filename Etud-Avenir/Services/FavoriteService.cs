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

        public FavoriteService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<School> getUserFavorites(int UserId)
        {
            List<Favorite> favorites = _dbContext.Favorite.Where(f => f.UserId == UserId).ToList();
            return _dbContext.School.Where(s => s.SchoolId == favorites.Find(f => f.SchoolId == s.SchoolId).SchoolId).ToList();
        }

        public async Task AddSchoolToFavoritesAsync(int SchoolId, string label, int UserId)
        {
            Favorite newFavorite = new Favorite { Label = label, SchoolId = SchoolId, UserId = UserId };
            await _dbContext.AddAsync(newFavorite);
            _dbContext.SaveChanges();
        }

        public void RemoveSchoolToFavorites(int SchoolId, string label, int UserId)
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
