using System.ComponentModel.DataAnnotations;

namespace Etud_Avenir.DTOs.Identity
{
    public class RegistrationDTO
    {
        [Required]
        [EmailAddress(ErrorMessage = "L'email est mal formaté")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Le mot de passe et sa confirmation ne correspondent pas")]
        public string PasswordConfirmation { get; set; }
    }
}
