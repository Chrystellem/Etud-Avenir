using Etud_Avenir.Data.Enums;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Collections.Generic;

namespace Etud_Avenir.DTOs.School
{
    public class SchoolInformationsResponseDTO
    {
        public int SchoolId { get; set; }
        public int CurriculumId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public int ZipCode { get; set; }
        public int ProgramDuration { get; set; }
        public string Domain { get; set; }
        public AdmissionTypeEnum AdmissionType { get; set; }
        public bool IsPublic { get; set; }
        public bool IsStateApproved { get; set; }
        public bool IsInternshipAvailable { get; set; }
        public List<FeesDTO> Fees { get; set; } = new();
        public string OtherInformation { get; set; }
    }


    public class FeesDTO
    {
        public string Name { get; set; }
        public double Amount { get; set; }
    }
}
