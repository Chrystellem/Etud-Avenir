using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Report
    {
        public int ReportId { get; set; }

        //trimestre
        public int Quarter { get; set; }

        public Dictionary<Subject, float> Subjects = new();

    }
}
