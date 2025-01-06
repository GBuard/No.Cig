/*
EXPRESS SERVER


Objectif : Créer un serveur HTTP avec Express
Pourquoi ? : Le but principal de ce code est de mettre en place un serveur local avec Express, qui sera capable de répondre à des requêtes HTTP (comme GET, POST, etc.).
Qu'est-ce qu'il fait ?
Il initialise un serveur Express (ligne const app = express()).
Il configure des middlewares comme :
cors() : Pour permettre à des applications frontend (comme ton React) de communiquer avec ton backend.
bodyParser.json() : Pour lire les données envoyées dans le corps des requêtes HTTP (par exemple, JSON envoyé par un formulaire).
Il définit une route basique (GET /) qui répond avec un simple message : "Backend is running!".
Il démarre le serveur sur le port 5000.
En résumé, ce premier code est le squelette de base pour un serveur backend fonctionnel, même sans base de données.


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


*/

/*
Connexion à MongoDB


Objectif : Se connecter à MongoDB
Pourquoi ? : Le but ici est de connecter ton backend (Express) à une base de données MongoDB, où tu vas stocker et manipuler tes données.
Qu'est-ce qu'il fait ?
Il utilise le client officiel de MongoDB (MongoClient) pour se connecter à ton serveur de base de données.
Il établit une connexion à MongoDB via localhost:27017 (ton serveur MongoDB local).
Il accède à une base de données (NoCigDB) et une collection (stats) pour interagir avec tes données.
Il prépare l'environnement pour que ton backend puisse lire, écrire et manipuler les données dans la base.
En résumé, ce deuxième code ajoute la connexion à une base de données MongoDB à ton backend.

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // URL de connexion locale
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB!');
        const db = client.db('NoCigDB'); // Nom de la base
        const statsCollection = db.collection('stats'); // Collection "stats"
        // Tu pourras utiliser "statsCollection" pour interagir avec les données
        return statsCollection;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

connectDB(); // Appeler la fonction pour tester la connexion

*/


require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;
const uri = 'mongodb://localhost:27017'; // URL de connexion locale
const client = new MongoClient(uri);

// Middleware
app.use(cors());
app.use(bodyParser.json());

//Connexion à MONGODB
async function connectDB() {
  try {
    await client.connect();
        console.log('Connected to MongoDB!');
        const db = client.db('NoCigDB'); // Nom de la base
        const statsCollection = db.collection('Statistiques'); // Collection "Statistiques"
        return statsCollection;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
  }

// Routes de Test
app.get('/', (req, res) => {
  res.send('Backend is running!');
});


// Démarrage du serveur
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectDB(); // Connexion à MongoDB lors du démarrage du serveur
});