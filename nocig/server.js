require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
