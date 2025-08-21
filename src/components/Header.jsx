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
  FaGithub,
  FaLinkedin,
  FaFolderOpen,
  FaPaperPlane 
} from "react-icons/fa";
import { PiHouseDuotone,
  PiHouseFill,
  PiBriefcaseDuotone,
  PiBriefcaseFill,
  PiGitBranch,
  PiGitBranchDuotone,
  PiGitBranchFill,
  PiGraduationCapDuotone,
  PiGraduationCapFill,
  PiUserDuotone,
  PiUserFill,
  PiInfoDuotone,
  PiInfoFill,
  PiPaperPlaneTiltDuotone,
  PiPaperPlaneTiltFill
 } from "react-icons/pi";

import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";

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
    { to: "/", icon: <PiHouseDuotone />, label: "Home" },
    { to: "/experience", icon: <PiBriefcaseDuotone />, label: "Experience" },
    { to: "/projects", icon: <PiGitBranchDuotone />, label: "Projects" },
    { to: "/education", icon: <PiGraduationCapDuotone />, label: "Education" },
    { to: "/profile", icon: <PiUserDuotone />, label: "Profile" },
    { to: "/about", icon: <PiInfoDuotone />, label: "About me" },
    { to: "/contact", icon: <PiPaperPlaneTiltDuotone  />, label: "Get In Touch" },
  ];

  const socialLinks = [
    { 
      href: "https://github.com/Jefffer", 
      icon: <FaGithub />, 
      label: "GitHub",
      hoverColors: "hover:bg-gray-800 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-200 dark:hover:text-gray-900 light:hover:bg-gray-900 light:hover:border-gray-800 light:hover:text-white"
    },
    { 
      href: "https://www.linkedin.com/in/jefffer/", 
      icon: <FaLinkedin />, 
      label: "LinkedIn",
      hoverColors: "hover:bg-blue-600 hover:border-blue-500 hover:text-white dark:hover:bg-blue-600 dark:hover:border-blue-500 dark:hover:text-white light:hover:bg-blue-600 light:hover:border-blue-500 light:hover:text-white"
    },
    { 
      to: "/projects", 
      icon: <FaFolderOpen />, 
      label: "Portfolio",
      hoverColors: "hover:bg-emerald-600 hover:border-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:border-emerald-500 dark:hover:text-white light:hover:bg-emerald-600 light:hover:border-emerald-500 light:hover:text-white"
    },
  ];

  // Componente para partículas de fondo
  const BackgroundParticles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-white/20 dark:bg-white/20 light:bg-gray-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Header principal */}
      <header
        id="main-header"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950 light:from-indigo-50 light:via-blue-50 light:to-purple-50 text-white dark:text-white light:text-gray-900 py-10 md:pb-5 border-b border-gray-700 dark:border-gray-700 light:border-gray-200"
      >
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-indigo-600/20 to-fuchsia-600/20 dark:from-cyan-600/20 dark:via-indigo-600/20 dark:to-fuchsia-600/20 light:from-indigo-200/30 light:via-purple-200/30 light:to-pink-200/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.15),transparent_50%)] light:bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(196,181,253,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(196,181,253,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />
        
        {/* Partículas de fondo */}
        <BackgroundParticles />

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
          {/* Información personal principal */}
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-white via-indigo-200 to-purple-200 dark:from-white dark:via-indigo-200 dark:to-purple-200 light:from-gray-900 light:via-indigo-700 light:to-purple-700 bg-clip-text text-transparent"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              JEFFERSON RODRIGUEZ
            </motion.h1>
            
            <motion.div
              className="relative bg-white/5 dark:bg-white/5 light:bg-white/80 backdrop-blur-lg border border-white/10 dark:border-white/10 light:border-gray-200 rounded-2xl p-5 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 light:from-indigo-100/50 light:via-purple-100/50 light:to-pink-100/50 rounded-2xl" />
              <h2 className="relative text-lg md:text-xl font-semibold text-indigo-300 dark:text-indigo-300 light:text-indigo-700 mb-1">
                Senior .NET Developer | React | Azure DevOps | AI Enthusiast 
              </h2>
              <p className="relative text-base text-white/80 dark:text-white/80 light:text-gray-600 tracking-wider">
                Building Scalable Solutions with .NET and Modern Technologies
              </p>
            </motion.div>

            {/* Enlaces sociales */}
            <motion.div
              className="flex justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map(({ href, to, icon, label, hoverColors }, index) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-center w-11 h-11 bg-white/10 dark:bg-white/10 light:bg-white/90 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-300 rounded-full transition-all duration-150 ${hoverColors} hover:shadow-lg hover:shadow-current/20`}
                      title={label}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-150 text-white dark:text-white light:text-gray-700 group-hover:text-current">
                        {icon}
                      </span>
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className={`group flex items-center justify-center w-11 h-11 bg-white/10 dark:bg-white/10 light:bg-white/90 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-300 rounded-full transition-all duration-150 ${hoverColors} hover:shadow-lg hover:shadow-current/20`}
                      title={label}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-150 text-white dark:text-white light:text-gray-700 group-hover:text-current">
                        {icon}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Botón de modo oscuro */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-4 right-4 group flex items-center justify-center w-11 h-11 bg-white/10 dark:bg-white/10 light:bg-white/90 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-300 rounded-full transition-all duration-150 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-white hover:border-white/40 dark:hover:border-white/40 light:hover:border-gray-400 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <span className="text-lg group-hover:scale-110 transition-transform duration-150 text-white dark:text-white light:text-gray-700">
              {darkMode ? <BsSun /> : <BsMoon />}
            </span>
          </motion.button>

          {/* Menú hamburguesa para dispositivos móviles */}
          <motion.div
            className="mb-4 flex justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              onClick={toggleMenu}
              className="group flex items-center justify-center w-11 h-11 bg-white/10 dark:bg-white/10 light:bg-white/90 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-300 rounded-full transition-all duration-150 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle Menu"
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-150 text-white dark:text-white light:text-gray-700">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </span>
            </motion.button>
          </motion.div>

          {/* Menú en pantalla completa para móviles */}
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                className="flex flex-col items-center space-y-8 text-xl text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {navLinks.map(({ to, icon, label }, index) => (
                  <motion.div
                    key={to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      to={to}
                      onClick={closeMenu}
                      className="group flex items-center gap-4 hover:text-indigo-300 transition-all duration-150 px-4 py-2 rounded-lg hover:bg-white/10"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-150">
                        {icon}
                      </span>
                      <span className="font-medium">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              
              <motion.button
                onClick={closeMenu}
                className="absolute top-6 right-6 group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-150 hover:bg-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-150">
                  <FaTimes />
                </span>
              </motion.button>
            </motion.div>
          )}

          {/* Navegación principal para pantallas grandes */}
          <motion.div
            className="hidden md:flex justify-center space-x-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {navLinks.map(({ to, icon, label }, index) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={to}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-150 border-2 ${
                    location.pathname === to
                      ? "bg-white/20 dark:bg-white/20 light:bg-white/90 border-white/40 dark:border-white/40 light:border-gray-300 text-white dark:text-white light:text-gray-800 shadow-lg backdrop-blur-sm"
                      : "border-transparent text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-800 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white/50 hover:border-white/20 dark:hover:border-white/20 light:hover:border-gray-300 backdrop-blur-sm"
                  }`}
                >
                  <span className="group-hover:scale-110 transition-transform duration-150">
                    {icon}
                  </span>
                  <span className="font-medium">{label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Mini Header fijo cuando se hace scroll */}
      {isMiniHeaderVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/95 backdrop-blur-md z-50 border-b border-white/10 dark:border-white/10 light:border-gray-200"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-6 py-3 flex justify-center space-x-3">
            {navLinks.map(({ to, icon, label }) => (
              <motion.div
                key={to}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={to}
                  className={`group flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-150 ${
                    location.pathname === to
                      ? "bg-white/20 dark:bg-white/20 light:bg-indigo-100 text-white dark:text-white light:text-indigo-700 border border-white/30 dark:border-white/30 light:border-indigo-200"
                      : "text-white/60 dark:text-white/60 light:text-gray-500 hover:text-white dark:hover:text-white light:hover:text-indigo-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-100 border border-transparent hover:border-white/20 dark:hover:border-white/20 light:hover:border-gray-300"
                  }`}
                  title={label}
                >
                  <span className="group-hover:scale-110 transition-transform duration-150 text-sm">
                    {icon}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Botón modo oscuro en el miniheader */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-2 right-4 group flex items-center justify-center w-9 h-9 bg-white/10 dark:bg-white/10 light:bg-gray-100 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-300 rounded-lg transition-all duration-150 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:scale-110 transition-transform duration-150 text-white dark:text-white light:text-gray-600">
              {darkMode ? <BsSun size={16} /> : <BsMoon size={16} />}
            </span>
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default Header;
