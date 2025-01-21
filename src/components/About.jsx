import React from 'react';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <h2>Sobre mí</h2>
      <p>
        Soy un desarrollador apasionado con experiencia en .NET y React. Me gusta crear soluciones innovadoras y eficientes, y siempre estoy buscando mejorar mis habilidades.
      </p>
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

export default About;
