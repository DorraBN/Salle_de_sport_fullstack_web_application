const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

// Configuration de la connexion à la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sport'
});

// Middleware de validation côté serveur
const validateUser = [
  check('nom').notEmpty().withMessage('Le nom est requis'),
  check('prenom').notEmpty().withMessage('Le prénom est requis'),
  check('email').isEmail().withMessage('Format d\'email invalide'),
  check('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
  check('tel').isMobilePhone().withMessage('Format de numéro de téléphone invalide'),
];

// Route pour servir le formulaire HTML
app.get('/signup', (req, res) => {
  const filePath = path.join(__dirname, '../signup', 'signup.html');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  res.send(fileContent);
});

// Route pour traiter la soumission du formulaire
app.post('/enregistrer', validateUser, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 10); // Hachage du mot de passe
  const tel = req.body.tel;

  // Requête SQL pour insérer l'utilisateur dans la base de données
  const sql = `INSERT INTO SPORT(email, nom, prenom, tel, password) 
               VALUES (?, ?, ?, ?, ?)`;
  const values = [email, nom, prenom, tel, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Une erreur s\'est produite lors de l\'enregistrement.');
      return;
    }

    // Envoyer une réponse à l'utilisateur
    res.send(`Utilisateur ${prenom} ${nom} ajouté avec succès !`);
  });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
