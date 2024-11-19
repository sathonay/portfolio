import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './header-min.css';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleHeaderVisibility = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <button className="toggle-button" onClick={toggleHeaderVisibility}>
          <FontAwesomeIcon icon={isHeaderVisible ? faTimes : faBars} />
        </button>
        {isHeaderVisible ? (
          <>
            <ul className="navbar-links">
              <li><a href="#projects">Projets</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="contrast-button" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </>
        ) : (
          <div className="header-closed-text">Théo Duprez | Portfolio</div>
        )}
      </nav>
    </header>
  );
};

export default Header;