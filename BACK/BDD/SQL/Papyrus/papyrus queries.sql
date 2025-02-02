--  1 Quelles sont les commandes du fournisseur 09120?

SELECT nomfou, p.codart
FROM produit p
JOIN vente v ON p.codart = v.codart
JOIN fournis f ON v.numfou = f.numfou
WHERE f.numfou = 09120

-- 2 Afficher le code des fournisseurs pour lesquels des commandes ont été passées
SELECT f.numfou, f.nomfou, COUNT(v.numfou) AS 'commandes'
FROM vente v
JOIN fournis f ON f.numfou = v.numfou
GROUP BY f.numfou

-- 3 Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés
SELECT COUNT(numfou) AS 'commandes passées', COUNT(DISTINCT numfou) AS 'nombre de fournisseur'
FROM vente

--  4 Editer les produits ayant un stock inférieur ou égal au stock d'alerte et dont la quantité annuelle est inférieur
--    à1000 (informations à fournir : n° produit, libelléproduit, stock, stockactuel d'alerte, quantitéannuelle)
SELECT codart AS 'numéro produit', libart AS 'libellé produit', stkphy AS 'stock', stkale AS 'stock actuel d''alerte', qteann AS 'quantité annuelle'
FROM produit
WHERE stkale >= stkphy AND qteann < 1000

-- 5 Quels sont les fournisseurs situés dans les départements 75 78 92 77 ? L’affichage (département, nom fournisseur) sera effectué par 
--   département décroissant, puis par ordre alphabétique
SELECT posfou AS 'Département', nomfou AS 'Fournisseur'
FROM fournis
WHERE posfou LIKE '75%' OR '78%' OR '92%' OR '77%'
ORDER BY posfou DESC, nomfou

-- 6 Quelles sont les commandes passées au mois de mars et avril ?
SELECT numcom, datcom
FROM entcom
WHERE MONTH(datcom) = 3 OR MONTH(datcom) = 4

-- 7 Quelles sont les commandes du jour qui ont des observations particulières ?(Affichage numéro de commande, date de commande)
SELECT numcom, datcom
FROM entcom
WHERE obscom IS NULL

-- 8 Lister le total de chaque commande par total décroissant (Affichage numéro de commande et total)
SELECT numcom, SUM(qtecde * priuni) AS 'Total'
FROM ligcom
ORDER BY Total DESC
GROUP BY numcom

-- 9 Lister les commandes dont le total est supérieur à 10000€; on exclura dans le calcul du total les articles commandés en quantité
-- supérieure ou égale à 1000.(Affichage numéro de commande et total
SELECT numcom, SUM(qtecde * priuni) AS 'Total'
FROM ligcom
WHERE qtecde < 1000
GROUP BY numcom
HAVING SUM(qtecde * priuni) > 10000

-- 10 Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le numéro de commande et la date)
SELECT nomfou, e.numcom, datcom
FROM entcom e
JOIN fournis f ON e.numfou = f.numfou
JOIN ligcom l ON e.numcom = l.numcom
ORDER BY nomfou

-- 11 Sortir les produits des commandes ayant le mot "urgent' en observation?(Afficher le numéro de commande,
-- le nom du fournisseur, le libellé du produit et le sous total= quantité commandée * Prix unitaire)
SELECT e.numcom, numfou, obscom, SUM(qtecde * priuni) AS 'Total'
FROM entcom e
JOIN ligcom l ON e.numcom = l.numcom
WHERE obscom LIKE '%urgente'
GROUP BY numcom

-- 12 Coder de 2manières différentes la requête suivante:Lister le nom des fournisseurs susceptibles de livrer au moins un article
SELECT f.numfou, nomfou, stkphy, satisf
FROM fournis f
JOIN vente v ON f.numfou = v.numfou
JOIN produit p ON v.codart = p.codart
WHERE stkphy > 1 AND satisf > 0
GROUP BY f.numfou
ORDER BY satisf DESC

-- 13 Coder de 2 manières différentes la requête suivante: Lister les commandes (Numéro et date) dont le fournisseur 
-- est celui de la commande 70210
SELECT numcom, datcom
FROM entcom 
WHERE numcom = 70210

SELECT numcom, datcom
FROM entcom 
GROUP BY numcom
HAVING numcom = 70210

-- 14 Dans les articles susceptibles d’être vendus, lister les articles moins chers (basés sur Prix1) que le moins cher des rubans 
-- (article dont le premier caractère commence par R). On affichera le libellé de l’article et prix1
SELECT v.codart, libart, prix1
FROM vente v
JOIN produit p ON v.codart = p.codart
WHERE prix1 < (
    SELECT min(prix1)
    FROM vente
    WHERE codart LIKE 'R%'
)

-- 15 Editer la liste des fournisseurs susceptibles de livrer les produits dont le stock est inférieur ou égal à 150 % du stock d'alerte.
-- La liste est triée par produit puis fournisseur
SELECT p.codart, v.numfou, stkale, stkphy
FROM produit p
JOIN vente v ON v.codart = p.codart
JOIN fournis f ON v.numfou = f.numfou
WHERE stkphy <= (stkale * 1.5)
GROUP BY p.codart, v.numfou

SELECT p.codart, v.numfou, stkale, stkphy
FROM produit p
JOIN vente v ON v.codart = p.codart
JOIN fournis f ON v.numfou = f.numfou
GROUP BY p.codart, v.numfou
HAVING stkphy <= (stkale * 1.5)

-- 16 Éditer la liste des fournisseurs susceptibles de livrer les produit dont le stock est inférieur ou égal à 150 % du stock d'alerte
-- et un délai de livraison d'au plus 30 jours. La liste est triée par fournisseur puis produit
SELECT v.numfou, p.codart, stkale, stkphy, delliv
FROM produit p
JOIN vente v ON v.codart = p.codart
JOIN fournis f ON v.numfou = f.numfou
GROUP BY v.numfou, p.codart
HAVING stkphy <= (stkale * 1.5) AND delliv > 30

-- 17 Avec le même type de sélection que ci-dessus, sortir un total des stocks par fournisseur trié par total décroissant
SELECT f.numfou, stkphy AS 'Total stock'
FROM fournis f
JOIN vente v ON v.numfou = f.numfou
JOIN produit p ON v.codart = p.codart
GROUP BY f.numfou
ORDER BY stkphy DESC

-- 18 En fin d'année, sortir la liste des produits dont la quantité réellement commandée dépasse 90% de la quantité annuelle prévue.
SELECT p.codart, libart, qtecde, qteann
FROM produit p
JOIN ligcom l ON l.codart = p.codart
WHERE qtecde > (qteann * 0.9)

-- 19 Calculer le chiffre d'affaire par fournisseur pour l'année 93 sachant que les prix indiqués sont hors taxes et que le taux de TVA est 20%.

SELECT numfou, SUM(qtecde * priuni * 1.20) as 'CA'
FROM ligcom l
JOIN entcom e ON l.numcom = e.numcom
GROUP BY numfou
ORDER BY CA DESC


--Les besoins de mise à jour

--1 Application d'une augmentation de tarif de 4% pour le prix 1, 2% pour le prix2 pour le fournisseur 9180
UPDATE vente
SET prix1 = prix1 * 1.04, prix2 = prix2 * 1.02
WHERE NUMFOU = 9180

--2 Dans la table vente, mettre à jour le prix2 des articles dont le prix2 est null, en affectant a valeur de prix.
UPDATE vente
SET prix2 = 999
WHERE prix2 IS NULL-- no results as no values are null in the 'vente' table

UPDATE vente
SET prix2 = 999
WHERE prix2 = 0-- updated two fields

--3 Mettre à jour le champ obscom en positionnant '*****' pour toutes les commandes dont le fournisseur a un indice de satisfaction <5
UPDATE fournis f
JOIN entcom e ON f.numfou = e.numfou
SET obscom = '*****'
WHERE satisf < 5

--4 Suppression du produit I110
DELETE
FROM produit 
WHERE codart = 'I110'

DELETE
FROM vente
WHERE codart = 'I110'

DELETE
FROM ligcom
WHERE codart = 'I110'
