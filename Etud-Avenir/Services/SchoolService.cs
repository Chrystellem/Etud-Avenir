using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;

namespace Etud_Avenir.Services
{

    public class SchoolService
    {

        private readonly ApplicationDbContext _dbContext;

        public SchoolService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public School GetSchoolModel(int SchoolId) //only school model data
        {
            return _dbContext.School.Where(s => s.SchoolId == SchoolId).Single();
        }

        public List<School> GetAllSchoolsModel() //for databasePage --> GetSchoolsRequestsFromList(GetAllSchoolsModel())
        {
            return _dbContext.School.ToList(); 
        }

        public SchoolRequest GetSchoolRequest(int schoolId) //gives school info + all of its curriculums
        {
            return new SchoolRequest(GetSchoolModel(schoolId), GetSchoolAllCurriculums(schoolId));
        }

        public List<SchoolRequest> GetSchoolsRequestsFromList(List<School> schools)
        {
            List<SchoolRequest> schoolRequests = new List<SchoolRequest>();
            foreach (School school in schools)
            {
                SchoolRequest newSchoolRequest = GetSchoolRequest(school.SchoolId);
                schoolRequests.Add(newSchoolRequest);
            }
            return schoolRequests;
        }

        public List<Curriculum> GetSchoolAllCurriculums(int SchoolId)
        {
            List<CurriculumSchool> schoolCurriculums = _dbContext.CurriculumSchool.Where(cs => cs.SchoolId == SchoolId).ToList();
            return _dbContext.Curriculum.Where(c => c.CurriculumId == schoolCurriculums.Find(sc => sc.CurriculumId == c.CurriculumId).CurriculumId).ToList();
        }

        public async Task AddSchoolAsync(string name, string address, string website)
        {
            School NewSchool = new School { Name = name, Address = address, Website = website };

            await _dbContext.AddAsync(NewSchool);
            _dbContext.SaveChanges();
        }

        public async Task AddSchoolCurriculumAsync(string name, int duration, int idSchool)
        {
            if (GetSchoolModel(idSchool) is not null) 
            {
                await AddNewCurriculumAsync(name, duration);
                int newCurriculumId = _dbContext.Curriculum.Where(c => c.Name == name && c.Duration == duration).Single().CurriculumId;
                CurriculumSchool schoolCurriculum = new CurriculumSchool { SchoolId = idSchool, CurriculumId = newCurriculumId };
                await _dbContext.AddAsync(schoolCurriculum);
                _dbContext.SaveChanges();
            }
        }

        private async Task AddNewCurriculumAsync(string name,int duration)
        {
            Curriculum newCurriculum = new Curriculum { Name = name, Duration = duration };
            Curriculum isCurriculum = _dbContext.Curriculum.Where(c => c.Name == name && c.Duration == duration).Single();
            if (isCurriculum is null)
            {
                await _dbContext.AddAsync(newCurriculum);
            }
        }

    }
}
