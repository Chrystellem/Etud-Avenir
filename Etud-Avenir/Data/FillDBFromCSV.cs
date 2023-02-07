using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using System.Globalization;
using Etud_Avenir.Models;

namespace Etud_Avenir.Data
{

    public class FillDBFromCSV
    {
        private const string Value = "Main Method";
        private readonly ApplicationDbContext _dbContext;

        public FillDBFromCSV(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task ExtractSubject()
        {

            // path to the csv file
            string path = "Matierer.csv";

            string[] lines = System.IO.File.ReadAllLines(path);
            foreach (string line in lines)
            {
                Subject Subject = new Subject { Name = line };

                await _dbContext.AddAsync(Subject);
                _dbContext.SaveChanges();
            }
        }

        static public async Task Main(String[] args)
        {

            Console.WriteLine(Value);
            object p = await ExtractSubject();

        }

    }
}
