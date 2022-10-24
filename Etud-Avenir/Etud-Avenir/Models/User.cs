using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Etud_Avenir.Models
{

    public class User
    {

        private int idUser { get; set; }
        private string lastname { get; set; }
        private string firstname { get; set; }
        private string mail { get; set; }
        private string pwd { get; set; }
        private string tel { get; set; }

        private List<Report>[] reports = new List<Report>[3];
        private Dictionary<string, List<School>[]> favorites = new Dictionary<string, List<School>[]>();
        private List<School >[] lastSearch = new List<School>[5]; 

        public User(int idUser, string lastname, string firstname, string mail, string pwd, string tel)
        {
            this.idUser = idUser;
            this.lastname = lastname;
            this.firstname = firstname;
            this.mail = mail;
            this.pwd = pwd;
            this.tel = tel;
        }

        public void updateUser(int idUser, string lastname, string firstname, string mail, string pwd, string tel)
        {
            this.idUser = idUser;
            this.lastname = lastname;
            this.firstname = firstname;
            this.mail = mail;
            this.pwd = pwd;
            this.tel = tel;
        }

        


    }
}
