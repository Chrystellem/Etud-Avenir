using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;

namespace Etud_Avenir.Services
{
    public class ReportService
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly List<string> ClassPossibilities = new List<string>(){"Première","Terminale"};
        private readonly List<int> QuarterPossibilities = new List<int>() { 1, 2, 3 };
        
        public ReportService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddReportAsync(int UserId, int quarter, string classReport)
        {
            if( QuarterPossibilities.Contains(quarter) && ClassPossibilities.Contains(classReport) ) {
                Report NewReport = new Report { Quarter = quarter, ClassReport = classReport }; //manque FK
                await _dbContext.AddAsync(NewReport);
                _dbContext.SaveChanges();
            }

            
        }

        public void RemoveReport(int UserId, int quarter, string classReport)
        {

            Report isReport = _dbContext.Report.Where(r => r.Quarter == quarter && r.ClassReport == classReport).Single(); //manque FK
            if (isReport is null)
            {
                _dbContext.Remove(isReport);
                _dbContext.SaveChanges();
            }
        }
    }
}
