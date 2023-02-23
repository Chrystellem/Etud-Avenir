using Etud_Avenir.DTOs.Report;
using Etud_Avenir.Models;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class ReportController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<ReportController> _logger;
        private readonly ReportService _reportService;

        public ReportController(SignInManager<IdentityUser> signInManager,
            ILogger<ReportController> logger,
            UserManager<IdentityUser> userManager,
            ReportService reportService
            )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = logger;
            _reportService = reportService;
        }

        [HttpGet]
        [Route("/api/reports/{id}")]
        public async Task<IActionResult> UserReport(int id)
        {
            try
            {
                var reports = await _reportService.GetReportDTO(id);
                return Ok(reports);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpGet]
        [Route("/api/reports")]
        public async Task<IActionResult> GetGrades()
        {
            var user = await _userManager.GetUserAsync(User);

            var reports = await _reportService.GetSmallReportsDTOAsync(user.Id);
            return Ok(reports);
        }

        [HttpPost]
        [Route("/api/report")]
        public async Task<IActionResult> CreateReport([FromBody] ReportDTO model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage)
                });
            }

            var isAnonymous = !User.Identity.IsAuthenticated;
            if (isAnonymous)
            {
                HttpContext.Session.SetString("reports", JsonSerializer.Serialize(model));
                // TODO : Prendre en compte les objets déjà en session et gérer la concatennaton avec ce nouveau

                return Ok();
            }

            // Utilisateur authentifié
            var user = await _userManager.GetUserAsync(User);

            try
            {
                var addState = await _reportService.AddReportDTOAsync(model, user.Id);
                if (!addState) return StatusCode(500);

                return Ok();
            }
            catch (KeyNotFoundException e)
            {
                return BadRequest(new
                {
                    errors = e.Message
                });
            }
        }


        [HttpPut]
        [Route("/api/report")]
        public async Task<IActionResult> UpdateReport([FromBody] ReportDTO report)
        {
            var user = await _userManager.GetUserAsync(User);

            try
            {
                await _reportService.UpdateReportDTOAsync(report, user.Id);
                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return BadRequest(new
                {
                    errors = "Bulletin inconnu"
                });
            }
        }


        [HttpDelete]
        [Route("/api/report/{reportId}")]
        public async Task<IActionResult> DeleteReport([FromRoute] int reportId)
        {
            try
            {
                var isReportRemoved = await _reportService.RemoveReport(reportId);
                if (!isReportRemoved) return StatusCode(500);

                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return BadRequest();
            }
        }
    }
}
