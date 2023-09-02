import React, { useState } from "react";
import { SlideshowItem } from './SlideshowItem';

export const Slideshow = ({ logement }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = logement.pictures.length - 1; //  la fonction déplace l'indice actif à la dernière image du diaporama
        } else if (newIndex >= logement.pictures.length) {
            newIndex = 0; // la fonction déplace l'indice actif à la première image
        }
        setActiveIndex(newIndex);
    }    

    return (
        <div className="carousel">
            <div className="inner"
            style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {logement.pictures.map((image, index) => {
                    return <SlideshowItem key={`${logement.id}-${index}`} image={image} />
                })}
            </div>

            {logement.pictures.length > 1 && ( // vérifie si le nombre d'images dans le diaporama (logement.pictures.length) est supérieur à 1. 
                                              // Si c'est le cas, cela signifie qu'il y a plus d'une image à afficher = active la navigation 
                <>
                    <div className="carousel-buttons">
                        <button className="button-arrow" onClick={() => updateIndex(activeIndex - 1)}>
                            <span className="material-symbols-outlined">
                                arrow_back_ios_new
                            </span>
                        </button>

                        <button className="button-arrow" onClick={() => updateIndex(activeIndex + 1)}>
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </button>
                    </div>

                    <div className="image-indicator">
                        {`${activeIndex + 1}/${logement.pictures.length}`}
                    </div>
                </>
            )}
        </div>
    )
}