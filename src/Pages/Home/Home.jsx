import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import housingData from '../../Data/logements.json';  

export function Home() { // composant fonctionnel != composant de classe, donc pas de "this.props.data", seulement "props.data" 
  return (
    <main>
      <Banner bannerImage="home-banner" />
      <div className="card-container"> 
        <div className="card-grid">
          {housingData.map((house) => ( // les props sont utilisées pour personnaliser chaque instance du composant <Card>
            <Card
              key={house.id} // clé unique pour "aider" React à gérer efficacement la liste d'éléments
              image={house.cover}
              title={house.title}
              id={house.id} // pour passer l'identifiant au composant <Card>
            />
          ))}
        </div>
      </div>
    </main>
  );
}