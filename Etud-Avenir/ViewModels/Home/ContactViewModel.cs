using System.ComponentModel.DataAnnotations;

namespace Etud_Avenir.ViewModels.Home
{
    public class ContactViewModel
    {
        [Required]
        public string Object { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
