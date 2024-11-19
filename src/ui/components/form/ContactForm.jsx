import React from "react";
import "./contactForm-min.css";

function ContactForm() {
  return (
    <section className="contact-form-section" id="contact">
        <h2>Contactez-moi:</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
    </section>
  );
}

export default ContactForm;