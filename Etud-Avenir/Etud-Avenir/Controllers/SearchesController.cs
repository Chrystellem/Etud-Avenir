using Etud_Avenir.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class SearchesController : Controller
    {
        private readonly SearchService _rechercheService;
        public IActionResult Index()
        {
            return View();
        }
    }
}
