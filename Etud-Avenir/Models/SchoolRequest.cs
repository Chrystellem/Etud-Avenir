using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class SchoolRequest
    {
        public School School { get; set; }

        public List<Curriculum> Curriculums = new List<Curriculum>();

        public float Score { get; set; }

        public SchoolRequest (School school, List<Curriculum> curriculums)
        {
            School = school;
            Curriculums = curriculums;
        }

        public SchoolRequest(School school, List<Curriculum> curriculums, float score)
        {
            School = school;
            Curriculums = curriculums;
            Score = score;
        }

    }
}
