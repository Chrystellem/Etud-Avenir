using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Grade
    {

        public int GradeId { get; set; }

        public int? SubjectId { get; set; }

        public int? ReportId { get; set; }

        public float GradeValue { get; set; }

    }
}
