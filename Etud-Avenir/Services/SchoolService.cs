using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Data.Enums;
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

        public SchoolRequest GetSchoolRequest(int schoolId, float score) //gives school info + all of its curriculums
        {
            return new SchoolRequest(GetSchoolModel(schoolId), GetSchoolAllCurriculums(schoolId), score);
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

        public List<SchoolRequest> GetSchoolsRequestsFromList(Dictionary<School, float> schools) //for research
        {
            List<SchoolRequest> schoolRequests = new List<SchoolRequest>();
            foreach (School school in schools.Keys)
            {
                SchoolRequest newSchoolRequest = GetSchoolRequest(school.SchoolId, schools[school]);
                schoolRequests.Add(newSchoolRequest);
            }
            return schoolRequests;
        }

        public List<Curriculum> GetSchoolAllCurriculums(int SchoolId)
        {
            return _dbContext.Curriculum.Where(c => c.SchoolId == SchoolId).ToList();
        }

        public async Task AddSchoolAsync(string name, string address, string website)
        {
            School NewSchool = new School { Name = name, Address = address, Website = website };

            await _dbContext.AddAsync(NewSchool);
            _dbContext.SaveChanges();
        }

        public async Task AddSchoolCurriculumAsync(string name, int duration, int schoolId, string domain, bool isApprenticeship, bool isInitialFormation, AdmissionTypeEnum admissiontype)
        {
            if (GetSchoolModel(schoolId) is not null) 
            {
                Curriculum newCurriculum = new Curriculum { 
                    Name = name, 
                    Duration = duration, 
                    Domain = domain, 
                    AdmissionType = admissiontype, 
                    IsApprenticeship = isApprenticeship, 
                    IsInitialFormation = isInitialFormation, 
                    SchoolId = schoolId
                };

                await _dbContext.AddAsync(newCurriculum);
                _dbContext.SaveChanges();
            }
        }

    }
}
