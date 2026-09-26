-- Sélection de la base de données existante
CREATE DATABASE IF NOT EXISTS artisan;
USE artisan;

-- Table CATEGORIE
CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE
);

-- Table SPECIALITE
CREATE TABLE specialite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    categorie_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);

-- Table ARTISAN
CREATE TABLE artisan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    a_propos TEXT,
    email VARCHAR(150) NOT NULL,
    site_web VARCHAR(255),
    top BOOLEAN DEFAULT FALSE,
    specialite_id INT NOT NULL,
    FOREIGN KEY (specialite_id) REFERENCES specialite(id)
);