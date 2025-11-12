import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFolderOpen,
} from "react-icons/fa";
import {
  PiHouseDuotone,
  PiHouseFill,
  PiBriefcaseDuotone,
  PiBriefcaseFill,
  PiGitBranchDuotone,
  PiGitBranchFill,
  PiGraduationCapDuotone,
  PiGraduationCapFill,
  PiUserDuotone,
  PiUserFill,
  PiInfoDuotone,
  PiInfoFill,
  PiPaperPlaneTiltDuotone,
  PiPaperPlaneTiltFill,
} from "react-icons/pi";
import { HiMinus, HiSquare2Stack } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

import { useTheme } from "../context/ThemeContext";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import skillsData from "../data/skillsData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMiniHeaderVisible, setIsMiniHeaderVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedConstPrefix, setDisplayedConstPrefix] = useState("");
  const [displayedSkill, setDisplayedSkill] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorPosition, setCursorPosition] = useState("title"); // "title", "const", "skill"
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

  const titleText = "Senior .NET Developer · React · Cloud";
  const constPrefixText = "const extraSkills = ";
  const extraSkills = skillsData;

  // Efecto de parallax basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("main-header");
      if (!header) return;
      
      const headerHeight = header.clientHeight;
      const scrollY = window.scrollY;
      
      // Calcular progreso del scroll (0 = arriba, 1 = header completamente fuera de vista)
      const progress = Math.min(scrollY / headerHeight, 1);
      setScrollProgress(progress);
      
      // Mostrar mini header cuando se pasa el header principal
      if (scrollY > headerHeight) {
        setIsMiniHeaderVisible(true);
      } else {
        setIsMiniHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto de parpadeo del cursor (más rápido y realista)
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Efecto de escritura inicial completa
  useEffect(() => {
    if (!isInitialLoad) return;

    let timeout;
    let phase = 1;
    let charIndex = 0;

    const typeWriter = () => {
      // FASE 1: Escribir título con cursor
      if (phase === 1) {
        setCursorPosition("title");
        if (charIndex <= titleText.length) {
          setDisplayedTitle(titleText.slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(typeWriter, 80);
        } else {
          // Título completo, pasar a fase 2
          phase = 2;
          charIndex = 0;
          timeout = setTimeout(typeWriter, 200);
        }
      }
      // FASE 2: Escribir "const extraSkills = " con cursor
      else if (phase === 2) {
        setCursorPosition("const");
        if (charIndex <= constPrefixText.length) {
          setDisplayedConstPrefix(constPrefixText.slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(typeWriter, 60);
        } else {
          // Prefijo completo, pasar a fase 3
          phase = 3;
          charIndex = 0;
          timeout = setTimeout(typeWriter, 100);
        }
      }
      // FASE 3: Escribir primera habilidad con comillas y punto y coma
      else if (phase === 3) {
        setCursorPosition("skill");
        const fullSkillText = `"${extraSkills[currentSkillIndex]}";`;
        if (charIndex <= fullSkillText.length) {
          setDisplayedSkill(fullSkillText.slice(0, charIndex));
          charIndex++;
          timeout = setTimeout(typeWriter, 60);
        } else {
          // Escritura completa, el cursor permanece en "skill"
          setIsInitialLoad(false);
        }
      }
    };

    typeWriter();

    return () => clearTimeout(timeout);
  }, []);

  // Efecto para rotar habilidades después de la carga inicial
  useEffect(() => {
    if (isInitialLoad) return;

    let timeout;
    const currentFullSkillText = `"${extraSkills[currentSkillIndex]}";`;
    
    // Paso 1: Esperar 5 segundos mostrando la habilidad completa
    timeout = setTimeout(() => {
      deleteSkill();
    }, 5000);

    const deleteSkill = () => {
      let charIndex = currentFullSkillText.length;
      
      const deleteChar = () => {
        if (charIndex > 0) {
          charIndex--;
          setDisplayedSkill(currentFullSkillText.slice(0, charIndex));
          timeout = setTimeout(deleteChar, 30);
        } else {
          // Borrado completo, cambiar a la siguiente habilidad
          setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % extraSkills.length);
        }
      };
      
      deleteChar();
    };

    return () => clearTimeout(timeout);
  }, [currentSkillIndex, isInitialLoad]);

  // Efecto para escribir la nueva habilidad cuando cambia el índice
  useEffect(() => {
    if (isInitialLoad) return;
    if (displayedSkill !== "") return; // Solo escribir cuando esté vacío

    let timeout;
    let charIndex = 0;
    const fullSkillText = `"${extraSkills[currentSkillIndex]}";`;
    
    const writeChar = () => {
      if (charIndex <= fullSkillText.length) {
        setDisplayedSkill(fullSkillText.slice(0, charIndex));
        charIndex++;
        timeout = setTimeout(writeChar, 60);
      }
    };

    writeChar();

    return () => clearTimeout(timeout);
  }, [currentSkillIndex, isInitialLoad]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: "/", iconDuotone: <PiHouseDuotone />, iconFill: <PiHouseFill />, label: "Home" },
    { to: "/experience", iconDuotone: <PiBriefcaseDuotone />, iconFill: <PiBriefcaseFill />, label: "Experience" },
    { to: "/projects", iconDuotone: <PiGitBranchDuotone />, iconFill: <PiGitBranchFill />, label: "Projects" },
    { to: "/education", iconDuotone: <PiGraduationCapDuotone />, iconFill: <PiGraduationCapFill />, label: "Education" },
    { to: "/profile", iconDuotone: <PiUserDuotone />, iconFill: <PiUserFill />, label: "Profile" },
    { to: "/about", iconDuotone: <PiInfoDuotone />, iconFill: <PiInfoFill />, label: "About me" },
    { to: "/contact", iconDuotone: <PiPaperPlaneTiltDuotone />, iconFill: <PiPaperPlaneTiltFill />, label: "Get In Touch" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Jefffer",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/jefffer/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      to: "/projects",
      icon: <FaFolderOpen />,
      label: "Portfolio",
    },
  ];

  return (
    <>
      {/* Header principal con foto de fondo integrada */}
      <header
        id="main-header"
        className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 light:from-slate-50 light:via-indigo-50 light:to-purple-50 text-white dark:text-white light:text-gray-900 pt-16 md:pt-20 pb-8 md:pb-10 border-b-2 border-indigo-500/20 dark:border-indigo-500/20 light:border-indigo-200"
      >
        {/* Foto de fondo con desvanecido - Desktop (derecha con fade a izquierda) */}
        <motion.div 
          className="hidden md:block absolute inset-y-0 right-0 w-1/3 pointer-events-none"
          style={{
            x: scrollProgress * 150, // Se mueve hacia la derecha
            opacity: 1 - scrollProgress * 0.8, // Se desvanece gradualmente
            scale: 1 + scrollProgress * 0.1, // Ligero zoom out
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/foto1.jpg')",
              backgroundPosition: "center right",
              backgroundSize: "cover",
              maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            }}
          />
        </motion.div>

        {/* Foto de fondo con desvanecido - Mobile (arriba hacia abajo) */}
        <div className="md:hidden absolute inset-x-0 top-0 h-1/2 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 dark:opacity-50 light:opacity-25"
            style={{
              backgroundImage: "url('/foto1.jpg')",
              backgroundPosition: "center top",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-slate-900/40 via-65% to-slate-900/90 to-95% dark:from-transparent dark:via-slate-950/40 dark:to-slate-950/90 light:from-transparent light:via-slate-50/40 light:to-slate-50/90" />
        </div>

        {/* Fondos decorativos elegantes - ajustados para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/10 to-transparent dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-transparent light:from-indigo-100/20 light:via-purple-100/30 light:to-pink-100/20" />

        {/* Contenido principal alineado a la izquierda - Ancho completo */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <motion.div
              className="mb-6 w-full"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                y: scrollProgress * -30, // Se mueve ligeramente hacia arriba
                opacity: 1 - scrollProgress * 0.7, // Se desvanece
              }}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black  pb-2 tracking-wider leading-relaxed drop-shadow-[0_0_30px_rgba(99,102,241,0.3)] dark:drop-shadow-[0_0_30px_rgba(99,102,241,0.5)] light:drop-shadow-none "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(199,210,254,1) 50%, rgba(165,180,252,0.9) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.05em",
                }}
              >
                jefferson rodríguez
              </motion.h1>
            </motion.div>

            {/* Ventana tipo Browser/Terminal - Diseño moderno y atrevido */}
            <motion.div
              className="relative w-full md:max-w-3xl backdrop-blur-2xl bg-gradient-to-br from-slate-800/40 via-slate-900/50 to-indigo-950/60 dark:from-slate-900/40 dark:via-slate-950/50 dark:to-indigo-950/60 light:bg-[#fafafa] border border-white/20 dark:border-white/20 light:border-slate-200 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] light:shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden mb-8 text-left"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                x: scrollProgress * -120, // Se mueve hacia la izquierda
                opacity: 1 - scrollProgress * 0.9, // Se desvanece más que la foto
                rotateY: scrollProgress * -8, // Rotación 3D sutil
                scale: 1 - scrollProgress * 0.15, // Se hace más pequeño
              }}
            >
              {/* Barra superior tipo Mac con botones de control */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-700/80 via-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:via-slate-900/80 dark:to-slate-950/80 light:from-gradient-to-r light:from-slate-100/95 light:via-slate-50/95 light:to-indigo-100/90 border-b border-white/10 dark:border-white/10 light:border-indigo-200/40">
                {/* Botones estilo Mac */}
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-3 h-3 rounded-full bg-red-500 light:bg-red-400 shadow-lg cursor-pointer hover:bg-red-400 light:hover:bg-red-500 transition-colors"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-3 h-3 rounded-full bg-yellow-500 light:bg-yellow-400 shadow-lg cursor-pointer hover:bg-yellow-400 light:hover:bg-yellow-500 transition-colors"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-3 h-3 rounded-full bg-green-500 light:bg-green-400 shadow-lg cursor-pointer hover:bg-green-400 light:hover:bg-green-500 transition-colors"
                  />
                </div>

                {/* Título de la ventana - más minimalista - Oculto en mobile */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-2">
                  <span className="text-xs font-mono text-white/60 dark:text-white/60 light:text-slate-500 light:font-semibold">
                    ~/professional-profile
                  </span>
                </div>

                {/* Enlaces sociales integrados en la barra */}
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ href, to, icon, label }) => (
                    <div key={label}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative p-2 bg-white/10 dark:bg-white/10 light:bg-indigo-100/60 rounded-lg backdrop-blur-sm overflow-hidden block"
                          title={label}
                        >
                          {/* Efecto de relleno de izquierda a derecha */}
                          <div className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 light:from-indigo-400 light:to-purple-400 group-hover:w-full transition-all duration-300 ease-out"></div>
                          <span className="relative z-10 text-indigo-200 dark:text-indigo-200 light:text-indigo-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-white text-base transition-colors duration-200 block">
                            {icon}
                          </span>
                        </a>
                      ) : (
                        <Link
                          to={to}
                          className="group relative p-2 bg-white/10 dark:bg-white/10 light:bg-indigo-100/60 rounded-lg backdrop-blur-sm overflow-hidden block"
                          title={label}
                        >
                          {/* Efecto de relleno de izquierda a derecha */}
                          <div className="absolute inset-0 w-0 bg-gradient-to-r from-indigo-500 to-purple-500 light:from-indigo-400 light:to-purple-400 group-hover:w-full transition-all duration-300 ease-out"></div>
                          <span className="relative z-10 text-indigo-200 dark:text-indigo-200 light:text-indigo-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-white text-base transition-colors duration-200 block">
                            {icon}
                          </span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenido de la ventana - Altura fija - Efecto editor de texto */}
              <div className="p-6 md:p-7 min-h-[160px] md:min-h-[140px] bg-transparent dark:bg-transparent light:bg-gradient-to-br light:from-white/50 light:to-slate-50/50">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-3 font-mono"
                >
                  {/* Línea 1: Título con cursor */}
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 dark:text-green-400 light:text-emerald-600 text-sm mt-1 font-bold">❯</span>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-200 dark:via-purple-200 dark:to-pink-200 light:from-indigo-600 light:via-purple-600 light:to-pink-600 bg-clip-text text-transparent leading-tight">
                        {displayedTitle}
                        {cursorPosition === "title" && (
                          <span className={`inline-block w-0.5 h-5 md:h-6 ml-0.5 bg-white dark:bg-white light:bg-indigo-600 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                        )}
                      </h2>
                    </div>
                  </div>

                  {/* Línea 2: const extraSkills = "habilidad"; - Todo escrito carácter por carácter */}
                  {displayedConstPrefix && (
                    <div className="ml-4 text-sm md:text-base leading-relaxed">
                      {/* const */}
                      {displayedConstPrefix.length > 0 && (
                        <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-semibold">
                          {displayedConstPrefix.slice(0, Math.min(5, displayedConstPrefix.length))}
                        </span>
                      )}
                      {/* espacio */}
                      {displayedConstPrefix.length > 5 && <span> </span>}
                      {/* extraSkills */}
                      {displayedConstPrefix.length > 6 && (
                        <span className="text-purple-300 dark:text-purple-300 light:text-indigo-700 font-semibold">
                          {displayedConstPrefix.slice(6, Math.min(17, displayedConstPrefix.length))}
                        </span>
                      )}
                      {/* espacio */}
                      {displayedConstPrefix.length > 17 && <span> </span>}
                      {/* = */}
                      {displayedConstPrefix.length > 18 && (
                        <span className="text-white/40 dark:text-white/40 light:text-slate-500">
                          {displayedConstPrefix.slice(18, Math.min(19, displayedConstPrefix.length))}
                        </span>
                      )}
                      {/* espacio */}
                      {displayedConstPrefix.length > 19 && <span> </span>}
                      
                      {/* Cursor al escribir "const extraSkills = " */}
                      {cursorPosition === "const" && (
                        <span className={`inline-block w-0.5 h-4 ml-0.5 bg-cyan-400 dark:bg-cyan-400 light:bg-blue-600 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                      )}
                      
                      {/* Habilidad con comillas en verde esmeralda */}
                      {displayedConstPrefix.length >= constPrefixText.length && (
                        <>
                          <span className="text-emerald-300 dark:text-emerald-300 light:text-green-700 font-medium">
                            {displayedSkill}
                          </span>
                          {/* Cursor siempre visible después de la habilidad */}
                          <span className={`inline-block w-0.5 h-4 ml-0.5 bg-emerald-400 dark:bg-emerald-400 light:bg-green-600 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
                        </>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Navegación principal para desktop - Centrada */}
            <motion.nav
              className="hidden md:flex justify-center flex-wrap gap-2 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {navLinks.map(({ to, iconDuotone, iconFill, label }) => (
                <motion.div
                  key={to}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    to={to}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-200 border ${
                      location.pathname === to
                        ? "bg-white/15 dark:bg-white/15 light:bg-white border-white/30 dark:border-white/30 light:border-indigo-300 text-white dark:text-white light:text-indigo-700 shadow-lg backdrop-blur-md"
                        : "border-transparent text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-indigo-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white/70 hover:border-white/20 dark:hover:border-white/20 light:hover:border-indigo-200 backdrop-blur-sm"
                    }`}
                    onMouseEnter={() => setHoveredItem(to)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="text-lg transition-transform duration-150 group-hover:scale-110">
                      {location.pathname === to || hoveredItem === to
                        ? iconFill
                        : iconDuotone}
                    </span>
                    <span className="font-medium text-sm">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Menú hamburguesa para móviles - centrado */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden group flex items-center gap-2 px-5 py-2.5 bg-white/5 dark:bg-white/5 light:bg-white/90 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200 rounded-lg transition-all duration-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white text-white/80 dark:text-white/80 light:text-gray-600 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              aria-label="Toggle Menu"
            >
              <span className="text-lg">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </span>
              <span className="text-sm font-medium">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Botón de modo oscuro minimalista */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-6 right-6 group flex items-center gap-2 px-4 py-2.5 bg-white/5 dark:bg-white/5 light:bg-white/90 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200 rounded-lg transition-all duration-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white hover:border-white/20 dark:hover:border-white/20 light:hover:border-gray-300 hover:shadow-lg text-white/80 dark:text-white/80 light:text-gray-600"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-lg transition-transform duration-150 group-hover:scale-110">
            {darkMode ? <BsSun /> : <BsMoon />}
          </span>
          <span className="text-sm font-medium hidden sm:inline">
            {darkMode ? "Light" : "Dark"}
          </span>
        </motion.button>
      </header>

      {/* Menú móvil en pantalla completa */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-slate-900/98 via-indigo-900/98 to-purple-900/98 dark:from-slate-950/98 dark:via-indigo-950/98 dark:to-purple-950/98 light:from-slate-50/98 light:via-indigo-50/98 light:to-purple-50/98 backdrop-blur-2xl z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Fondo decorativo del menú */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />

            <motion.nav
              className="relative flex flex-col items-center space-y-4 w-full max-w-md px-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {navLinks.map(({ to, iconDuotone, iconFill, label }, index) => (
                <motion.div
                  key={to}
                  className="w-full"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    to={to}
                    onClick={closeMenu}
                    className={`group flex items-center gap-4 w-full px-6 py-4 rounded-xl transition-all duration-200 border ${
                      location.pathname === to
                        ? "bg-white/15 dark:bg-white/15 light:bg-white border-white/30 dark:border-white/30 light:border-indigo-300 text-white dark:text-white light:text-indigo-700 shadow-xl"
                        : "border-transparent text-white/70 dark:text-white/70 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-indigo-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white/70 hover:border-white/20 dark:hover:border-white/20 light:hover:border-indigo-200"
                    }`}
                    onMouseEnter={() => setHoveredItem(to)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="text-3xl transition-transform duration-150 group-hover:scale-110">
                      {location.pathname === to || hoveredItem === to
                        ? iconFill
                        : iconDuotone}
                    </span>
                    <span className="font-semibold text-lg">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Botón de cierre */}
            <motion.button
              onClick={closeMenu}
              className="absolute top-6 right-6 group flex items-center gap-2 px-4 py-2.5 bg-white/5 dark:bg-white/5 light:bg-white/90 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-gray-200 rounded-lg transition-all duration-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-white text-white dark:text-white light:text-gray-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span className="text-xl">
                <FaTimes />
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini Header fijo cuando se hace scroll - Solo iconos en móvil */}
      <AnimatePresence>
        {isMiniHeaderVisible && (
          <motion.div
            className="fixed top-0 left-0 w-full bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-xl z-50 border-b border-indigo-500/20 dark:border-indigo-500/20 light:border-indigo-200 shadow-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 md:px-6 py-3">
              <nav className="flex justify-center items-center gap-2">
                {navLinks.map(({ to, iconDuotone, iconFill, label }) => (
                  <motion.div
                    key={to}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Link
                      to={to}
                      className={`group flex items-center justify-center md:gap-2 md:px-3 w-10 h-10 md:w-auto md:h-auto md:py-2.5 rounded-lg transition-all duration-200 ${
                        location.pathname === to
                          ? "bg-indigo-500/20 dark:bg-indigo-500/20 light:bg-indigo-100 text-white dark:text-white light:text-indigo-700 border border-indigo-400/30 dark:border-indigo-400/30 light:border-indigo-300 shadow-lg"
                          : "text-white/60 dark:text-white/60 light:text-gray-500 hover:text-white dark:hover:text-white light:hover:text-indigo-700 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-indigo-50 border border-transparent hover:border-white/20 dark:hover:border-white/20 light:hover:border-indigo-200"
                      }`}
                      title={label}
                      onMouseEnter={() => setHoveredItem(to)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="text-base transition-transform duration-150 group-hover:scale-110">
                        {location.pathname === to || hoveredItem === to
                          ? iconFill
                          : iconDuotone}
                      </span>
                      <span className="hidden md:inline font-medium text-sm">
                        {label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Botón modo oscuro en miniheader - Solo desktop */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:flex absolute top-3 right-6 group items-center gap-2 px-3 py-2 bg-white/5 dark:bg-white/5 light:bg-indigo-100 backdrop-blur-sm border border-white/10 dark:border-white/10 light:border-indigo-300 rounded-lg transition-all duration-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-indigo-200 text-white/80 dark:text-white/80 light:text-indigo-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-base transition-transform duration-150 group-hover:scale-110">
                  {darkMode ? <BsSun /> : <BsMoon />}
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
