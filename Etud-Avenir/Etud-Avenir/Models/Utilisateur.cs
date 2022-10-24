using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{

    public class Utilisateur
    {

        private int idUtilisateur { get; set; }
        private string nom { get; set; }
        private string prenom { get; set; }
        private string mail { get; set; }
        private string pwd { get; set; }
        private string tel { get; set; }

        private List<Bulletin>[] bulletins = new List<Bulletin>[3];
        private Dictionary<string, List<Etablissement>[]> favoris = new Dictionary<string, List<Etablissement>[]>();
        private List<Etablissement >[] derniereRecherche = new List<Etablissement>[5]; 

        public Utilisateur(int idUtilisateur, string nom, string prenom, string mail, string pwd, string tel)
        {
            this.idUtilisateur = idUtilisateur;
            this.nom = nom;
            this.prenom = prenom;
            this.mail = mail;
            this.pwd = pwd;
            this.tel = tel;
        }

        public void updateUser(int idUtilisateur, string nom, string prenom, string mail, string pwd, string tel)
        {
            this.idUtilisateur = idUtilisateur;
            this.nom = nom;
            this.prenom = prenom;
            this.mail = mail;
            this.pwd = pwd;
            this.tel = tel;
        }

        


    }
}
