using Etud_Avenir.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class SubjectController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<ReportController> _logger;
        private readonly SubjectService _subjectService;

        public SubjectController(SignInManager<IdentityUser> signInManager,
            ILogger<ReportController> logger,
            UserManager<IdentityUser> userManager,
            SubjectService subjectService
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _subjectService = subjectService;
        }

        [HttpGet]
        [Route("/api/subjects")]
        public async Task<IActionResult> Subjects()
        {
            return Ok(await _subjectService.GetSubjects());
        }
    }
}
