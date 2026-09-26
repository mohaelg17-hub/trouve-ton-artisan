const { Artisan, Specialite, Categorie } = require('../models');
const { Op } = require('sequelize');

exports.getAllArtisans = async (req, res) => {
  try {
    const { categorie, recherche, top } = req.query;

    const whereArtisan = {};
    if (recherche) {
      whereArtisan.nom = { [Op.like]: `%${recherche}%` };
    }
    if (top) {
      whereArtisan.top = true;
    }

    const whereCategorie = {};
    if (categorie) {
      whereCategorie.id = categorie;
    }

    const artisans = await Artisan.findAll({
      where: whereArtisan,
      include: [
        {
          model: Specialite,
          required: true,
          include: [
            {
              model: Categorie,
              required: true,
              where: whereCategorie,
            },
          ],
        },
      ],
    });

    res.json(artisans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des artisans.' });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        {
          model: Specialite,
          include: [{ model: Categorie }],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé.' });
    }

    res.json(artisan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
};