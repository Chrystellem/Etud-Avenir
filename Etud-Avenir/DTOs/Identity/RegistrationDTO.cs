using Etud_Avenir.Attributes;
using System.ComponentModel.DataAnnotations;
using System.Configuration;

namespace Etud_Avenir.DTOs.Identity
{
    public class RegistrationDTO
    {
        [Required]
        [EmailAddress(ErrorMessage = "L'email est mal formaté")]
        public string Email { get; set; }

        [Required]
        [Password(
            Pattern = @"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
            ErrorMessage = "Le mot de passe ne respecte pas les règles indiquées")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Le mot de passe et sa confirmation ne correspondent pas")]
        public string PasswordConfirmation { get; set; }
    }
}
