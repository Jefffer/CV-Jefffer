import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Empresa XYZ',
      role: 'Desarrollador .NET',
      duration: 'Ene 2020 - Actualidad',
      description: 'Desarrollo de aplicaciones web utilizando .NET y React. Implementación de servicios REST y mantenimiento de sistemas legados.',
    },
    {
      company: 'Empresa ABC',
      role: 'Junior Developer',
      duration: 'Mar 2018 - Dic 2019',
      description: 'Creación de aplicaciones internas con C# y SQL Server. Automatización de procesos internos.',
    },
  ];

  return (
    <section id="experience" style={sectionStyle}>
      <h2>Experiencia</h2>
      {experiences.map((exp, index) => (
        <div key={index} style={experienceCard}>
          <h3>{exp.role}</h3>
          <h4>{exp.company}</h4>
          <p><strong>{exp.duration}</strong></p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

const sectionStyle = {
  padding: '20px',
  margin: '20px auto',
  maxWidth: '800px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
};

const experienceCard = {
  padding: '15px',
  margin: '10px 0',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

export default Experience;
