import React, { useState, useRef, useEffect } from 'react';
import './Competences.css';

const Comp = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const dropdownRef = useRef(null);

    const handleClick = (definition) => {
        setSelectedImage(selectedImage === definition ? null : definition);
    };

    useEffect(() => {
        if (dropdownRef.current) {
            const dropdown = dropdownRef.current;
            const rect = dropdown.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                dropdown.style.top = 'auto';
                dropdown.style.bottom = '100%';
                dropdown.style.maxHeight = '200px'; // Limite la hauteur maximale
                dropdown.style.overflowY = 'auto'; // Ajoute une barre de défilement si nécessaire
            }
        }
    }, [selectedImage]);

    return (
        <>
            <h1 className="title">Compétences</h1>
            <div id="Comp">
                {[
                    { name: 'react', src: 'react.png', description: 'React est une bibliothèque JavaScript pour construire des interfaces utilisateur.' },
                    { name: 'html', src: 'html.png', description: 'HTML est le langage de balisage standard pour les documents conçus pour être affichés dans un navigateur web.' },
                    { name: 'figma', src: 'figma.png', description: 'Figma est un éditeur de graphiques vectoriels et un outil de prototypage.' },
                    { name: 'github', src: 'github.png', description: 'GitHub est une plateforme de développement collaboratif pour héberger et réviser du code.' },
                    { name: 'javascript', src: 'Js.png', description: 'JavaScript est un langage de programmation qui permet de créer du contenu web interactif.' }
                ].map((item) => (
                    <div className="imageContainer" key={item.name}>
                        <img src={item.src} alt={item.name} className="imageSmall" onClick={() => handleClick(item.name)} />
                        {selectedImage === item.name && (
                            <div className="dropdown" ref={dropdownRef}>
                                {item.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Comp;
