using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class LastSearch
    {

        public int LastSearchId { get; set; }

        [ForeignKey("School")]
        public int SchoolId { get; set; }
        public virtual School School { get; set; }

        [ForeignKey("IdentityUser")]
        public int UserId { get; set; }
        public virtual ICollection<IdentityUser> User { get; set; }

        public int Score { get; set; }

    }
}
