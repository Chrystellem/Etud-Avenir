using Etud_Avenir.Data;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class AdminController : Controller
    {
        // Sans meme avoir de bouton, juste aller sur l'url /Admin

        AdminService _adminService;

        public AdminController(AdminService adminService)
        {
            _adminService = adminService;
        }

        [Route("/Admin_Matiere")]

        [HttpGet]

        public async void MatiererCSV()
        {
            await _adminService.MatiereCSV();
        }

    }
}
