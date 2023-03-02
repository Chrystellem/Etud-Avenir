using Etud_Avenir.Data.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Curriculum
    {
       
        public int CurriculumId { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; } 
        public string Domain { get; set; }
        public bool IsApprenticeship { get; set; }
        public bool IsInitialFormation { get; set; }
        public AdmissionTypeEnum AdmissionType { get; set; }

        [ForeignKey("School")]
        public int SchoolId { get; set; }
        public virtual School School { get; set; }


    }
}
