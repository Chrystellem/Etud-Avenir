import pyodbc
import numpy as np
import pandas as pd

def main():
    print("-----------ETL process started---------------")

    file_path = "fr-esr-principaux-etablissements-enseignement-superieur.xlsx"
    data = pd.read_excel(file_path)

    # Creating Address column
    data["Adresse complet"] = data['Adresse'].astype(str) +", "+ data["Code postal"].astype(str) +", "+ data["Localité"] +", "+ data["Pays"]

    # Creating Score column
    data['Score'] = np.random.randint(5, 20, data.shape[0])
    data['Score'] = data['Score'].astype('float64')

    data = data[['Libellé', 'Score', 'Adresse complet', 'Site internet']]

    # Renaming columns
    data.rename(columns={
        "Libellé": "Name",
        "Adresse complet": "Address",
        "Site internet": "Website"
        }, inplace=True)

    for column in data.select_dtypes(include=['object']).columns:
        data[column] = data[column].where(pd.notnull(data[column]), None)

    # Databse connection
    server = '(localdb)\MSSQLLocalDB'
    database = 'aspnet-Etud_Avenir-A62F8D48-F508-4C69-B02C-A5933462CDB1'

    try:
        cnxn = pyodbc.connect(driver='{SQL Server Native Client 11.0}', 
                            host=server, 
                            database=database, 
                            trusted_connection='yes')
        cursor = cnxn.cursor()
        print("Connection passed!")
    except:
        print("Connection failed!")
    
    # Insert Dataframe into SQL Server:
    for index, row in data.iterrows():
        cursor.execute("INSERT INTO dbo.School (Name,Score,Address,Website) values(?,?,?,?)", row.Name, row.Score, row.Address, row.Website)
    cnxn.commit()
    cursor.close()

    print("-----------ETL process finished--------------")

if __name__ == '__main__':
    main()