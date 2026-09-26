const { Categorie } = require('../models');

// Récupère toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des catégories.' });
  }
};