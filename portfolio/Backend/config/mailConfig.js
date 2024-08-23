// backend/config/mailConfig.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Charger les variables d'environnement depuis le fichier .env

// Créer un transporteur Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Utiliser un service de messagerie, ici Gmail
    auth: {
        user: process.env.EMAIL_USER, // Utiliser la variable d'environnement pour l'email
        pass: process.env.EMAIL_PASS  // Utiliser la variable d'environnement pour le mot de passe
    }
});

module.exports = transporter;
