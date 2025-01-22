import React from 'react';

const Header = () => {
    return (
      <header className="bg-gray-800 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Jefferson Rodríguez</h1>
        <h2 className="text-xl mt-2">Senior .NET Developer</h2>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 text-lg">
            <a href="#about" className="hover:underline">About me</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    );
  };

export default Header;
