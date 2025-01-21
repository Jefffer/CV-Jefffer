import React from 'react';

const Header = () => {
    return (
      <header className="bg-gray-800 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Tu Nombre</h1>
        <h2 className="text-xl mt-2">Desarrollador .NET | React Developer</h2>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 text-lg">
            <a href="#about" className="hover:underline">Sobre mí</a>
            <a href="#skills" className="hover:underline">Habilidades</a>
            <a href="#projects" className="hover:underline">Proyectos</a>
            <a href="#contact" className="hover:underline">Contacto</a>
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
