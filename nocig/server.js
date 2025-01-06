require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const statsRoutes = require('./backend/routes/stats');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Utilisation des routes
app.use('/api/stats', statsRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
