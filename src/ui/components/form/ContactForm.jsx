import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./contactForm-min.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_s249f5d';
    const templateID = 'template_33je97f';
    const userID = 'HhzEibKSm7DCstmfQ';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Merci de votre contact, je vous répondrez dans les meilleurs délais.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (err) => {
        console.log('FAILED...', err);
        alert('Erreur lors de l\'envoi de l\'email.');
      });
  };

  return (
    <section className="contact-form-section" id="contact">
      <h2>Contactez-moi:</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>
    </section>
  );
}

export default ContactForm;