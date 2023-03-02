using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class CurriculumCoefficient
    {

        public int CurriculumCoefficientId { get; set; }

        [ForeignKey("Curriculum")]
        public int CurriculumId { get; set; }
        public virtual Curriculum Curriculum { get; set; }


        [ForeignKey("Subject")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }

        public double Value { get; set; }
    }
}
