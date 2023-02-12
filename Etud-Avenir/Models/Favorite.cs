using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Favorite
    {

        public int FavoriteId { get; set; }
        public string Label { get; set; } // a GARDER ??


        [ForeignKey("School")]
        public int SchoolId { get; set; }
        public virtual School School { get; set; }


        [ForeignKey("IdentityUser")] 
        public int UserId { get; set; }
        public virtual IdentityUser User { get; set; }


    }
}
