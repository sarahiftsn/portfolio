import React, { useState } from 'react';
import './Competences.css';

const Comp = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (definition) => {
        setSelectedImage(selectedImage === definition ? null : definition);
    };

    return (
        <>
            <div className='titlecontainer'>
                <h1 className="title1">Compétences</h1>
            </div>
            <div id="Comp">
                {[
                    { name: 'react', src: 'react.png', description: 'React', progress: 90 },
                    { name: 'html', src: 'html.png', description: 'HTML ', progress: 95 },
                    { name: 'figma', src: 'figma.png', description: 'Figma ', progress: 85 },
                    { name: 'github', src: 'github.png', description: 'GitHub ', progress: 80 },
                    { name: 'javascript', src: 'Js.png', description: 'JavaScript  ', progress: 70 }
                ].map((item) => (
                    <div className="competenceContainer" key={item.name}>
                        <div className="imageContainer" onClick={() => handleClick(item.name)}>
                            <img src={item.src} alt={item.name} className={`imageSmall ${selectedImage === item.name ? 'selected' : ''}`} />
                            {selectedImage === item.name && (
                                <div className="description">
                                    {item.description}
                                </div>
                            )}
                        </div>
                        {/* Progress Bar for Each Competence */}
                        <div className="progressContainer">
                            <div className="progressBar" style={{ width: `${item.progress}%` }}>
                                <span className="progressText">{item.progress}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Comp;
