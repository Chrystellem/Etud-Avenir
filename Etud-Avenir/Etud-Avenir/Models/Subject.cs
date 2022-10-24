using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Subject
    {

        private int idSubject { get; set; }
        private string name { get; set; }

        public Subject(int idSubject, string name)
        {
            this.idSubject = idSubject;
            this.name = name;
        }

    }
}
