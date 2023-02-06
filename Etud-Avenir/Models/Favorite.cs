using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Favorite
    {

        public int FavoriteId { get; set; }
        public int? SchoolId { get; set; }
        public int? UserId { get; set; }

        public String Label { get; set; }

    }
}
