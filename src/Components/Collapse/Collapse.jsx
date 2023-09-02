import React, { useState } from 'react'; // useState permet de gérer l'état local d'un composant fonctionnel
import upArrow from '../../Assets/up.png';
import downArrow from '../../Assets/down.png';

function CollapseItem({ title, content }) { // accepte 2 props: le titre de la section et son contenu 
    const [isOpen, setIsOpen] = useState(false); // utilisé pour créer une variable d'état isOpen dans un composant fonctionnel

    return ( // le bouton permet à l'utilisateur de basculer l'état isOpen au clic 
        <div className={`collapse_element ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}> 
                {title}
                <img 
                    src={isOpen ? upArrow : downArrow} 
                    alt={isOpen ? 'Réduire' : 'Étendre'} 
                    className={`chevron ${isOpen ? 'open' : ''}`}
                />
            </button>
            {isOpen && <div className='text'>{content}</div>}
        </div>
    );
}

export function Collapse({ items }) { // génère dynamiquement des composants CollapseItem en fonction des données passées dans la prop items
    return (
        <div className='collapse_container'>
            {items.map((item, index) => (
                <CollapseItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
}