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
        [Authorize]
        [Route("/api/reports")]
        public async Task<IActionResult> GetReports()
        {
            var user = await _userManager.GetUserAsync(User);

            var reports = await _reportService.GetSmallReportsDTOAsync(user.Id);
            return Ok(reports);
        }

        //[HttpPost]
        //[Route("/api/report/temporary")]
        //public IActionResult CreateTemporaryReport([FromBody] ReportDTO reportDTO)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(new
        //        {
        //            errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage)
        //        });
        //    }

        //    _reportService.SaveReportDTOInCookies(reportDTO, HttpContext);
        //    return Ok();
        //}

        [HttpPost]
        [Authorize]
        [Route("/api/report")]
        public async Task<IActionResult> CreateReport([FromBody] ReportDTO reportDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage)
                });
            }

            try
            {
                var user = await _userManager.GetUserAsync(User);

                var addState = await _reportService.AddReportDTOAsync(reportDTO, user.Id);
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
