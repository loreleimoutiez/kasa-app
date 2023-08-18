import React, { useState } from 'react';
import upArrow from '../../Assets/up.png';
import downArrow from '../../Assets/down.png';

function CollapseItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
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

export function Collapse({ items }) {
    return (
        <div className='collapse_container'>
            {items.map((item, index) => (
                <CollapseItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
}