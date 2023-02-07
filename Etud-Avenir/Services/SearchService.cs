using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;

namespace Etud_Avenir.Services
{

    /// <summary>
    /// generation de liste en reponse a une recherche 
    /// mise en favoris + selection d'une fiche ecole 
    /// sauvegarde derniere recherche
    /// </summary>

    public class SearchService
    {

        private readonly ApplicationDbContext _dbContext;
        private readonly FavoriteService _favoriteService;

        public SearchService(ApplicationDbContext dbContext, FavoriteService favoriteService)
        {
            _dbContext = dbContext;
            _favoriteService = favoriteService;
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
