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

        [ForeignKey("Curriculum")]
        public int CurriculumId { get; set; }
        public virtual Curriculum Curriculum { get; set; }


        [ForeignKey("IdentityUser")] 
        public string UserId { get; set; }
        public virtual ICollection<IdentityUser> User { get; set; }


    }
}
