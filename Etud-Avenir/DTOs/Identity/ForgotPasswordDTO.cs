using System.ComponentModel.DataAnnotations;

namespace Etud_Avenir.DTOs.Identity
{
    public class ForgotPasswordDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
