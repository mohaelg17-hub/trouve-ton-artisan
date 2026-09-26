const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Specialite = sequelize.define('Specialite', {
  nom: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  tableName: 'specialite',
  timestamps: false,
});

module.exports = Specialite;