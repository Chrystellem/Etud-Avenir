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
        public virtual DbSet<Test> tests { get; set; }

        public TestService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void printTest()
        {
            Console.WriteLine(" ======================================== PRINT TEST ====================================== ");
        }

        public async Task addTestAsync()
        {

            Test testEntity = new Test {Name = "tutu" };
            
            await _dbContext.AddAsync(testEntity);
            _dbContext.SaveChanges();

            printTest();
        }

        public void getTests()
        {
            Test test2 = _dbContext.Test.Where(t => t.Id == 2).Single();
            Console.WriteLine("id = 2 --> " + test2.Name);

            Test test16 = _dbContext.Test.Where(t => t.Id == 16).Single();
            Console.WriteLine("id = 16 --> " + test16.Name);

        }

    }
}
