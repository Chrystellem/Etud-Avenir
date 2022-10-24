# ------------------------------------------
#			Etablissement - requêtes
# ------------------------------------------

-- getEtablissement
-- parametres : idEtab
select * from etablissement where idEtablissement ="?idEtab";

-- getEtablissements
-- parametres : List<criteres> criteres
select * from etablissement where criteres="?criteres";

-- insertFavoris
-- parametres : idUser, idEtab
insert into favoris (idUtilisateur, idEtablissement) values ("?idUser","?idEtab");

