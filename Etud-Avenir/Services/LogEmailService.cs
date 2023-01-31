using Etud_Avenir.Data;
using Etud_Avenir.Models;
using System;
using System.Threading.Tasks;

namespace Etud_Avenir.Services
{
    public class LogEmailService
    {
        private readonly ApplicationDbContext _dbContext;

        public LogEmailService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> AddLogEmail(LogEmail logEmail)
        {
            logEmail.CreatedAt = DateTime.Now;
            await _dbContext.AddAsync(logEmail);
            return _dbContext.SaveChanges() == 1;
        }
    }
}
