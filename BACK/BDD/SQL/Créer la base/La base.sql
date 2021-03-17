CREATE TABLE station (
    id_station INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_station VARCHAR(50) NOT NULL,
)

CREATE TABLE hotel (
    id_hotel INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_hotel VARCHAR(50),
    adresse_hotel VARCHAR(50),
    capacite_hotel INT,
    categorie_hotel VARCHAR(50),
    -- foreign key id_station
    id_station INT NOT NULL,
    CONSTRAINT station_id_station_fk
    FOREIGN KEY (id_station)
    REFERENCES station (id_station)
)

CREATE TABLE chambre (
    id_chambre INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type_chambre VARCHAR(50),
    capacite_chambre INT,
    degre_confort VARCHAR(50),
    exposition VARCHAR (50),
    -- foreign key id_hotel
    id_hotel INT NOT NULL,
    CONSTRAINT hotel_id_hotel_fk
    FOREIGN KEY (id_hotel)
    REFERENCES hotel (id_hotel)
)

CREATE TABLE client (
    id_client INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom_client VARCHAR (50),
    prenom_client VARCHAR(50),
    adresse_client VARCHAR(50)
)

CREATE TABLE reservation (
    date_debut DATE,
    date_fin DATE,
    date_reservation DATE,
    montant_arrhes DECIMAL,
    prix_total DECIMAL,
    -- foreign key id_chambre
    id_chambre INT NOT NULL,
    CONSTRAINT chambre_id_chambre_fk
    FOREIGN KEY (id_chambre)
    REFERENCES chambre (id_chambre),
    -- foreign key id_client
    id_client INT NOT NULL,
    CONSTRAINT client_id_client_fk
    FOREIGN KEY (id_client)
    REFERENCES client (id_client)
)