# ------------------------------------------
#			Utilisateur - requêtes
# ------------------------------------------

# ----------- Profil -----------

-- getProfil 
-- parametres : login et mdp
select * from Utilisateur where login="?login" and mdp="?mdp" ; 

-- updateProfil
-- parametres : idUser et  

# ---------------------------------


# ----------- Bulletin -----------

-- getBulletin 
-- parametres : idUser et numTrim
select * from Bulletin where idUtilisateur="?idUser" and trimestre ="?numTrim";

-- postBulletin 
-- parametres : idUser, numTrim, Dictionnary<Matiere,Note> notes
insert into bulletin(trimestre, idUtilisateur) values ("numTrim", "idUser");
insert into note(idMatiere,idBulletin,note) values ("notes.matiere.idMatiere","getBulletin(idUser,numTrim).idBulletin","notes.note"); -- foreach notes
 
-- updateBulletin
-- parametres : idUser, numTrim, Dictionnary<Matiere,Note> notes

-- deleteBulletin
-- parametres : idUser, numTrim
delete from bulletin where idUtilisateur="?idUser" and trimestre ="?numTrim";

# --------------------------------


# ----------- DerniereRecherche -----------

-- getRecherchesSauvegardees
-- parametres : idUser


-- getRechercheSauvegardee
-- parametres : idUser, idRecherche

# -------------------------------------------


# ----------- Favoris -----------

-- getAllFavoris
-- parametres : idUser
select * from favoris where idUtilisateur = "?idUser";

-- getOneFavoris
-- parametres : idEtab
select * from etablissement where idEtablissement = "?idEtab";

-- deleteFavoris
-- parametres : idUser, idEtab
delete from favoris where idUtilisareur = "?idUser" and idEtablissement = "?idEtab";

# -------------------------------