const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // URL locale de MongoDB
const client = new MongoClient(uri);

let statsCollection;

// Connexion à la base de données
(async () => {
  try {
    await client.connect();
    const db = client.db('NoCigDB');
    statsCollection = db.collection('Statistiques');
    console.log('Connected to MongoDB for routes!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

// Route pour récupérer les statistiques d'un utilisateur
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id; // Récupère l'ID depuis l'URL
    const userStats = await statsCollection.findOne({ _id: userId });
    if (!userStats) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(userStats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats', error });
  }
});

module.exports = router;
