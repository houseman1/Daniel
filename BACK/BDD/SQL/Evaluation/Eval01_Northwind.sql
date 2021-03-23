--1 - Liste des contacts français :
SELECT CompanyName AS 'Société', ContactName AS 'contact', ContactTitle AS 'Fonction', Phone AS 'Téléphone'
FROM customers
WHERE Country = 'France'

--2 - Produits vendus par le fournisseur « Exotic Liquids » :
SELECT ProductName as 'Produit', UnitPrice as 'Prix' 
FROM products p 
JOIN suppliers s ON p.SupplierID = s.SupplierID
LIMIT 3