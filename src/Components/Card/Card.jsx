import React from 'react';

const Card = ({ image, title }) => (
  <div className="card">
    <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="overlay"></div>
    <h3 className="title">{title}</h3>
  </div>
);

export default Card;