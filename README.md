# Trouve ton artisan !

Plateforme de mise en relation entre particuliers et artisans de la région Auvergne-Rhône-Alpes, réalisée dans le cadre d'une formation.

## Démo en ligne

- Site : https://trouve-ton-artisan-ten-eosin.vercel.app
- API :  https://trouve-ton-artisan-q7t4.onrender.com

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- [MySQL](https://www.mysql.com/) ou [MariaDB](https://mariadb.org/)
- Un gestionnaire de paquets npm (fourni avec Node.js)

## Installation en local

### 1. Cloner le repository

\`\`\`bash
git clone https://github.com/mohaelg17-hub/trouve-ton-artisan.git
cd trouve-ton-artisan
\`\`\`

### 2. Installer et configurer l'API

\`\`\`bash
cd api
npm install
\`\`\`

Créer un fichier `.env` dans le dossier `api/` avec le contenu suivant :

\`\`\`
DB_HOST=localhost
DB_PORT=3306
DB_NAME=artisan
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
EMAIL_USER=votre_email@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_application
PORT=3001
\`\`\`

Créer la base de données et les tables :

\`\`\`bash
mysql -u root -p < database/create.sql
mysql -u root -p < database/seed.sql
\`\`\`

Lancer l'API :

\`\`\`bash
npm run dev
\`\`\`

L'API est accessible sur `http://localhost:3001`.

### 3. Installer et configurer le frontend

\`\`\`bash
cd ../front
npm install
\`\`\`

Créer un fichier `.env` dans le dossier `front/` avec le contenu suivant :

\`\`\`
VITE_API_URL=http://localhost:3001
\`\`\`

Lancer le frontend :

\`\`\`bash
npm run dev
\`\`\`

Le site est accessible sur `http://localhost:5173`.

## Technologies utilisées

- **Frontend** : React, React Router, Bootstrap, Sass
- **Backend** : Node.js, Express, Sequelize
- **Base de données** : MySQL / MariaDB
- **Sécurité** : Helmet, CORS, rate limiting, validation des entrées
- **Hébergement** : Vercel (frontend), Render (API), Clever Cloud (base de données)

## Structure du projet

\`\`\`
artisan-project/
├── api/              # Backend Node.js/Express
│   ├── config/
│   ├── controllers/
│   ├── database/     # Scripts SQL
│   ├── models/
│   └── routes/
└── front/            # Frontend React
    └── src/
        ├── components/
        ├── pages/
        └── styles/
\`\`\`