using Etud_Avenir.Data;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Services
{
    public class AdminService
    {

        private readonly ApplicationDbContext _dbContext;

        public AdminService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task MatiereCSV()
        {
            // path to the csv file
            string path = "Data/Matiere.csv";

            string[] lines = System.IO.File.ReadAllLines(path);
            foreach (string line in lines)
            {

                Console.WriteLine("line =" + line);
                Subject Subject = new Subject { Name = line };

                await _dbContext.AddAsync(Subject);
                _dbContext.SaveChanges();
            }
        }

        public async Task FormCSV()
        {

        }

    }
}
