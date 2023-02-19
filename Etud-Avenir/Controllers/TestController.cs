using Etud_Avenir.Data;
using Etud_Avenir.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Etud_Avenir.Controllers
{
    public class TestController : Controller
    {
        // Sans meme avoir de bouton, juste aller sur l'url /Test

        TestService _testService;
        //FillDBFromCSV fillDB;
        public TestController(TestService testService)
        {
            _testService = testService;
        }

        [Route("/addtest")]

        [HttpGet]

        public async Task addTest()
        {
            await _testService.addTestAsync();
        }

        [Route("/addtest2")]

        [HttpGet]

        public async Task addTest2()
        {
            await _testService.addTest2Async();
        }

        [Route("/tests")]

        [HttpGet]

        public void getTests()
        {
            _testService.getTests();
        }

        [Route("/test_csv")]

        [HttpGet]

        public async void TestCSV()
        {
            _testService.testCSV();
        }
    }
}
