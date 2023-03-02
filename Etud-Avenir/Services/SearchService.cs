using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.DTOs.Report;
using Etud_Avenir.DTOs.Research;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;

namespace Etud_Avenir.Services
{
    public class SearchService
    {

        private readonly ApplicationDbContext _dbContext;
        private ResearchDTO research;
        private List<ReportDTO> userReports;

        public SearchService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ResearchResultSchoolDTO> StartResearch(ResearchDTO researchDTO, List<ReportDTO> userReportsDTO)
        {
            research = researchDTO;
            userReports = userReportsDTO;
            List<Curriculum> curriculums = GetCurriculumByDomain(research.Domain);
            List<School> schools = GetCurriculumsSchools(curriculums);
            schools = FilterSchoolsByCurriculums(schools);
            curriculums = RemoveCurriculumsOfNoneFilteredSchools(schools, curriculums);
            Dictionary<Curriculum, double> curriculumsScores = GetCurriculumsWithScores(curriculums);
            return GetResearchResults(curriculumsScores);
        }

        public List<Curriculum> GetCurriculumByDomain(string Domain)
        {
            List<Curriculum> curriculumsOfDomain = _dbContext.Curriculum.Where(c => c.Domain == Domain).ToList();
            return FilterCurriculumsByDomain(curriculumsOfDomain);
        }

        public List<Curriculum> FilterCurriculumsByDomain(List<Curriculum> curriculums)
        {
            List<Curriculum> curriculumsFiltered = new List<Curriculum>();
            foreach (Curriculum curriculum in curriculums)
            {
                if(research.AdmissionType == curriculum.AdmissionType)
                {
                    if (research.IsApprenticeship && curriculum.IsApprenticeship)
                    {
                        curriculumsFiltered.Add(curriculum);
                    }
                    else if (research.IsInitialFormation && curriculum.IsInitialFormation)
                    {
                        curriculumsFiltered.Add(curriculum);
                    }
                }
            }

            return curriculumsFiltered;
        }

        public School GetCurriculumSchool(Curriculum curriculum)
        {
            return _dbContext.School.Where(s => curriculum.SchoolId == s.SchoolId).FirstOrDefault();
        }

        public List<School> GetCurriculumsSchools(List<Curriculum> curriculums)
        {
            return _dbContext.School.Where(s => curriculums.Any(c => c.SchoolId == s.SchoolId)).ToList();
        }

        public List<School> FilterSchoolsByCurriculums(List<School> curriculumSchools)
        {
            List<School> schoolsFiltered = new List<School>();
            foreach (School school in curriculumSchools)
            {
                if (school.Address.Contains(research.Localization))
                {
                    if (research.IsPrivate && school.IsPrivate)
                    {
                        schoolsFiltered.Add(school);
                    }
                    else if (research.IsPublic && school.IsPublic)
                    {
                        schoolsFiltered.Add(school);
                    }
                }
            }

            return schoolsFiltered;
        }

        public List<Curriculum> RemoveCurriculumsOfNoneFilteredSchools(List<School> schools, List<Curriculum> curriculums)
        {
            List<Curriculum> curriculumsFiltered = new List<Curriculum>();
            foreach (Curriculum curriculum in curriculums)
            {
                if (schools.Any(s => s.SchoolId == curriculum.SchoolId))
                {
                    curriculumsFiltered.Add(curriculum);
                }
            }
            return curriculumsFiltered;
        }

        public Dictionary<Curriculum, double> GetCurriculumsWithScores(List<Curriculum> curriculums)
        {
            Dictionary<Curriculum, double> curriculumsScores = new Dictionary<Curriculum, double>();
            List<GradeBySubjectDTO> studentGrades = (List<GradeBySubjectDTO>)userReports.Select(r => r.GradeBySubject); // A REVOIR
            foreach (Curriculum curriculum in curriculums)
            {
                double score = ComputeCurriculumScore(curriculum, studentGrades);
                curriculumsScores.Add(curriculum, score);

            }
            return curriculumsScores;
        }


        public double ComputeCurriculumScore(Curriculum curriculum, List<GradeBySubjectDTO> studentsGrades)
        {
            int MaximumGrade = 20;
            int SumCoefficients = 15;
            int TotalCoefficients = MaximumGrade * SumCoefficients;

            double curriculumScore = 0;
            
            foreach(Subject subject in _dbContext.Subject.ToList())
            {
                List<GradeBySubjectDTO> subjectGrades = studentsGrades.FindAll(s => s.Subject == subject.Name);
                double coefficient = _dbContext.CurriculumCoefficient.Where(c => c.SubjectId == subject.SubjectId && c.CurriculumId == curriculum.CurriculumId ).FirstOrDefault().Value;
                curriculumScore += subjectGrades.Average(s => s.Grade) * coefficient;
            }
            return curriculumScore / TotalCoefficients;
        }

        public List<ResearchResultSchoolDTO> GetResearchResults(Dictionary<Curriculum, double> curriculumsScores)
        {
            Dictionary<Curriculum, double> topCurriculumsScores = Get5BestCurriculums(curriculumsScores);
            return GetResultsDTOs(topCurriculumsScores);

        }

        public List<ResearchResultSchoolDTO> GetResultsDTOs(Dictionary<Curriculum, double> topCurriculumsScores)
        {
            List<ResearchResultSchoolDTO> resultsDTOs = new List<ResearchResultSchoolDTO>();

            foreach(Curriculum curriculum in topCurriculumsScores.Keys)
            {
                School school = GetCurriculumSchool(curriculum);
                resultsDTOs.Add(new ResearchResultSchoolDTO { 
                    SchoolId = school.SchoolId, 
                    Name = school.Name, 
                    City = school.City, 
                    Domain = curriculum.Domain, 
                    ZipCode = school.ZipCode, 
                    Formation = curriculum.Name, 
                    Score = topCurriculumsScores[curriculum]
                });
            }
            return resultsDTOs;
        }

        public Dictionary<Curriculum, double> Get5BestCurriculums(Dictionary<Curriculum, double> curriculumsScores)
        {
            return (Dictionary<Curriculum, double>)curriculumsScores.OrderByDescending(c => c.Value).Take(5);
        }
    }
}
