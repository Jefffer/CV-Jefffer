import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMiniHeaderVisible, setIsMiniHeaderVisible] = useState(false);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

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

  const navLinks = [
    { to: "/", icon: <FaHome />, label: "Home" },
    { to: "/profile", icon: <FaTools />, label: "Profile" },
    { to: "/about", icon: <FaUserAlt />, label: "About me" },
    { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "/experience", icon: <FaBriefcase />, label: "Experience" },
    { to: "/education", icon: <FaGraduationCap />, label: "Education" },
    { to: "/contact", icon: <FaEnvelope />, label: "Get In Touch" },
  ];

  return (
    <>
      {/* Header principal */}
      <header
        id="main-header"
        className="pb-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 text-gray-100 py-8 dark:from-cyan-950 dark:via-indigo-950 dark:to-fuchsia-950 dark:text-gray-200 border-b border-gray-100 dark:border-gray-700"
      >
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-center tracking-tight drop-shadow-md ">
            Jefferson Rodríguez
          </h1>
          <h2 className="text-xl font-medium text-center mt-2 opacity-90 text-gray-100">
            Senior .NET Developer
          </h2>
          <p className="text-md font-light text-center mt-2 opacity-80 italic text-gray-100 dark:text-gray-200">
            Building Scalable Solutions with .NET and Modern Technologies
          </p>

          {/* Botón de modo oscuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-6 right-6 p-2 rounded-lg transition duration-300 text-white dark:text-white hover:bg-fuchsia-700 dark:hover:bg-fuchsia-900"
          >
            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>

          {/* Menú hamburguesa para dispositivos móviles */}
          <div className="mb-4 flex justify-center md:hidden mt-4">
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
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-50 flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center space-y-6 text-xl text-white">
                {[
                  { to: "/", icon: <FaHome />, label: "Home" },
                  { to: "/profile", icon: <FaTools />, label: "Profile" },
                  { to: "/about", icon: <FaUserAlt />, label: "About me" },
                  { to: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
                  { to: "/experience", icon: <FaBriefcase />, label: "Experience" },
                  { to: "/education", icon: <FaGraduationCap />, label: "Education" },
                  { to: "/contact", icon: <FaEnvelope />, label: "Get In Touch" },
                ].map(({ to, icon, label }) => (
                  <Link key={to} to={to} onClick={closeMenu} className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
                    {icon} {label}
                  </Link>
                ))}
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
          <div className="hidden md:flex justify-center mt-6 space-x-6 text-lg">
            {navLinks.map(({ to, icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 transition duration-300 px-2 py-1 border-b-4 ${
                  location.pathname === to
                    ? "text-gray-100 border-gray-100 "
                    : "text-gray-300 border-transparent hover:text-gray-100 hover:bg-opacity-100"
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Mini Header fijo cuando se hace scroll */}
      {isMiniHeaderVisible && (
        <div className="fixed top-0 left-0 w-full bg-indigo-500 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-90 z-50 backdrop-blur-md shadow-lg transition-all duration-300">
          <nav className="container mx-auto px-6 py-3 flex justify-center space-x-6 text-lg ">
            {/* {[
              { to: "/", icon: <FaHome /> },
              { to: "/profile", icon: <FaTools /> },
              { to: "/about", icon: <FaUserAlt /> },
              { to: "/projects", icon: <FaProjectDiagram /> },
              { to: "/experience", icon: <FaBriefcase /> },
              { to: "/education", icon: <FaGraduationCap /> },
              { to: "/contact", icon: <FaEnvelope /> },
            ].map(({ to, icon }) => (
              <Link key={to} to={to} className="flex items-center gap-2 hover:text-gray-200 transition duration-100">
                {icon}
              </Link>
            ))} */}
            {navLinks.map(({ to, icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 transition duration-300 pb-1 border-b-2 transition duration-100 ${
                  location.pathname === to
                    ? "text-gray-800 border-gray-800 dark:text-gray-100 dark:border-gray-100"
                    : "text-gray-600 border-transparent hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
              >
                {icon}
              </Link>
            ))}
          </nav>
          {/* Botón modo oscuro en el miniheader */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-2 right-6 p-1 rounded-lg text-black dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
