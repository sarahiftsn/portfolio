import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Comp from "./Components/Competences";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Projets from "./Components/Projets";
import './App.css';
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
    </div>
  );
};

export default App;
