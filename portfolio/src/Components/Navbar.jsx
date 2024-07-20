import React from 'react';
import './Navbar.scss'; // Importer le fichier SCSS
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        
            <header>
            <nav className="nav">
          
              <div className="logo">
                <img src='Sarah Iftissene.png'  alt="Logo" />
                
              </div>
            
              <ul className="nav-menu">
                <li className="li">
               
                  Accueil
                  
                  </li>
                <li className="li">
                
                    À propos
                    
                  </li>
                  <li className="li">
                
                    Compétences
                    
                  </li>
                  <li className="li">
                
                    Portfolio
                    
                  </li>
                  <li className="li">
                
                    Contact
                    
                  </li>
            <div className='linked'>
              <img src='linkedin.png'  alt="Logo" />
              </div>
                </ul>
              
            </nav>
            </header>
    );
  };
  
  export default Navbar;