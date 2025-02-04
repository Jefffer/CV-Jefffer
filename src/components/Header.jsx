import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaHome
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Nombre, cargo y tagline */}
        <h1 className="text-5xl font-extrabold text-center tracking-tight drop-shadow-md">
          Jefferson Rodríguez
        </h1>
        <h2 className="text-xl font-medium text-center mt-2 opacity-90">
          Senior .NET Developer
        </h2>
        <p className="text-md font-light text-center mt-2 opacity-80 italic">
          Building Scalable Solutions with .NET and Modern Technologies
        </p>

        {/* Menú hamburguesa para dispositivos móviles */}
        <div className="flex justify-center md:hidden mt-4">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none hover:text-gray-200 transition duration-300"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navegación */}
        {/* <nav className="mt-6 flex justify-center space-x-6 text-lg"> */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row items-center justify-center mt-6 md:mt-6 space-y-4 md:space-y-0 md:space-x-6 text-lg`}
        >
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaTools /> Profile
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaUserAlt /> About me
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaProjectDiagram /> Projects
          </Link>
          <Link
            to="/experience"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaBriefcase /> Experience
          </Link>
          <Link
            to="/education"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaGraduationCap /> Education
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 hover:text-gray-200 transition duration-300"
          >
            <FaEnvelope /> Get In Touch
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
