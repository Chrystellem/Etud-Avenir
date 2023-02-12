using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Grade
    {

        public int GradeId { get; set; }

        public float GradeValue { get; set; }


        [ForeignKey("Subject")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }

        [ForeignKey("Report")]
        public int ReportId { get; set; }
        public virtual Report Report { get; set; }


    }
}
