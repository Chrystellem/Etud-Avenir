using Etud_Avenir.DTOs.Report;
using Etud_Avenir.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class ReportController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<ReportController> _logger;

        public ReportController(SignInManager<IdentityUser> signInManager,
            ILogger<ReportController> logger,
            UserManager<IdentityUser> userManager
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult UserReports()
        {
            var user = HttpContext.User;
            var userId = user.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;

            if (userId == null) return Forbid();

            // TODO : Récupérer les bulletins de cet utilisateur en bdd 

            var reports = new List<Report>
            {
                new Report
                {
                    ReportId = 1,
                    Quarter = 1,
                },
                new Report
                {
                    ReportId = 2,
                    Quarter = 2,
                },
            };

            return Ok(reports);
        }

        public async Task<IActionResult> CreateReport(CreateReportDTO model)
        {


            return Ok();
        }
    }
}
