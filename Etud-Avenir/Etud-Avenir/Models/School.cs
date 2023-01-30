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
        public float Score { get; set; }
        public string Address { get; set; }
        public string Website { get; set; }

        public List<Curriculum> ListeCurriculum = new();



    }
}
