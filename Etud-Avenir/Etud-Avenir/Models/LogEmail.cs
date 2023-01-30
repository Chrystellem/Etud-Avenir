using System;

namespace Etud_Avenir.Models
{
    public class LogEmail
    {
        public long LogEmailId { get; set; }
        public DateTime CreatedAt { get; set; }
        public string To { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
    }
}
