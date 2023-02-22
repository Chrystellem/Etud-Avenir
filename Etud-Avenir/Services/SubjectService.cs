using Etud_Avenir.Data;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Etud_Avenir.Services
{
    public class SubjectService
    {
        private readonly ApplicationDbContext _dbContext;
        public SubjectService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<Subject>> GetSubjects()
            => _dbContext.Subject.ToListAsync();
    }
}
