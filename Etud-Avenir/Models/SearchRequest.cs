using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class SearchRequest //created FromBody
    {

        public string Domaine { get; set; }
        public string Localisation { get; set; }
        public string AdmissionType { get; set; }
        public float AverageSalary { get; set; }
        public float InsertionRate { get; set; }
        public bool Apprenticeship { get; set; }
        public bool StateRecognition { get; set; }
        public bool PrivateSchool { get; set; }

    }
}
