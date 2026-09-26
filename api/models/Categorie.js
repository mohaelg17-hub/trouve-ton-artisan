const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categorie = sequelize.define('Categorie', {
  nom: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'categorie', // nom exact de la table SQL
  timestamps: false,       
});

module.exports = Categorie;