import React from "react";
import './About.css';

const About = () => {
  return (
    <div id="about">
      <div className="apropos">
        <img src='moi.jpg' alt="Sarah Iftissene" className="profile-pic" />
        <div className="me">
          <p>
            "Tout comme les langues ouvrent des portes vers de nouvelles cultures, le code offre des possibilités infinies dans le monde numérique. C'est pour cela que j'aime tant coder."
          </p>
          <p>
            Je m'appelle Sarah Iftissene, et j'ai commencé ma carrière en tant que traductrice et interprète. Pendant mon master en traduction et interprétation, avec une spécialisation en systèmes d'information multilingues et ingénierie linguistique, j'ai développé un fort intérêt pour le cours d'informatique où j'ai appris les bases du développement web. Cette découverte a été une véritable révélation pour moi, car elle m'a montré que la programmation, tout comme la traduction, est un langage universel permettant de relier différentes cultures et technologies.
          </p>
          <p>
            Guidée par cette nouvelle passion, j'ai décidé de suivre une formation de développeuse web chez OpenClassrooms. Grâce à cette formation, j'ai acquis des compétences solides en développement web et j'ai affiné ma capacité à résoudre des problèmes complexes à travers la programmation. Aujourd'hui, je combine mes compétences linguistiques et informatiques pour créer des expériences numériques riches et accessibles à tous.
          </p>
          <div className="button-container">
          <button> Mon CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;