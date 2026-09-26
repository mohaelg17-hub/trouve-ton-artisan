const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false,
  },
  a_propos: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  site_web: {
    type: DataTypes.STRING(255),
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'artisan',
  timestamps: false,
});

module.exports = Artisan;