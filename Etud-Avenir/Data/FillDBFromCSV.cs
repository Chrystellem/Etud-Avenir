using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using System.Globalization;

namespace Etud_Avenir.Data
{

    public class FillDBFromCSV
    {

        public void ExtractSubject()
        {

            // path to the csv file
            string path = "Matierer.csv";

            string[] lines = System.IO.File.ReadAllLines(path);
            foreach (string line in lines)
            {
                string[] columns = line.Split(',');
                foreach (string column in columns)
                {
                    // Do something
                }
            }
        }

    }
}
