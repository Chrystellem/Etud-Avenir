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
        private readonly SearchService _searchService;

        public ResearchController(
            ReportService reportService, SearchService searchService)
        {
            _reportService = reportService;
            _searchService = searchService;
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

                return Ok(_searchService.StartResearch(researchDTO, reportsWithGrades));
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
                    Score = 80.3,
                    Domain = "informatique", 
                    Formation = "Cycle ingénieur"
                }
            });
        }
    }
}
