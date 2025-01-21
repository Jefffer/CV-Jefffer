import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <h2>Contacto</h2>
      <p>Puedes contactarme a través de los siguientes medios:</p>
      <ul style={listStyle}>
        <li>Email: <a href="mailto:tucorreo@ejemplo.com">tucorreo@ejemplo.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tuusuario</a></li>
        <li>GitHub: <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">github.com/tuusuario</a></li>
      </ul>
    </section>
  );
};

const sectionStyle = {
  padding: '20px',
  margin: '20px auto',
  maxWidth: '800px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

export default Contact;
