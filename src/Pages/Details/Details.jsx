import React from 'react';
import { useParams } from 'react-router-dom';
import { Slideshow } from '../../Components/Slideshow/Slideshow';
import { Collapse } from '../../Components/Collapse/Collapse';
import data from '../../Data/logements.json';
import { Navigate } from 'react-router-dom';
import starActive from '../../Assets/star-active.png';
import starInactive from '../../Assets/star-inactive.png';

// Système de notation des logements 
const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
        stars.push(<img key={i} src={starActive} alt="Filled star" className="rating-star" />);
    }

    for (let i = filledStars; i < 5; i++) {
        stars.push(<img key={i} src={starInactive} alt="Empty star" className="rating-star" />);
    }

    return stars;
};

export const Details = () => {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);

    // Si l'id du logement est incorrecte 
    if (!logement) {
        return <Navigate to="/not-found" />;
    }

    const collapseSections = [
        {
            title: 'Description',
            content: logement.description
        },
        {
            title: 'Équipements',
            content: (
                <ul>
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )
        }
    ];

    return (
        <div className='App'>
            <Slideshow logement={logement} />

                <div className="logement-details">
                    <div className="heading-host-container">
                        <div className="heading">
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>

                            <div className='tag-container'>
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                            </div>
                        </div>
                        
                        <div className='host-rating'>
                            <div className="host-info">
                                <div className="host-name">
                                    <h3>{logement.host.name.split(' ')[0]}</h3>
                                    <h3>{logement.host.name.split(' ')[1]}</h3>
                                </div>
                                <img src={logement.host.picture} alt={logement.host.name} />
                            </div>
                            <div className="rating">
                                {renderRatingStars(parseInt(logement.rating))}
                            </div>
                        </div>
                    </div>
                
                    <Collapse items={collapseSections} className="custom-collapse" />
                </div>
        </div>
    );
};