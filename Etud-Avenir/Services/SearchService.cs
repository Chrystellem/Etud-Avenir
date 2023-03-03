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
                /*if(research.AdmissionType != Data.Enums.AdmissionTypeEnum.NoSelection)
                {
                    if (research.AdmissionType == curriculum.AdmissionType)
                    {
                        if (CheckCurriculumFormationType(curriculum))
                        {
                            curriculumsFiltered.Add(curriculum);
                        }
                    }
                }
                else if(CheckCurriculumFormationType(curriculum))
                {
                    curriculumsFiltered.Add(curriculum);
                }*/
                if (CheckCurriculumAdmissionType(curriculum) && CheckCurriculumFormationType(curriculum)) //&& CheckCurriculumRecognition(curriculum))
                {
                    curriculumsFiltered.Add(curriculum);
                }
            }

            return curriculumsFiltered;
        }

        public bool CheckCurriculumAdmissionType(Curriculum curriculum)
        {
            if (research.AdmissionType == Data.Enums.AdmissionTypeEnum.NoSelection)
            {
                return true;
            }
            else if(research.AdmissionType == curriculum.AdmissionType)
            {
                return true;
            }
            return false;
        }

        /*public bool CheckCurriculumRecognition(Curriculum curriculum)
        {
            if (research.StateRecognition)
            {
                if (curriculum.StateRecognition)
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
            return true;
        }*/

        public bool CheckCurriculumFormationType(Curriculum curriculum)
        {
            if (research.IsApprenticeship && curriculum.IsApprenticeship)
            {
                return true;
            }
            else if (research.IsInitialFormation && curriculum.IsInitialFormation)
            {
                return true;
            }
            return false;
        }

        public School GetCurriculumSchool(Curriculum curriculum)
        {
            return _dbContext.School.Where(s => curriculum.SchoolId == s.SchoolId).FirstOrDefault();
        }

        public List<School> GetCurriculumsSchools(List<Curriculum> curriculums)
        {
            List<School> schools = new List<School>();
            foreach (Curriculum curriculum in curriculums)
            {
                School school = _dbContext.School.Where(s => s.SchoolId == curriculum.SchoolId).Single();
                if (! schools.Contains(school))
                {
                    schools.Add(school);
                }
            }
            return schools;

        }

        public List<School> FilterSchoolsByCurriculums(List<School> curriculumSchools)
        {
            List<School> schoolsFiltered = new List<School>();
            foreach (School school in curriculumSchools)
            {
                if (CheckSchoolLocalization(school) && CheckSchoolStatus(school))
                {
                        schoolsFiltered.Add(school);
                }
            }
            return schoolsFiltered;
        }

        public bool CheckSchoolLocalization(School school)
        {
            return school.Address.Contains(research.Localization);
        }

        public bool CheckSchoolStatus(School school)
        {
            if (research.IsPrivate && school.IsPrivate)
            {
                return true;
            }
            else if (research.IsPublic && school.IsPublic)
            {
                return true;
            }
            return false;
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
            List<GradeBySubjectDTO> studentGrades = GetUserGrades();
            foreach (Curriculum curriculum in curriculums)
            {
                double score = ComputeCurriculumScore(curriculum, studentGrades);
                curriculumsScores.Add(curriculum, score);

            }
            return curriculumsScores;
        }

        public List<GradeBySubjectDTO> GetUserGrades()
        {
            List<GradeBySubjectDTO> grades = new List<GradeBySubjectDTO>();
            foreach (ReportDTO report in userReports)
            {
                grades.AddRange(report.GradeBySubject);
            }

            return grades;
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
            return Math.Round(curriculumScore / TotalCoefficients, 2);
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
                    CurriculumId = curriculum.CurriculumId,
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
            return new Dictionary<Curriculum, double> (curriculumsScores.OrderByDescending(c => c.Value).Take(5));
        }
    }
}
