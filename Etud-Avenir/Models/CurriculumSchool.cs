using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class CurriculumSchool
    {
        public int CurriculumSchoolId { get; set; }

        [ForeignKey("School")]
        public int SchoolId { get; set; }
        public virtual School School { get; set; }

        [ForeignKey("Curriculum")]
        public int CurriculumId { get; set; }
        public virtual Curriculum Curriculum { get; set; }

    }
}
