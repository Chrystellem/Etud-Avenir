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
    /// sauvegarde derniere recherche
    /// calcul du score des résultats
    /// utiliser schoolService.getSchoolsRequestsFromList
    /// </summary>

    public class SearchService
    {

        private readonly ApplicationDbContext _dbContext;

        public SearchService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


    }
}
