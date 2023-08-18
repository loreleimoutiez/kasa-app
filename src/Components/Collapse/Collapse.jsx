import React, { useState } from 'react';
import upArrow from '../../Assets/up.png';
import downArrow from '../../Assets/down.png';

function CollapseItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='collapse_element'>
            <button onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img 
                    src={isOpen ? upArrow : downArrow} 
                    alt={isOpen ? 'Réduire' : 'Étendre'} 
                    className="chevron"
                />
            </button>
            {isOpen && <div className='text'>{children}</div>}
        </div>
    );
}

export function Collapse() {
    return (
        <div className='collapse_container'>
            <CollapseItem title="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </CollapseItem>
            <CollapseItem title="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </CollapseItem>
            <CollapseItem title="Service">
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </CollapseItem>
            <CollapseItem title="Sécurité">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </CollapseItem>
        </div>
    );
}