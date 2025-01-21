import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Tu Nombre</h1>
      <h2>Desarrollador .NET | React Developer</h2>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#282c34',
  color: '#ffffff',
};

export default Header;
