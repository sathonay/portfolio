import React from 'react';
import PropTypes from 'prop-types';
import './technology-min.css';

const Technology = ({ technology }) => {
  return (
    <div className="technology-card">
      <img src={technology.image} alt={technology.name} className="technology-image" />
      <h3 className="technology-name">{technology.name}</h3>
    </div>
  );
};

Technology.propTypes = {
  technology: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Technology;