using Etud_Avenir.Data.Enums;
using System.Collections.Generic;

namespace Etud_Avenir.DTOs.Research
{
    public class ResearchDTO
    {
        public string Domain { get; set; }
        public string Localization { get; set; }
        public bool IsApprenticeship { get; set; }
        public bool IsInitialFormation { get; set; }
        public bool IsPublic { get; set; }
        public bool IsPrivate { get; set; }
        public AdmissionTypeEnum AdmissionType { get; set; }
        public string Reports { get; set; }
    }
}
