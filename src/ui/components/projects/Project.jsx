import React from 'react';
import "./project-min.css";
import PropTypes from 'prop-types';

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} loading='lazy' alt={project.title} className="project-image" />
      <div className="project-details">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          Voir le projet
        </a>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
