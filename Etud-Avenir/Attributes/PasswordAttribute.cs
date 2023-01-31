using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace Etud_Avenir.Attributes
{
    public class PasswordAttribute : ValidationAttribute
    {

        public string Pattern { get; set; }

        public PasswordAttribute() { }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value == null)
                return ValidationResult.Success;

            if (!(value is string password))
                return new ValidationResult("La valeur doit être une chaîne de caractères");

            if (!Regex.IsMatch(password, Pattern))
                return new ValidationResult(ErrorMessage);

            return ValidationResult.Success;
        }
    }
}
