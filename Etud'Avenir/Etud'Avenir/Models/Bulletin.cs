using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Bulletin
    {
        private int idBulletin { get; set; }
        private int trimestre { get; set; }

        private Dictionary<Matiere, float> matieres = new();

        public Bulletin(int idBulletin, int trimestre)
        {
            this.idBulletin = idBulletin;
            this.trimestre = trimestre;
        }

    }
}
