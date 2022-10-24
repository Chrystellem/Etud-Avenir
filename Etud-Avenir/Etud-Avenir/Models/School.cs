using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{

    
    public class School
    {
        
        private int idSchool { get; set; }
        private string name { get; set; }
        private float score { get; set; }
        private string address { get; set; }
        private string website { get; set; }

        private List<Curriculum> listeCurriculum = new();

        public School(int idSchool, string name, float score, string address, string website)
        {
            this.idSchool = idSchool;
            this.name = name;
            this.score = score;
            this.address = address;
            this.website = website;
        }


    }
}
