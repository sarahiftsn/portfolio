import React, { useState } from 'react';
import './Competences.css';

const Comp = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (definition) => {
        setSelectedImage(selectedImage === definition ? null : definition);
    };

    return (
        <>
            <h1 className="title">Compétences</h1>
            <div id="Comp">
                <div className="imageContainer">
                    <img src='react.png' alt="react" className="imageSmall" onClick={() => handleClick('react')} />
                    {selectedImage === 'react' && <div className="dropdown">React est une bibliothèque JavaScript pour construire des interfaces utilisateur.</div>}
                </div>
                <div className="imageContainer">
                    <img src='html.png' alt="html" className="imageSmall" onClick={() => handleClick('html')} />
                    {selectedImage === 'html' && <div className="dropdown">HTML est le langage de balisage standard pour les documents conçus pour être affichés dans un navigateur web.</div>}
                </div>
                <div className="imageContainer">
                    <img src='figma.png' alt="figma" className="imageSmall" onClick={() => handleClick('figma')} />
                    {selectedImage === 'figma' && <div className="dropdown">Figma est un éditeur de graphiques vectoriels et un outil de prototypage.</div>}
                </div>
                <div className="imageContainer">
                    <img src='github.png' alt="github" className="imageSmall" onClick={() => handleClick('github')} />
                    {selectedImage === 'github' && <div className="dropdown">GitHub est une plateforme de développement collaboratif pour héberger et réviser du code.</div>}
                </div>
                <div className="imageContainer">
                    <img src='Js.png' alt="javascript" className="imageSmall" onClick={() => handleClick('javascript')} />
                    {selectedImage === 'javascript' && <div className="dropdown">JavaScript est un langage de programmation qui permet de créer du contenu web interactif.</div>}
                </div>
            </div>
        </>
    );
};

export default Comp;
