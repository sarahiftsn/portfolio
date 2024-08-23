// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transporter = require('./config/mailConfig'); // Assurez-vous que ce chemin est correct
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour recevoir les données du formulaire
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Créer le contenu de l'email
    const mailOptions = {
        from: process.env.EMAIL_USER, // Adresse email de l'expéditeur
        to: 'recipient-email@example.com', // Adresse email du destinataire
        subject: `Nouveau message de ${name}: ${subject}`,
        text: `
            Nom: ${name}
            Email: ${email}
            Téléphone: ${phone}
            Sujet: ${subject}
            Message: ${message}
        `
    };

    // Envoyer l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            res.status(500).json({ success: false, message: 'Une erreur est survenue.' });
        } else {
            console.log('Email envoyé:', info.response);
            res.status(200).json({ success: true, message: 'Votre message a été envoyé avec succès!' });
        }
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
