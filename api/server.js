const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const categorieRoutes = require('./routes/categorieRoutes'); 
const artisanRoutes = require('./routes/artisanRoutes'); 
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use('/api/artisans', artisanRoutes);    
app.use('/api/contact', contactRoutes);


// Route de test simple
app.get('/', (req, res) => {
  res.send('API Trouve ton artisan – ça fonctionne !');
});

// Routes de l'API
app.use('/api/categories', categorieRoutes); // ← nouvelle ligne

const PORT = process.env.PORT || 3001;

sequelize.authenticate()
  .then(() => {
    console.log('✅ Connexion à la base de données réussie.');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Impossible de se connecter à la base de données :', err);
  });