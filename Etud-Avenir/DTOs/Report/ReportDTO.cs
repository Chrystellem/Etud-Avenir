using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;

namespace Etud_Avenir.DTOs.Report
{
    public class ReportDTO
    {
        public int ReportId { get; set; }

        [Required]
        [IntegerValidator(MinValue = 1, MaxValue = 3)]
        public int Quarter { get; set; }
        [Required]
        public string SchoolYear { get; set; }
        [Required]
        public List<GradeBySubjectDTO> GradeBySubject { get; set; }
    }

    public class GradeBySubjectDTO
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        [IntegerValidator(MinValue = 0, MaxValue = 20)]
        public float Grade { get; set; }
    }
}
