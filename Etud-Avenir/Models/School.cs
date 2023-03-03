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
        public int ZipCode { get; set; }
        public string City { get; set; }
        public float AverageSalary { get; set; }
        public float InsertionRate { get; set; }

        public bool IsPublic { get; set; }
        public bool IsPrivate { get; set; }

    }
}
