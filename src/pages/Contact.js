// Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    label {
      font-size: 1.4rem;
      margin-bottom: 8px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      font-size: 1.2rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <p>Have questions or want to discuss a project? Reach out to us!</p>
      <form netlify>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="4" required />

        <button type="submit">Send Message</button>
      </form>
    </ContactSection>
  );
};

export default Contact;