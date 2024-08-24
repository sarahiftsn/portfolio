import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Comp from "./Components/Competences";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Projets from "./Components/Projets";
import BackToTop from "./Components/BackToTop"; // Import the BackToTop component
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="competences">
        <Comp />
      </section>
      <section id="portfolio">
        <Projets />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
      <BackToTop /> {/* Add the BackToTop component here */}
    </div>
  );
};

export default App;
