import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-menu .li a');

      let currentSectionId = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        if (link.getAttribute('href').includes(currentSectionId)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src='Sarah Iftissene.png' alt="Logo" />
        </div>

        {/* Button for mobile menu toggle */}
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <span className="hamburger"></span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
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
              <img src='linkedin.png' alt="LinkedIn" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
