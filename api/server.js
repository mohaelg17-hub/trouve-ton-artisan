const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const { sequelize } = require('./models');
const categorieRoutes = require('./routes/categorieRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(helmet());
app.use(limiter);
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/categories', categorieRoutes);
app.use('/api/artisans', artisanRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('API Trouve ton artisan – ça fonctionne !');
});

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