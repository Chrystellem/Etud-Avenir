using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class LastSearch
    {

        public int LastSearchId { get; set; }
        public int? SchoolId { get; set; }
        public int? UserId { get; set; }

        public int Score { get; set; }

    }
}
