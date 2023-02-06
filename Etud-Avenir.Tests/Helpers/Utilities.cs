using Etud_Avenir.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Etud_Avenir.Tests.Helpers
{
    public class Utilities
    {
        public static void InitializeDbForTests(ApplicationDbContext dbContext)
        {
            var tableNames = dbContext.Model.GetEntityTypes()
                .Select(t => t.GetTableName())
                .Distinct()
                .ToList();

            foreach (var tableName in tableNames)
            {
                dbContext.Database.ExecuteSqlRaw($"SET FOREIGN_KEY_CHECKS = 0; TRUNCATE TABLE `{tableName}`;");
            }

            dbContext.SaveChanges();
        }
    }
}
