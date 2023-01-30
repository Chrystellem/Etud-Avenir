using Etud_Avenir.Models;
using Etud_Avenir.ViewModels.Home;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Route("/")]
        [Route("/connexion")]
        [Route("/inscription")]
        [Route("/mot-de-passe-oublie")]
        [Route("/confirmation-inscription-email")]
        [Route("/reinitialisation-mot-de-passe")]
        public IActionResult Index(string confirm = null)
        {
            if (confirm == null) return View(new IndexViewModel { ShouldDisplayFeedback = false });

            // Gère le cas d'une confirmation d'inscription
            var model = new IndexViewModel
            {
                ShouldDisplayFeedback = true,
                IsSuccessfullFeedback = confirm == "success",
                FeedbackContent = confirm == "success" ? "Votre inscription a bien été confirmée" : "Nous n'avons pas vu valider votre inscription"
            };
            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
