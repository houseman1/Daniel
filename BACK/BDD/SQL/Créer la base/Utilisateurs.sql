-- util1 doit pouvoir effectuer toutes les actions
CREATE USER 'util1'@'%';
GRANT ALL PRIVILEGES ON hotel* TO 'util'@'%'

-- util2 ne peut que sélectionner les informations dans la base
CREATE user 'util2'@'%';
GRANT SELECT
ON hotel*
TO 'util2'@'%';

-- util3 n'a aucun droit sur la base de données, sauf d'afficher la table station
CREATE user 'util3'@'%';
GRANT SELECT 
ON hotel.station
TO 'util3'@'%';