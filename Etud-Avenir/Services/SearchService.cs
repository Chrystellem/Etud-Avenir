using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Etud_Avenir.Data;
using Etud_Avenir.Models;
using Microsoft.EntityFrameworkCore;

namespace Etud_Avenir.Services
{ 
    public class SearchService
    {

        private readonly ApplicationDbContext _dbContext;
        private readonly SchoolService _schoolService;


        private Dictionary<School, float> scoreResults;
        private int NB_CRITERIA = 8;


        public SearchService(ApplicationDbContext dbContext, SchoolService schoolService)
        {
            _dbContext = dbContext;
            _schoolService = schoolService;
        }

        public List<SchoolRequest> StartResearch(SearchRequest searchRequest)
        {
            scoreResults = new Dictionary<School, float>();

            return _schoolService.GetSchoolsRequestsFromList(GetResearchResults(searchRequest));
        }

       public Dictionary<School, float> GetResearchResults(SearchRequest searchRequest)
        {
            UpdateResearchResults(GetSchoolsByDomaineAsync(searchRequest.Domaine).Result);
            UpdateResearchResults(GetSchoolsByLocalisationAsync(searchRequest.Localisation).Result);
            UpdateResearchResults(GetSchoolsByAdmissionTypeAsync(searchRequest.AdmissionType).Result);
            UpdateResearchResults(GetSchoolsByApprenticeshipAsync(searchRequest.Apprenticeship).Result);
            UpdateResearchResults(GetSchoolsByStateRecognitionAsync(searchRequest.StateRecognition).Result);
            UpdateResearchResults(GetSchoolsByPrivateSchoolAsync(searchRequest.PrivateSchool).Result);
            UpdateResearchResults(GetSchoolsByAverageSalaryAsync(searchRequest.AverageSalary).Result);
            UpdateResearchResults(GetSchoolsByInsertionRateAsync(searchRequest.InsertionRate).Result);
             

            return GetTopResults();

        }

        public Dictionary<School, float> GetTopResults()
        {
            var sortedScore = scoreResults.OrderBy(s => s.Value).ToDictionary(s => s.Key, sc => sc.Value);
            Dictionary<School, float> topResults = new Dictionary<School, float>();
            for (int i = 0; i < 5; i++)
            {
                topResults.Add(sortedScore.ElementAt(i).Key, ConvertScore(sortedScore.ElementAt(i).Value));
            }
            return topResults;

        }

        public float ConvertScore(float value)
        {
            return value / NB_CRITERIA * 100;
        }

        public void UpdateResearchResults(List<School> schools)
        {
  
            if (scoreResults.Count == 0)
            {
                foreach (School school in schools)
                {
                    scoreResults.Add(school, 1);
                }
            }
            else
            {
                foreach (School school in schools)
                {
                    ComputeSchoolScore(school);
                }
            }
        }

        public void ComputeSchoolScore(School school)
        {
            if (scoreResults.ContainsKey(school))
            {
                scoreResults[school] += 1;
            }
            else
            {
                scoreResults.Add(school, 1);
            }
        }

        public void ComputeCoefScore()
        {

            /* 
                exemple parcour coef
                parcour	                Mathematiques 	Physique  	SVT 	Histoire/Geographie	Francais 	LV2 	Anglais 	Philosophie  	Science economique et sociale	Litterature 	Litterature Etrangere	Droit et grands enjeux du monde contemporain	MI-SVT
                cycle ingenieur efrei	4	            3	        0       0	                2   	    1	    2	        0	            1,5	                            1,5 	        0	        0	        0
                cycle ingenieur esiee	4	            3   	    0	    0       	        2	        1       2	        0	            1,5	                            1,5	            0	        0	        0



              for a student get every note

             select [idUser idBulletin idMatiere] note intitulé 
            from report join grade join subject 
            wherer report.userId = currentUserID

             for each parcour : (a recuperer dans le csv ou une table en fonction du choix et des critère
                 for each matiere 
                        
                    noteMatier = select avg(note) where intitulé = "matiere"
                     coef = select "matiere" from parcour where name = parcour where domain = info  
                    
                     scoreCoef += noteMatiere  * coef

            sort by scoreCoef et return les N premier element 

             mettre score en pourcentage 
            pourcentage = scoreCoef / (15*20)
            si pourcentage   > 85% tres favorable 
                             > 70% favorable
                             > 50% peu favorable 
                             < 50% avis defavorable

             */


        }

        public Task<List<School>> GetSchoolsByDomaineAsync(string domaine)
        => _dbContext.School.Where(s => s.Domaine == domaine).ToListAsync();

        public Task<List<School>> GetSchoolsByLocalisationAsync(string localisation)
        => _dbContext.School.Where(s => s.Localisation == localisation).ToListAsync();

        public Task<List<School>> GetSchoolsByAdmissionTypeAsync(string admissionType)
        => _dbContext.School.Where(s => s.AdmissionType == admissionType).ToListAsync();

        public Task<List<School>> GetSchoolsByApprenticeshipAsync(bool apprenticeship)
        => _dbContext.School.Where(s => s.Apprenticeship == apprenticeship).ToListAsync();

        public Task<List<School>> GetSchoolsByStateRecognitionAsync(bool stateRecognition)
        => _dbContext.School.Where(s => s.StateRecognition == stateRecognition).ToListAsync();

        public Task<List<School>> GetSchoolsByPrivateSchoolAsync(bool privateSchool)
        => _dbContext.School.Where(s => s.PrivateSchool == privateSchool).ToListAsync();

        public Task<List<School>> GetSchoolsByAverageSalaryAsync(float averageSalary)
        => _dbContext.School.Where(s => s.AverageSalary == averageSalary).ToListAsync(); //choisir un taux d'encadrement

        public Task<List<School>> GetSchoolsByInsertionRateAsync(float insertionRate)
        => _dbContext.School.Where(s => s.InsertionRate == insertionRate).ToListAsync(); //choisir un taux d'encadrement



    }
}
