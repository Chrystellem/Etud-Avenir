using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{


    public class School
    {

        public int SchoolId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }
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
