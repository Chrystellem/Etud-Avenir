using Microsoft.AspNetCore.Mvc;

namespace Etud_Avenir.Controllers
{
    public class TestController : Controller
    {
        // Sans meme avoir de bouton, juste aller sur l'url /Test
        [HttpGet]
        public IActionResult Index()
        {
            // TODO
            return Ok();
        }
    }
}
