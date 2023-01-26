using Etud_Avenir.DTOs.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class IdentityController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<IdentityController> _logger;

        public IdentityController(SignInManager<IdentityUser> signInManager,
            ILogger<IdentityController> logger,
            UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> LoginAPI([FromBody]LoginDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(JsonConvert.SerializeObject(new {
                    error = "Vérifie les champs du formulaire"
                }));
            }

            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
            if (!result.Succeeded)
            {
                return NotFound(JsonConvert.SerializeObject(new
                {
                    error = "Identifiant ou mot de passe erroné"
                }));
            }

            return Ok();
        }


        [HttpPost]
        public async Task<IActionResult> RegistrationAPI([FromBody]RegistrationDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(JsonConvert.SerializeObject(new
                {
                    error = "Pas bon"
                }));
            }

            var user = new IdentityUser { UserName = model.Email, Email = model.Email };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return BadRequest(JsonConvert.SerializeObject(new
                {
                    error = "Pas bon 2"
                }));
            }

            return Ok();
        }
    }
}
