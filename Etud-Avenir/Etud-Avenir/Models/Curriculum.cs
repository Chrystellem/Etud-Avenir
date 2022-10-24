using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Curriculum
    {
       
        private int idCurriculum { get; set; }
        private string name { get; set; }
        private int duration { get; set; }

        public Curriculum(int idCurriculum, string name, int duration)
        {
            this.idCurriculum = idCurriculum;
            this.name = name;
            this.duration = duration;
        }


    }
}
