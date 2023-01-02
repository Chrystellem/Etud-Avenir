using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Services;


namespace Etud_Avenir.Controllers
{
    public class SchoolsController : Controller
    {
        private readonly SchoolService _etablissementService;
        public IActionResult Index()
        {
            return View();
        }
    }
}
