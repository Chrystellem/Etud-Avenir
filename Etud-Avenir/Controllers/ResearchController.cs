using Etud_Avenir.DTOs.Research;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    [Route("recherche")]
    public class ResearchController : Controller
    {
        private readonly ReportService _reportService;

        public ResearchController(ReportService reportService)
        {
            _reportService = reportService;
        }

        [Route("")]
        [Route("resultats")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/api/research/results")]
        public async Task<IActionResult> GetResultsDTO([FromQuery] ResearchDTO researchDTO)
        {
            if (researchDTO.Reports.Count != 3) return BadRequest();

            try
            {
                var reportsWithGrades = await _reportService.GetReportDTOsFromCookiesOrDatabase(researchDTO.Reports, HttpContext);
                if (reportsWithGrades.Count != 3) return NotFound();
            }
            catch (KeyNotFoundException) { return NotFound(); }

            return Ok(new List<ResearchResultSchoolDTO>
            {
                new ResearchResultSchoolDTO
                {
                    Name = "EFREI Paris",
                    SchoolId = 1,
                    City = "Villejuif",
                    ZipCode = 78330,
                    Coefficient = 80.3,
                    Domain = "informatique", 
                    Formation = "Cycle ingénieur"
                }
            });
        }
    }
}
