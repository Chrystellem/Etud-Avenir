using System;
using System.Text.Json.Serialization;

namespace Etud_Avenir.DTOs.Curriculum
{
    public class CurriculumSmallDTO
    {
        [JsonPropertyName("curriculumId")]
        public int CurriculumId { get; set; }

        [JsonPropertyName("schoolName")]
        public string SchoolName { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("createdDate")]
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
