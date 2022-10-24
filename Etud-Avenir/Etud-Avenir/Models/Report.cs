using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Report
    {
        private int idReport { get; set; }
        //trimestre
        private int quarter { get; set; }

        private Dictionary<Subject, float> reports = new();

        public Report(int idReport, int quarter)
        {
            this.idReport = idReport;
            this.quarter = quarter;
        }

    }
}
