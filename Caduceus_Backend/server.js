/*
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3306;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'sql104.infinityfree.com',
  user: 'if0_37398291',
  password: 'iVze1nQ3B1Q',
  database: 'if0_37398291_ppe_v1',
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Route to get user first name by ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const sql = `SELECT Prenom FROM utilisateurs WHERE ID_utilisateur = ?`;

  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ error: 'Database error' });
    } else if (result.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(result[0]);
    }
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
*/
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Permet à ton application React Native d'accéder à l'API

// Configuration de la connexion MySQL avec les informations fournies
const db = mysql.createConnection({
  host: 'sql104.infinityfree.com',  // MySQL Hostname
  user: 'if0_37398291',             // MySQL Username
  password: 'iVze1nQ3B1Q',          // MySQL Password
  database: 'if0_37398291_ppe_v1',     // MySQL Database Name
  port: 3306                        // MySQL Port (3306 est par défaut)
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données.');
});

// Route pour obtenir le prénom d'un utilisateur avec un ID spécifique
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT Prenom FROM utilisateurs WHERE ID_utilisateur = ?';

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
      res.status(500).json({ error: 'Erreur interne du serveur' });
      return;
    }

    if (result.length > 0) {
      res.json({ Prenom: result[0].Prenom });
    } else {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
  });
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log('Serveur backend en cours d\'exécution sur le port 3000');
});
