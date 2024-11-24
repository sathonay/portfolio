import React from 'react';
import Technology from '../technology/Technology.jsx';
import data from '../../../data/data.json';
import './technologyCarousel.css';

const TechnologyCarousel = () => {
  return (
    <div className="technology-carousel">
      {data.technologies.map((technology, index) => (
        <Technology key={index} technology={technology} />
      ))}
    </div>
  );
};

export default TechnologyCarousel;