using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Services;


namespace Etud_Avenir.Controllers
{
    public class UsersController : Controller
    {
        private readonly UserService _utilisateurService;

        public IActionResult Index()
        {
            return View();
        }
    }
}
