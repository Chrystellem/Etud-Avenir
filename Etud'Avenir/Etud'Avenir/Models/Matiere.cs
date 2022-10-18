using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Matiere
    {

        private int idMatiere { get; set; }
        private string nom { get; set; }

        public Matiere(int idMatiere, string nom)
        {
            this.idMatiere = idMatiere;
            this.nom = nom;
        }

    }
}
