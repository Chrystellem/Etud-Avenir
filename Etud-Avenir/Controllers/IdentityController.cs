using Etud_Avenir.DTOs.Identity;
using Etud_Avenir.Models;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using System.Web;

namespace Etud_Avenir.Controllers
{
    public class IdentityController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<IdentityController> _logger;
        private readonly LogEmailService _logEmailService;

        public IdentityController(SignInManager<IdentityUser> signInManager,
            ILogger<IdentityController> logger,
            UserManager<IdentityUser> userManager,
            LogEmailService logEmailService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _logEmailService = logEmailService;
        }

        [HttpPost]
        public async Task<IActionResult> LoginAPI([FromBody] LoginDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    error = "Vérifie les champs du formulaire"
                });
            }

            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
            if (!result.Succeeded)
            {
                return NotFound(new
                {
                    error = "Identifiant ou mot de passe erroné"
                });
            }

            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> RegistrationAPI([FromBody] RegistrationDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage)
                });
            }

            var user = new IdentityUser { UserName = model.Email, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                // Regarder si erreur de duplication d'email
                var error = result.Errors.First();
                var errorMessage = error.Code == "DuplicateUserName" ?
                    "Cet email existe déjà" :
                    "Une erreur est survenue, veuillez réessayer plus tard";
                return StatusCode(500, new
                {
                    errors = new string[] { errorMessage }
                });
            }

            // Création du token de vérification d'email
            var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
            var callbackUrl = $"confirmation-email?userId={user.Id}&code={code}";

            var callbackWithDomains = $"{Request.Scheme}://{Request.Host}/{callbackUrl}";

            // Pas besoin d'attendre la création de l'email
            _ = _logEmailService.AddLogEmail(new LogEmail
            {
                To = user.Email,
                Subject = "Etud'Avenir - Confirmation inscription",
                Content = $"Confirme la création de ton compte en cliquant sur le lien suivant <a href='{callbackWithDomains}'>En cliquant sur ce lien</a>"
            });

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> EmailConfirmation(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return BadRequest();
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound($"Impossible de retrouver l'utilisateur '{userId}'.");
            }

            code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(code));
            var result = await _userManager.ConfirmEmailAsync(user, code);
            if (!result.Succeeded) return BadRequest();

            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> ForgotPasswordAPI([FromBody]ForgotPasswordDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    error = "L'email envoyé n'est pas valide"
                });
            }

            var user = await _userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return NotFound(new
                {
                    error = "Cet utilisateur n'existe pas"
                });
            }

            var code = await _userManager.GeneratePasswordResetTokenAsync(user);
            code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));

            var callbackUrl = $"/reinitialisation-mot-de-passe?code={code}";
            var callbackWithDomains = $"{Request.Scheme}://{Request.Host}{callbackUrl}";

            _ = _logEmailService.AddLogEmail(new LogEmail
            {
                To = user.Email,
                Subject = "Réinitialisation du mot de passe",
                Content = $"Réinitialise ton mot de passe <a href='{callbackWithDomains}'>En cliquant sur ce lien</a>"
            });
           
            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> ResetPasswordAPI([FromBody]ResetPasswordDTO model)
        {
            if (!ModelState.IsValid) {
                return BadRequest(new { error = "On dirait qu'il y a une erreur de saisie" });
            }

            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return NotFound(new
                {
                    error = "Cet utilisateur n'existe pas"
                });
            }

            var code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(model.Code));

            var result = await _userManager.ResetPasswordAsync(user, code, model.Password);
            if (!result.Succeeded)
            {
                return BadRequest(new
                {
                    error = "Le code ne correspond pas à l'email ayant fait la demande de réinitialisation"
                });
            }

            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> EditPasswordAPI(EditPasswordDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage) });
            }

            var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var user = await _userManager.FindByIdAsync(userId);

            var resetPasswordToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            var result = await _userManager.ResetPasswordAsync(user, resetPasswordToken, model.NewPassword);
            if (!result.Succeeded) return StatusCode(500, new
            {
                error = "Une erreur est survenue, nous nous excusons pour cela et vous invitons à réesayer plus tard"
            });

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAccountAPI()
        {
            var userId = HttpContext.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var user = await _userManager.FindByIdAsync(userId);
            var result = await _userManager.DeleteAsync(user);
            if (!result.Succeeded)
            {
                return StatusCode(500, new
                {
                    error = "Une erreur est survenue, nous nous excusons pour cela et vous invitons à réesayer plus tard"
                });
            }

            return Ok();
        }
    }
}
