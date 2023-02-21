using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Report
    {
        public int ReportId { get; set; }

        public int Quarter { get; set; } //trimestre

        public string SchoolYear { get; set; } //premiere ou terminale

        [ForeignKey("IdentityUser")]
        public string UserId { get; set; }
        public virtual IdentityUser User { get; set; }

    }
}
