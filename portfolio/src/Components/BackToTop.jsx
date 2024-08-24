import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll up by a certain amount (e.g., 100 pixels) each time the button is clicked
  const scrollUp = () => {
    window.scrollBy({
      top: -300, // Adjust this value to control the scroll distance
      behavior: 'smooth' // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'show' : ''}`}
      onClick={scrollUp} // Updated function name to scrollUp
    >
      &#8679;
    </button>
  );
};

export default BackToTop;
