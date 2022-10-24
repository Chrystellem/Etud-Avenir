using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Report
    {
        private int ReportId { get; set; }
        //trimestre
        private int quarter { get; set; }

        private Dictionary<Subject, float> subjects = new();

    }
}
