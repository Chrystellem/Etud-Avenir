using Etud_Avenir.Models;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class ProfileController : Controller
    {

        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<ProfileController> _logger;

        public ProfileController(SignInManager<IdentityUser> signInManager,
            ILogger<ProfileController> logger,
            UserManager<IdentityUser> userManager
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }


        [Route("/profil")]
        [Route("/profil/email")]
        [Route("/profil/mot-de-passe")]
        [Route("/profil/bulletins")]
        [Route("/profil/ecoles")]
        [Route("/profil/sauvegardes")]
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetSavedResearch()
        {
            var user = HttpContext.User;
            var userId = user.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (userId == null) return Forbid();

            // TODO : Récupérer les recherches sauvegardées

            return Ok();
        }

        [HttpGet]
        public IActionResult GetSavedSchools()
        {
            var user = HttpContext.User;
            var userId = user.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (userId == null) return Forbid();

            // TODO : Récupérer les écoles favorites

            return Ok();
        }
    }
}
