// src/Components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', { // Remplacez par l'URL de votre API
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                alert('Votre message a été envoyé avec succès!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contactez-moi</h2>
            <div className="form-group">
                <label htmlFor="name">Nom <span className="required">*</span></label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;
