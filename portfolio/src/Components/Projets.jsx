import React from 'react';
import './Projets.css';  // Assurez-vous que le fichier CSS a le bon nom

const projects = [
    {
        title: 'Booki',
        description: 'En tant que développeur web chez Booki, j\'ai intégré l\'interface du site à l\'aide de HTML et CSS, en collaboration avec Sarah, la CTO, et Loïc, l\'UI designer. J\'ai travaillé sur des maquettes complètes pour les versions desktop, tablette et mobile, en respectant les spécifications et contraintes techniques. J\'ai reçu une structure de fichiers préparée pour démarrer',
        image: 'booki.jfif',
        codeLink: 'https://github.com/sarahiftsn/bookiproject',
        siteLink: 'https://projet1.com'
    },
    {
        title: 'Sophie Bluel',
        description: 'Description du projet 2',
        image: 'sophie.webp',
        codeLink: 'https://github.com/sarahiftsn/Portfolio-architecte-sophie-bluel',
        siteLink: 'https://projet2.com'
    },
    {
        title: 'Nina Carducci',
        description: 'Description du projet 3',
        image: 'nina-carducci.jpg',
        codeLink: 'https://github.com/sarahiftsn/ninacarducciproject',
        siteLink: 'https://sarahiftsn.github.io/ninacarducciproject/'
    },
    {
        title: 'Kasa',
        description: 'Description du projet 4',
        image: 'kasa.jfif',
        codeLink: 'https://github.com/sarahiftissene/projet4',
        siteLink: 'https://projet4.com'
    },
    {
        title: 'Mon vieux grimoire',
        description: 'Description du projet 5',
        image: 'vieux.jfif',
        codeLink: 'https://github.com/sarahiftissene/projet5',
        siteLink: 'https://projet5.com'
    },
    {
        title: 'Projet 6',
        description: 'Description du projet 6',
        image: 'projet6.png',
        codeLink: 'https://github.com/sarahiftissene/projet6',
        siteLink: 'https://projet6.com'
    }
];

const Projects = () => {
    return (
        <>
        <h1 className="title">Portfolio</h1>
        <div className="projects">
            {projects.map((project, index) => (
                <div className="card" key={index}>
                    <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
                        <div className="overlay">
                            <div className="text">{project.description}</div>
                            <div className="links">
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Voir le code</a>
                                <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Voir le site</a>
                            </div>
                        </div>
                    </div>
                    <h3>{project.title}</h3>
                </div>
            ))}
        </div>
        </>
    );
};

export default Projects;
