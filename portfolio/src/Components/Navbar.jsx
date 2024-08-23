import React from 'react';
import './Navbar.scss'; // Importer le fichier SCSS
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className="nav">
                <div className="logo">
                    <img src='Sarah Iftissene.png' alt="Logo" />
                </div>
                <ul className="nav-menu">
                    <li className="li">
                        <a href="#home">Accueil</a>
                    </li>
                    <li className="li">
                        <a href="#about">À propos</a>
                    </li>
                    <li className="li">
                        <a href="#competences">Compétences</a>
                    </li>
                    <li className="li">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="li">
                        <a href="#contact">Contact</a>
                    </li>
                    <div className='linked'>
                    <a href="https://www.linkedin.com/in/sarah-i-33b3a216b/" target="_blank" rel="noopener noreferrer">
                        <img src='linkedin.png' alt="Logo" />
                        </a>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
