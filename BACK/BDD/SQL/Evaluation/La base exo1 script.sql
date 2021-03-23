CREATE DATABASE Exo1;

USE Exo1;

CREATE TABLE `client` (
    `cli_num` int NOT NULL AUTO_INCREMENT,
    `cli_nom` varchar(50) NOT NULL,
    `cli_adresse` varchar(50) NOT NULL,
    `cli_tel` varchar(30) NOT NULL,
    PRIMARY KEY (`cli_num`)
);



CREATE TABLE `produit` (
    `pro_num` int NOT NULL AUTO_INCREMENT,
    `pro_libelle` varchar(50),
    `pro_description` varchar(50),
    PRIMARY KEY (`pro_num`),
);



CREATE TABLE `commande` (
    `com_num` int NOT NULL AUTO_INCREMENT,
    `com_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `com_obs` varchar(50),
    `cli_num` int NOT NULL,
    PRIMARY KEY (`com_num`),
    CONSTRAINT `commande_fk3` FOREIGN KEY (`cli_num`) REFERENCES `client` (`codart`)
);



CREATE TABLE `est_compose` (
    `com_num` int NOT NULL AUTO_INCREMENT,
    `pro_num` int NOT NULL AUTO_INCREMENT,
    `est_qte` int NOT NULL,
    PRIMARY KEY (`com_num`, `pro_num`)
    CONSTRAINT `est_compose_fk1` FOREIGN KEY (`pro_num`) REFERENCES `produit` (`pro_num`)
    CONSTRAINT `est_compose_fk2` FOREIGN KEY (`com_num`) REFERENCES `commande` (`com_num`)
);


CREATE INDEX idx_cli_nom
ON client(cli_nom);

INSERT INTO `client` (`cli_num`, `cli_nom`, `cli_adresse`, `cli_tel`) VALUES
	();