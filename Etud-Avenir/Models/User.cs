using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{

    public class User : IdentityUser
    {

        public int UserId { get; set; }
        public string Lastname { get; set; }
        public string Firstname { get; set; }
        public string Mail { get; set; }
        public string PWD { get; set; }
        public string Tel { get; set; }

        //public List<Report>[] reports = new List<Report>[3];
        //public Dictionary<string, List<School>[]> favorites = new Dictionary<string, List<School>[]>();
        //public List<School >[] lastSearch = new List<School>[5];        


    }
}
