import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaHome,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMiniHeaderVisible, setIsMiniHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      if (window.scrollY > header.clientHeight) {
        setIsMiniHeaderVisible(true);
      } else {
        setIsMiniHeaderVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header principal */}
      <header
        id="main-header"
        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8"
      >
        <div className="container mx-auto px-6">
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

          {/* Menú en pantalla completa para móviles */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-50 flex items-center justify-center">
              <nav className="flex flex-col items-center space-y-6 text-xl text-white">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaHome /> Home
                </Link>
                <Link to="/profile" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaTools /> Profile
                </Link>
                <Link to="/about" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaUserAlt /> About me
                </Link>
                <Link to="/projects" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaProjectDiagram /> Projects
                </Link>
                <Link to="/experience" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaBriefcase /> Experience
                </Link>
                <Link to="/education" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaGraduationCap /> Education
                </Link>
                <Link to="/contact" onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                  <FaEnvelope /> Get In Touch
                </Link>
              </nav>
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition duration-300"
              >
                <FaTimes />
              </button>
            </div>
          )}

          {/* Navegación principal para pantallas grandes */}
          <nav className="hidden md:flex justify-center mt-6 space-x-6 text-lg">
            <Link to="/" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaHome /> Home
            </Link>
            <Link to="/profile" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaTools /> Profile
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaUserAlt /> About me
            </Link>
            <Link to="/projects" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaProjectDiagram /> Projects
            </Link>
            <Link to="/experience" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaBriefcase /> Experience
            </Link>
            <Link to="/education" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaGraduationCap /> Education
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaEnvelope /> Get In Touch
            </Link>
          </nav>
        </div>
      </header>

      {/* Mini Header fijo cuando se hace scroll */}
      {isMiniHeaderVisible && (
        // <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-opacity-80 z-50 backdrop-blur-md shadow-lg transition-all duration-300">
        <div className="fixed top-0 left-0 w-full bg-indigo-500 bg-opacity-20 z-50 backdrop-blur-md shadow-lg transition-all duration-300">
          <nav className="container mx-auto px-6 py-3 flex justify-center space-x-6 text-lg text-black-500">
            <Link to="/" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaHome />
            </Link>
            <Link to="/profile" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaTools />
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaUserAlt />
            </Link>
            <Link to="/projects" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaProjectDiagram />
            </Link>
            <Link to="/experience" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaBriefcase />
            </Link>
            <Link to="/education" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaGraduationCap />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-gray-200 transition duration-300">
              <FaEnvelope />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
