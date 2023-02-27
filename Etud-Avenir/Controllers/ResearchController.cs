using Etud_Avenir.DTOs.Research;
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

        [Route("")]
        [Route("resultats")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("/api/research/results")]
        public IActionResult GetResultsDTO([FromQuery] ResearchDTO researchDTO)
        {
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
