import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h2>Sarah Iftissene</h2>
                    <p>Développeuse Web</p>
                </div>
                <div className="footer-links">
                    <a href="mailto:iftissenesarah4@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/sarah-i-33b3a216b/"target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/sarahiftsn" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sarah Iftissene. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
