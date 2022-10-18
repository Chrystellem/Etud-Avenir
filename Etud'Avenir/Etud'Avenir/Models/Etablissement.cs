using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{

    
    public class Etablissement
    {
        
        private int idEtablissement { get; set; }
        private string nom { get; set; }
        private float score { get; set; }
        private string adresse { get; set; }
        private string site { get; set; }

        private List<Cursus> listCursus = new();

        public Etablissement(int idEtablissement, string nom, float score, string adresse, string site)
        {
            this.idEtablissement = idEtablissement;
            this.nom = nom;
            this.score = score;
            this.adresse = adresse;
            this.site = site;
        }


    }
}
