import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div id="contact" className="contact-form">
        <h2 className="contact-title">Contact Us</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>
        <div className="message-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required className="full-width"></textarea>
        </div>
        <div className="button-group">
          <button className="contact-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
