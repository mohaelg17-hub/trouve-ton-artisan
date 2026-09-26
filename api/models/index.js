const sequelize = require('../config/database');
const Categorie = require('./Categorie');
const Specialite = require('./Specialite');
const Artisan = require('./Artisan');

// Une catégorie a plusieurs spécialités
Categorie.hasMany(Specialite, { foreignKey: 'categorie_id' });
Specialite.belongsTo(Categorie, { foreignKey: 'categorie_id' });

// Une spécialité a plusieurs artisans
Specialite.hasMany(Artisan, { foreignKey: 'specialite_id' });
Artisan.belongsTo(Specialite, { foreignKey: 'specialite_id' });

module.exports = { sequelize, Categorie, Specialite, Artisan };