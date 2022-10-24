using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    [Route("Recherche")]
    public class ResearchController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("/Note")]
        public IActionResult Grade()
        {
            return View();
        }
    }
}
