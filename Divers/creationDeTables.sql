#------------------------------------------------------------
#        Script MySQL
#------------------------------------------------------------
create database EtudAvenir;
use EtudAvenir;

#------------------------------------------------------------
# Table: User
#------------------------------------------------------------

CREATE TABLE User(
        idUser Int  Auto_increment  NOT NULL PRIMARY KEY,
        mail   Varchar (50) NOT NULL ,
        mdp    Varchar (50) NOT NULL
);

#------------------------------------------------------------
# Table: Buletin
#------------------------------------------------------------

CREATE TABLE Bulletin(
        idBulletin Int  Auto_increment  NOT NULL PRIMARY KEY,
        trimestre  Date NOT NULL ,
        idUser     Int NOT NULL,
		FOREIGN KEY (idUser) REFERENCES User(idUser)
);


#------------------------------------------------------------
# Table: Matiere
#------------------------------------------------------------

CREATE TABLE Matiere(
        idMatiere Int  Auto_increment NOT NULL PRIMARY KEY,
        Intitule  Varchar (50) NOT NULL
);

#------------------------------------------------------------
# Table: Etablissement
#------------------------------------------------------------

CREATE TABLE Etablissement(
        idEtablissement Int  Auto_increment  NOT NULL PRIMARY KEY,
        nom             Varchar (50) NOT NULL ,
        score           Float NOT NULL ,
        adresse         Varchar (50) NOT NULL ,
        site            Varchar (50) NOT NULL
);


#------------------------------------------------------------
# Table: Cursus
#------------------------------------------------------------

CREATE TABLE Cursus(
        idCursus  Int  Auto_increment  NOT NULL PRIMARY KEY,
        nomCursus Varchar (50) NOT NULL ,
        duree     Varchar (50) NOT NULL
);


#------------------------------------------------------------
# Table: DerniereRecherche
#------------------------------------------------------------

CREATE TABLE DerniereRecherche(
        idEtablissement Int NOT NULL PRIMARY KEY,
        idUser          Int NOT NULL,
        FOREIGN KEY (idEtablissement) REFERENCES Etablissement(idEtablissement),
		FOREIGN KEY (idUser) REFERENCES User(idUser)
);


#------------------------------------------------------------
# Table: Note
#------------------------------------------------------------

CREATE TABLE Note(
        idMatiere  Int NOT NULL ,
        idBulletin Int NOT NULL ,
        note       Float NOT NULL,
        CONSTRAINT Note_PK PRIMARY KEY (idMatiere,idBulletin),
        FOREIGN KEY (idMatiere) REFERENCES Matiere(idMatiere),	
        FOREIGN KEY (idBulletin) REFERENCES Bulletin(idBulletin)
);


#------------------------------------------------------------
# Table: Favoris
#------------------------------------------------------------

CREATE TABLE Favoris(
        idEtablissement Int NOT NULL ,
        idUser          Int NOT NULL,
        CONSTRAINT Favoris_PK PRIMARY KEY (idEtablissement,idUser),
        FOREIGN KEY (idEtablissement) REFERENCES Etablissement(idEtablissement),
		FOREIGN KEY (idUser) REFERENCES User(idUser)
);


#------------------------------------------------------------
# Table: CursusEtablissement
#------------------------------------------------------------

CREATE TABLE CursusEtablissement(
        idCursus        Int NOT NULL ,
        idEtablissement Int NOT NULL,
        CONSTRAINT propose_PK PRIMARY KEY (idCursus,idEtablissement),
        FOREIGN KEY (idCursus) REFERENCES Cursus(idCursus),
        FOREIGN KEY (idEtablissement) REFERENCES Etablissement(idEtablissement)
);

