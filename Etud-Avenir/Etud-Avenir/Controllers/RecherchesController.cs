using Etud_Avenir.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class RecherchesController : Controller
    {
        private readonly RechercheService _rechercheService;
        public IActionResult Index()
        {
            return View();
        }
    }
}
