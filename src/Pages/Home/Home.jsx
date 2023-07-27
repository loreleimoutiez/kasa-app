import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import housingData from '../../Data/logements.json';  

export function Home() {
    return (
      <div>
        <Banner bannerImage="home-banner" />
        <div className="card-container"> 
          <div className="card-grid">
            {housingData.map((house) => (
              <Card
                key={house.id}
                image={house.cover}
                title={house.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
}