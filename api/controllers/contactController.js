const { Artisan } = require('../models');
const transporter = require('../config/mailer');

exports.sendContactMessage = async (req, res) => {
  try {
    const { nom, email, objet, message } = req.body;

    if (!nom || !email || !objet || !message) {
      return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
    }

    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) {
      return res.status(404).json({ message: 'Artisan non trouvé.' });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: artisan.email,
      replyTo: email,
      subject: `[Trouve ton artisan] ${objet}`,
      text: `Message de : ${nom} (${email})\n\n${message}`,
    });

    res.json({ message: 'Message envoyé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'envoi du message." });
  }
};