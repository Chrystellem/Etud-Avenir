using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Services;
using Etud_Avenir.DTOs.School;
using Etud_Avenir.DTOs.Research;

namespace Etud_Avenir.Controllers
{
    public class SchoolsController : Controller
    {
        private readonly SearchService _searchService;

        public SchoolsController(SearchService searchService)
        {
            _searchService = searchService;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        [Route("/api/schools/{schoolId}")]
        public async Task<IActionResult> SchoolInformations([FromRoute] int schoolId)
        {
            return Ok(new SchoolInformationsResponseDTO
            {
                SchoolId = 0,
                AdmissionType = Data.Enums.AdmissionTypeEnum.Profile,
                Name = "EFREI Paris",
                IsStateApproved = true,
                IsInternshipAvailable = true,
                IsPublic = false,
                City = "Viullejuif",
                ZipCode = 78330,
                Domain = "Informatique",
                ProgramDuration = 3,
                Fees = new List<FeesDTO>
                {
                    new FeesDTO
                    {
                        Name = "Frais d'inscription",
                        Amount = 1500,
                    },
                    new FeesDTO
                    {
                        Name = "Frais de candidature",
                        Amount = 200,
                    },
                }
            });
        }

    }
}
