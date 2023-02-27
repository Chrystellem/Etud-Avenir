using System;

namespace Etud_Avenir.DTOs.Report
{
    public class SmallReportDTO
    {
        public int ReportId { get; set; }
        public string SchoolYear { get; set; }
        public int Quarter { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
