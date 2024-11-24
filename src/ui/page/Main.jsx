import React, { useState } from "react";
import "./main-min.css";
import { Header, Footer, Project, TechnologyCarousel, ContactForm } from "../components/index.js";
import data from "../../data/data.json";
import profileImage from "../../assets/moi.webp";

function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <section className="intro-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="intro-text">
          <h2>Je me présente</h2>
          <p>Théo Duprez, j'ai 21 ans.
            <br/>Je suis actuellement en Auvergne-Rhône-Alpes.
            <br/>Très grand passionné d'informatique.</p>
        </div>
      </section>

      <h2 className="projects-title" id='projects'>Projets:</h2>
      <section className={`projects-section ${isDarkMode ? 'dark-mode' : ''}`}>
          {data && data.projects && data.projects.length > 0 ? (
            data.projects.map((project, index) => (
              <Project key={index} project={project} />
            ))
          ) : (
            <p>Aucun projet disponible.</p>
          )}
      </section>

      <section className="intro-section left-align">
        <h2>Mon histoire</h2>
        <p>Depuis tout jeune, je suis un passionné d'informatique.
        <br/>Ayant commencé à monter puis démonter des ordinateurs dès l'âge de 13 ans.
        <br/>Je me suis très rapidement spécialisé dans l'hardware en résolvant les problèmes matériels de mes proches ou bien en leur donnant des conseils.
        <br/>J'ai ensuite continué à écrire mes premières lignes de code en auto-didacte en faisant des plugins Minecraft sur la technologie Java en 2018.
        <br/>J'ai très rapidement pris goût à cela puis j'ai continué sans cesse jusqu'en 2024 où j'ai décidé de reprendre mes études via OpenClassroom pour enfin posséder un diplôme et découvrir de nouvelles technologies et frameworks.</p>
      </section>

      <section className={`technologies-section ${isDarkMode ? 'dark-mode' : ''}`} id="technologies">
        <h2>Technologies maîtrisées:</h2>
        <TechnologyCarousel />
      </section>

      <section className="intro-section right-align">
        <h2>Formations:</h2>
        <p>
              Actuellement en train de passer un diplôme d'intégrateur web.
          <br/>Début d'étude dans un Bac Professionnelle Système Numérique,
          <br/>J'ai arrêter car cela ne correspondait pas à mes attentes.
          <br/>
          <br/>Je possède de nombreuses Certifications Open Classrooms dans:
          <br/>Java, React, JavaScript, SASS...
        </p>
      </section>

      <ContactForm/>
      <Footer />
    </div>
  );
}

export default Main;