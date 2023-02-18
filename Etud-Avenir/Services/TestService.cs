using Etud_Avenir.Data;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Services
{
    public class TestService
    {

        private readonly ApplicationDbContext _dbContext;

        FillDBFromCSV fillDB;


        public TestService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
            fillDB = new FillDBFromCSV(dbContext);
        }


        public async Task addTestAsync()
        {

            Test testEntity = new Test {Name = "coco" };
            
            await _dbContext.AddAsync(testEntity);
            _dbContext.SaveChanges();
        }

        public async Task addTest2Async()
        {

            Test2 test2Entity = new Test2 { City = "Montreal", TestId = _dbContext.Test.Where(t => t.Name == "coco").First().Id};

            await _dbContext.AddAsync(test2Entity);
            _dbContext.SaveChanges();
        }

        public void getTests()
        {
            var test2 = _dbContext.Test2.Where(t => t.Id == 2).Single();
            Console.WriteLine(" Test2 : id = " + test2.Id + " --> " + test2.City);

            var testFromTest2 =_dbContext.Test.Where(t => t.Id == test2.TestId).Single();
            Console.WriteLine(" Test From Test2 : id = " + testFromTest2.Id +" --> " + testFromTest2.Name);

            List<Test> tests = _dbContext.Test.Where(t => t.Name == "toto").ToList();
            Console.WriteLine("ALL TOTO TESTS --> ");

            foreach (Test test in tests)
            {
                Console.WriteLine(" + " + test.Id + " - " + test.Name);
            }
            
            var nullTest = _dbContext.Test.Where(t => t.Name == "coco");
            
            if (nullTest.Any())
            {
                Test nt = nullTest.First();
                Console.WriteLine(" nullTest : id = " + nt.Id + " --> " + nt.Name);
            }

            var twoAttributesTest = _dbContext.Test2.Where(t => t.City == "Montreal" && t.TestId == _dbContext.Test.Where(t => t.Name == "coco").First().Id).Single();
            Console.WriteLine(" twoAttributesTest : id = " + twoAttributesTest.Id + " --> " + twoAttributesTest.City);

        }

        public async void testCSV()
        {
            await fillDB.ExtractSubject();
        }

    }
}
