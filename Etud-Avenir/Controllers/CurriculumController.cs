using Etud_Avenir.DTOs.Research;
using Etud_Avenir.DTOs.School;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class CurriculumController : Controller
    {
        private readonly CurriculumService _curriculumService;

        public CurriculumController(CurriculumService curriculumService)
        {
            _curriculumService = curriculumService;
        }

        [HttpGet]
        [Route("/api/curriculums/{curriculumId}")]
        public async Task<IActionResult> GetCurriculum([FromRoute] int curriculumId)
        {
            try
            {
                var curriculumDTO = await _curriculumService.GetCurriculumInformationDTO(curriculumId);
                return Ok(curriculumDTO);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
        }

        [HttpGet]
        [Route("/api/curriculums")]
        public async Task<IActionResult> GetCurriculums([FromQuery] ResearchDTO researchDTO)
        {
            var results = await _curriculumService.GetCurriculumDTOs(researchDTO);
            return Ok(results);
        }
    }
}
