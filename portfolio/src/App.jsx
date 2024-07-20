import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Comp from "./Components/Competences";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Projets from "./Components/Projets";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Comp/>
      <Projets/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;