using Etud_Avenir.DTOs.Curriculum;
using Etud_Avenir.DTOs.Research;
using Etud_Avenir.DTOs.School;
using Etud_Avenir.Models;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class CurriculumController : Controller
    {
        private readonly CurriculumService _curriculumService;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly FavoriteService _favoriteService;

        public CurriculumController(
            CurriculumService curriculumService, 
            UserManager<IdentityUser> userManager,
            FavoriteService favoriteService)
        {
            _curriculumService = curriculumService;
            _userManager = userManager;
            _favoriteService = favoriteService;
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


        [HttpGet]
        [Authorize]
        [Route("/api/curriculums/favorites")]
        public async Task<IActionResult> GetFavoritesCurriculums()
        {
            var user = await _userManager.GetUserAsync(User);
            return Ok(await _favoriteService.GetCurriculumSmallDTOs(user.Id));
        }


        [HttpPost]
        [Authorize]
        [Route("/api/curriculums/favorites")]
        public async Task<IActionResult> AddCurriculumToFavorite([FromBody] AddCurriculumDTO curriculumDTO)
        {
            var curriculum = await _curriculumService.GetCurriculum(curriculumDTO.CurriculumId);
            if (curriculum == null) return NotFound();

            var user = await _userManager.GetUserAsync(User);

            try
            {
                await _favoriteService.AddCurriculumToFavoritesAsync(curriculum.CurriculumId, user.Id);
                return Ok();
            }
            catch (SqlAlreadyFilledException)
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        [Authorize]
        [Route("/api/curriculums/favorites/{curriculumId}")]
        public async Task<IActionResult> DeleteFavoriteCurriculum([FromRoute] int curriculumId)
        {
            if (curriculumId == 0) return BadRequest();

            var user = await _userManager.GetUserAsync(User);
            _favoriteService.RemoveCurriculumToFavorites(curriculumId, user.Id);

            return Ok();
        }
    }
}
