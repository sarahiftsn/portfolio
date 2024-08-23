import React from 'react';
import './Projets.css';  // Assurez-vous que le fichier CSS a le bon nom

const projects = [
    {
        title: 'Booki',
        description: 'En tant que développeur web chez Booki, j\'ai intégré l\'interface du site à l\'aide de HTML et CSS, en collaboration avec Sarah, la CTO, et Loïc, l\'UI designer. J\'ai travaillé sur des maquettes complètes pour les versions desktop, tablette et mobile, en respectant les spécifications et contraintes techniques. J\'ai reçu une structure de fichiers préparée pour démarrer',
        image: 'booki.jfif',
        codeLink: 'https://github.com/sarahiftsn/bookiproject',
        siteLink: 'https://sarahiftsn.github.io/bookiproject/'
    },
    {
        title: 'Sophie Bluel',
        description: 'Après avoir terminé un projet en avance, j\'ai été intégré à l\'équipe Front-end d\’ArchWebos pour travailler sur le site portfolio d\’une architecte d\’intérieur. Lors de mon premier brief d\’équipe, j\'ai reçu un e-mail de Charlotte, la cheffe de projet, avec le design Figma, le code back-end, le code front-end statique, et le Kanban des tâches. J\'ai alors développé la page de présentation des travaux à partir du HTML fourni, créé la page de connexion pour l\'administrateur, et codé la modale permettant d\'uploader de nouveaux médias. J\'ai ainsi contribué avec succès à ce projet.',
        image: 'sophie.webp',
        codeLink: 'https://github.com/sarahiftsn/Portfolio-architecte-sophie-bluel',
        siteLink: 'https://projet2.com'
    },
    {
        title: 'Nina Carducci',
        description: 'Pour le site web de la photographe Nina Carducci, j\'ai réalisé un débogage complet et une optimisation pour améliorer la performance et le référencement. J\'ai corrigé les erreurs techniques, optimisé les éléments SEO comme les mots-clés, les balises meta et les images, et amélioré l\'expérience utilisateur en simplifiant la navigation et les appels à l\'action. Ces efforts ont réduit le temps de chargement, amélioré la visibilité sur les moteurs de recherche, et optimisé l\'expérience utilisateur.',
        image: 'nina-carducci.jpg',
        codeLink: 'https://github.com/sarahiftsn/ninacarducciproject',
        siteLink: 'https://sarahiftsn.github.io/ninacarducciproject/'
    },
    {
        title: 'Kasa',
        description: 'En tant que développeur front-end freelance pour Kasa, j\'ai participé à la refonte complète du site, qui est passé d\'ASP.NET à une stack JavaScript avec React. Après avoir reçu un e-mail de Laura, la CTO, avec les détails du projet, j\'ai développé l\'application React en suivant les maquettes Figma et les spécifications de design envoyées par Paul, le designer. J\'ai utilisé des données fictives en JSON pour construire le front-end et mis en place les composants et les routes nécessaires.',
        image: 'kasa.jfif',
        codeLink: 'https://github.com/sarahiftsn/projet5KASAA',
        siteLink: 'https://projet4.com'
    },
    {
        title: 'Mon vieux grimoire',
        description: 'J\'ai développé le back-end d\'un site de notation de livres, incluant la création d\'une API pour gérer les ajouts de livres et les évaluations des utilisateurs. J\'ai assuré l\'intégration avec le front-end, optimisé les images pour les performances, et veillé à la conformité aux bonnes pratiques écologiques.',
        image: 'vieux.jfif',
        codeLink: 'https://github.com/sarahiftissene/projet5',
        siteLink: 'https://github.com/sarahiftsn/projet6'
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
