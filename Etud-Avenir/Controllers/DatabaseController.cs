using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Etud_Avenir.Controllers
{
    public class DatabaseController : Controller
    {

        private readonly ILogger<DatabaseController> _logger;

        public DatabaseController(ILogger<DatabaseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/ecoles")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
