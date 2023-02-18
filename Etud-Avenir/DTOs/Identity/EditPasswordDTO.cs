using Etud_Avenir.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Etud_Avenir.DTOs.Identity
{
    public class EditPasswordDTO
    {
        [Required]
        [Password(ErrorMessage = "Le mot de passe 'actuel' indiqué est eronné")]
        public string CurrentPassword { get; set; }
        [Required]
        [Password(ErrorMessage = "le nouveau mot de passe ne correspond pas aux exigences")]
        public string NewPassword { get; set; }
        [Required]
        [Password]
        [Compare("NewPassword", ErrorMessage = "Les mots de passes ne correspondent pas")]
        public string NewPasswordConfirmation { get; set; }
    }
}
