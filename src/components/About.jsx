import React from 'react';

const About = () => {
    return (
      <section id="about" className="max-w-4xl mx-auto p-6 text-center bg-white shadow-md rounded-md my-8">
        <h2 className="text-3xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-gray-700 leading-relaxed">
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
