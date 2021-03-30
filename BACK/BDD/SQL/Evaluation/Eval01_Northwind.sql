--1 - Liste des contacts français :
SELECT CompanyName AS 'Société', ContactName AS 'contact', ContactTitle AS 'Fonction', Phone AS 'Téléphone'
FROM customers
WHERE Country = 'France'

--2 - Produits vendus par le fournisseur « Exotic Liquids » :
SELECT ProductName as 'Produit', UnitPrice as 'Prix' 
FROM products p 
JOIN suppliers s ON p.SupplierID = s.SupplierID
WHERE CompanyName = "Exotic Liquids"

--3 - Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant :
SELECT CompanyName AS 'Fournisseur', COUNT(s.SupplierID) AS 'Nbre produits' 
FROM suppliers s
JOIN products p ON s.SupplierID = p.SupplierID
WHERE Country = 'France'
GROUP BY s.SupplierID

--4 - Liste des clients Français ayant plus de 10 commandes :
SELECT CompanyName AS 'Client', COUNT(CompanyName) AS 'Nbre commandes'
FROM customers c
JOIN orders o ON c.CustomerID = o.CustomerID 
WHERE Country = 'France'
GROUP BY CompanyName
HAVING COUNT(CompanyName) > 10

--5 - Liste des clients ayant un chiffre d’affaires > 30.000 :
SELECT CompanyName, SUM(UnitPrice * Quantity) AS 'CA', Country
FROM customers c
JOIN orders o ON c.CustomerID = o.CustomerID
JOIN `order details` od ON o.OrderID = od.OrderID
GROUP BY CompanyName
HAVING CA > 30000
ORDER BY CA DESC    

--6 – Liste des pays dont les clients ont passé commande de produits fournis par « Exotic Liquids » :
SELECT c.Country AS 'Pays'
FROM customers c
JOIN orders o ON c.CustomerID = o.CustomerID
JOIN `order details` od ON o.OrderID = od.OrderID
JOIN products p ON od.ProductID = p.ProductID
JOIN suppliers s ON s.SupplierID = p.SupplierID
WHERE s.CompanyName = "Exotic Liquids"
GROUP BY c.Country

--7 – Montant des ventes de 1997 
SELECT SUM(UnitPrice * Quantity)
FROM `order details` od
JOIN orders o ON od.OrderID = o.OrderID
JOIN customers c ON o.CustomerID = c.CustomerID
WHERE YEAR(OrderDate) = 1997

--8 – Montant des ventes de 1997 mois par mois :
SELECT MONTH(OrderDate), SUM(UnitPrice * Quantity)
FROM `order details` od
JOIN orders o ON od.OrderID = o.OrderID
JOIN customers c ON o.CustomerID = c.CustomerID
WHERE YEAR(OrderDate) = 1997
GROUP BY MONTH(OrderDate)

--9 – Depuis quelle date le client « Du monde entier » n’a plus commandé ?
SELECT MAX(OrderDate) AS 'Date de dernière commande'
FROM `order details` od
JOIN orders o ON od.OrderID = o.OrderID
JOIN customers c ON o.CustomerID = c.CustomerID
WHERE CompanyName = 'Du monde entier'

--10 – Quel est le délai moyen de livraison en jours ?
SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS 'Délai moyen de livraison en jours'
FROM orders