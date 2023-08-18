import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, id }) => (
  <Link to={`/details/${id}`} className="card">
      <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="overlay"></div>
      <h3 className="title">{title}</h3>
  </Link>
);

export default Card;