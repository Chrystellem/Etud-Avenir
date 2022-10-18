using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{
    public class Cursus
    {
       
        private int idCursus { get; set; }
        private string nom { get; set; }
        private int duree { get; set; }

        public Cursus(int idCursus, string nom, int duree)
        {
            this.idCursus = idCursus;
            this.nom = nom;
            this.duree = duree;
        }


    }
}
