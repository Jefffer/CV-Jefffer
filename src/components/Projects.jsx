import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Gestor de Tareas',
      description: 'Aplicación web para la gestión de tareas diarias, desarrollada con React y .NET.',
      link: 'https://github.com/tuusuario/gestor-tareas',
    },
    {
      name: 'E-Commerce',
      description: 'Plataforma de comercio electrónico con carrito de compras, búsqueda avanzada y pagos.',
      link: 'https://github.com/tuusuario/e-commerce',
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2>Proyectos</h2>
      <ul style={listStyle}>
        {projects.map((project, index) => (
          <li key={index} style={projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </li>
        ))}
      </ul>
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

const listStyle = {
  listStyle: 'none',
  padding: '0',
};

const projectCard = {
  padding: '15px',
  margin: '10px 0',
  border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'center',
};

export default Projects;
