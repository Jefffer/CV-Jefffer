import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { PiBriefcase, PiCalendarFill, PiMapPinLineFill , PiClock, PiClockAfternoonFill , PiBuildingsFill , PiCode, PiRocket } from "react-icons/pi";

const experiences = [  
  {
    consultant: "Ditech Group",
    consultantLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJWQ9jFRpq96bx2aVkT7rirbNJ9Uc-C6vXQ&s",
    period: "January 2022 - Present",
    location: "Bilbao, Spain",
    backgroundImage: "./backend1.webp",
    gradient: "from-blue-600/20 via-indigo-600/20 to-purple-600/20",
    clients: [
      {
        name: "Laboral Kutxa Bank",
        logo: "https://market.apis-i.redsys.es/psd2/xs2a/sites/psd2.xs2a.market.apis-i.redsys.es/files/u1/laboralkutxa.png",
        role: "Senior .Net Developer",
        period: "May 2023 - Present",
        activities:
          "Custom development, evolutionary support, and migrations for LABORAL KUTXA'S Online Banking platform, working with .Net Framework 4.5 and .NET 6. Implemented and managed CI and CD pipelines with Azure DevOps to automate software delivery cycles. Development of other internal applications, such as the document management system.",
      },
      {
        name: "TISUR",
        logo: "https://media.licdn.com/dms/image/v2/C560BAQFcZfBIhMLkwA/company-logo_200_200/company-logo_200_200/0/1630655511131/tisur_logo?e=2147483647&v=beta&t=CMr1NwTk9VQ3oi8zSoCyPjxxvp0HvhHod-kI1PpMXlc",
        role: "Software Architect",
        period: "May 2025 - June 2025",
        activities:
          "Designed and implemented a hybrid Cloud architecture for TISUR's “Balanza ANTP” web application, using .Net 8.0, Angular 18, SQL Server, and Azure App Services deployments. Led key technical decision-making and defined the project's modular structure.",
      },
      {
        name: "Versia",
        logo: "https://www.versia.com/contenido/uploads/2017/11/logo.png",
        role: "Senior .Net Developer",
        period: "April 2023 - June 2023",
        activities:
          "Support in analysis and custom development of the AcceXible application using .NET 5 for Backend (Entity Framework) and Angular 12 for Frontend.",
      },
      {
        name: "Sisteplant",
        logo: "https://sisteplant.com/wp-content/uploads/2022/02/Sisteplant-Logo.png",
        role: "Senior .Net Developer",
        period: "January 2022 - April 2023",
        activities:
          "Custom developments (DPM) and version migrations of the CAPTOR system from .NET Framework 3.5 to 4.5 for client GESTAMP, using .NET for Backend, custom views (xui, xml) for Frontend, and SQL Server for relational database management.",
      },
    ],
  },
  {
    consultant: "Tata Consultancy Services",
    period: "April 2021 - January 2022",
    consultantLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdN5uaq0RMWIAydcXeyqdkm4dtErZs3sw0w&s",
    location: "Bogotá D.C",
    backgroundImage: "./software1.webp",
    gradient: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
    clients: [
      {
        name: "AON",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Aon_Corporation_logo.svg/2560px-Aon_Corporation_logo.svg.png",
        role: ".Net Developer and DBA",
        period: "April 2021 - January 2022",
        activities:
          "Provided bilingual (Spanish and English) support for ticket resolution within the EMMA applications, managing .NET developments and SQL Server databases.",
      },
    ],
  },
  {
    consultant: "Exsis Digital Angels",
    period: "June 2017 - April 2021",
    consultantLogo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/et5zwmwaqsmtyao23keh",
    location: "Bogotá D.C",
    backgroundImage: "./frontend1.webp",
    gradient: "from-purple-600/20 via-pink-600/20 to-rose-600/20",
    clients: [
      {
        name: "Exsis Software Fabric",
        logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/et5zwmwaqsmtyao23keh",
        role: "FullStack Developer",
        period: "June 2019 - July 2020",
        activities:
          "Gathered requirements and developed various projects, including an internal onboarding project (OutSystems), the 'TeamTimes' application for employee hour reporting (MVC, Python), the 'IDDEA' web app (SOAP services in .NET), a mobile Android app (Java, Kotlin), and architectural design and development of systems like 'Debt Portfolio' for 'Seguros del Estado ICSG' (Angular 7, RESTful, Clean Architecture in .NET Core) as well as the 'Exsis Recruitment Platform' (NET Core 3.1 with AWS integrations).",
      },
      {
        name: "CHUBB",
        logo: "https://1000marcas.net/wp-content/uploads/2021/10/Chubb-logo-tm-1280x720.png",
        role: ".Net Developer",
        period: "June 2019 - July 2020",
        activities:
          "Developed and supported functionalities in the Annualization module for Banco de Chile's insurance area using Clean Architecture in .NET Framework 4.5 and SQL Server (Entity Framework).",
      },
      {
        period: "January 2018 - June 2019",
        logo: "seguros.png",
        name: "State Insurance (Seguros del Estado ICSG)",
        role: ".Net Developer and DBA",
        activities:
          "Administered SQL Server databases, managed Windows Server and IIS, and supported/developed new modules for internal applications (Financing, Counter-guarantees, SARLAFT, etc.) using .NET Framework 3.5.",
      },
      {
        period: "June 2017 - December 2017",
        logo: "https://entelgy.com/wp-content/uploads/2015/07/ASA_COLPATRIA_Entelgy.png",
        name: "AXA Colpatria Bank",
        role: "Junior .Net Developer",
        activities:
          "Performed functional tests for the Gemela system, and handled requirements analysis, design, and development of a complementary module for the SOAT insurance area using .NET Framework, SOAP services, and external APIs.",
      },
    ],
  },
  {
    consultant: "Freelance",
    period: "Indefinite",
    consultantLogo: "dev.svg",
    location: "Remote",
    backgroundImage: "database.webp",
    gradient: "from-orange-600/20 via-amber-600/20 to-yellow-600/20",
    clients: [
      {
        name: "Viata Real State",
        logo: "viata1.jpg",
        role: "Web Designer & Developer",
        period: "May 2018 - September 2019",
        activities:
          "Designed, developed, implemented, and supported their website using PHP for backend, HTML & CSS for frontend, and phpMyAdmin on Linux hosting managed by cPanel.",
      },
    ],
  },
];

// Función para calcular la duración del trabajo
const calculateWorkDuration = (period) => {
  try {
    // Limpiar el período y manejar casos especiales
    const cleanPeriod = period.trim();
    
    // Casos especiales
    if (cleanPeriod.toLowerCase().includes('indefinite') || 
        cleanPeriod.toLowerCase().includes('indefinido') ||
        cleanPeriod === '') {
      return null;
    }
    
    // Mapeo de meses
    const monthMap = {
      'january': 0, 'jan': 0, 'enero': 0,
      'february': 1, 'feb': 1, 'febrero': 1,
      'march': 2, 'mar': 2, 'marzo': 2,
      'april': 3, 'apr': 3, 'abril': 3,
      'may': 4, 'mayo': 4,
      'june': 5, 'jun': 5, 'junio': 5,
      'july': 6, 'jul': 6, 'julio': 6,
      'august': 7, 'aug': 7, 'agosto': 7,
      'september': 8, 'sep': 8, 'septiembre': 8,
      'october': 9, 'oct': 9, 'octubre': 9,
      'november': 10, 'nov': 10, 'noviembre': 10,
      'december': 11, 'dec': 11, 'diciembre': 11
    };

    // Verificar si contiene "Present" o "Presente"
    const isPresent = cleanPeriod.toLowerCase().includes('present') || 
                     cleanPeriod.toLowerCase().includes('presente');
    
    // Extraer fechas del período
    const datePattern = /(\w+)\s+(\d{4})/g;
    const matches = [...cleanPeriod.matchAll(datePattern)];
    
    if (matches.length < 1) {
      return null;
    }
    
    // Obtener fecha de inicio
    const startMatch = matches[0];
    const startMonth = monthMap[startMatch[1].toLowerCase()];
    const startYear = parseInt(startMatch[2]);
    
    if (startMonth === undefined || isNaN(startYear)) {
      return null;
    }
    
    // Crear fecha de inicio
    const startDate = new Date(startYear, startMonth, 1);
    let endDate;
    
    if (isPresent) {
      // Si contiene "Present" o "Presente", usar fecha actual
      endDate = new Date();
    } else if (matches.length >= 2) {
      // Si hay fecha de fin específica
      const endMatch = matches[matches.length - 1];
      const endMonth = monthMap[endMatch[1].toLowerCase()];
      const endYear = parseInt(endMatch[2]);
      
      if (endMonth === undefined || isNaN(endYear)) {
        return null;
      }
      
      endDate = new Date(endYear, endMonth, 1);
    } else {
      // No hay suficiente información
      return null;
    }
    
    // Calcular diferencia en meses
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months += endDate.getMonth() - startDate.getMonth();
    
    // Si la fecha de fin es anterior a la de inicio
    if (months < 0) {
      return null;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    return { years, months: remainingMonths, totalMonths: months };
  } catch (error) {
    return null;
  }
};

// Función para formatear la duración
const formatDuration = (duration) => {
  if (!duration) return null;
  
  const { years, months } = duration;
  
  if (years === 0 && months === 0) {
    return "Less than 1 month";
  }
  
  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }
  
  return parts.join(', ');
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Componente para cada tarjeta de experiencia con scroll dinámico
  const ExperienceCard = React.memo(({ exp, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, margin: "-200px" });
    
    const { scrollYProgress: cardProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    });

    // Transformaciones basadas en scroll
    const y = useTransform(cardProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
    const opacity = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(cardProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
    const rotateX = useTransform(cardProgress, [0, 0.5, 1], [15, 0, -15]);
    const backgroundY = useTransform(cardProgress, [0, 1], [-100, 100]);
    
    const toggleExpand = useCallback(() => {
      setIsExpanded(prev => !prev);
    }, []);

    // Calcular duración del trabajo
    const workDuration = calculateWorkDuration(exp.period);
    const formattedDuration = formatDuration(workDuration);
    
    return (
      <motion.div
        ref={cardRef}
        style={{ 
          y,
          opacity,
          scale,
          rotateX,
          transformPerspective: 1000
        }}
        className="relative w-full min-h-screen flex items-center justify-center mb-32"
      >
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${exp.backgroundImage})`,
              filter: 'blur(2px) brightness(0.3)'
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient}`} />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Left Column - Company Info */}
            <motion.div
              className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-8`}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Company Header */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-block relative group mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-xl" />
                  <img
                    src={exp.consultantLogo}
                    alt={exp.consultant}
                    className="relative w-24 h-24 object-contain rounded-full border-2 border-white/20 bg-white p-1 shadow-2xl"
                  />
                </motion.div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                  {exp.consultant}
                </h2>
                
                <div className="space-y-3 text-white/80">
                  {formattedDuration && (
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <PiClockAfternoonFill className="text-emerald-400 text-xl" />
                      <span className="text-emerald-300 font-medium">{formattedDuration}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <PiCalendarFill className="text-indigo-400 text-xl" />
                    <span className="text-lg font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <PiMapPinLineFill  className="text-purple-400 text-xl" />
                    <span className="text-lg">{exp.location}</span>
                  </div>
                </div>

                {/* Stats */}
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mt-6"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <PiBuildingsFill className="text-white text-xl" />
                  <span className="text-white font-semibold">
                    {exp.clients.length} {exp.clients.length === 1 ? 'Client' : 'Clients'}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Clients Card */}
            <motion.div
              className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Projects & Clients</h3>
                    <motion.button
                      onClick={toggleExpand}
                      className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaCaretDown className="text-lg" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>

                {/* Clients Preview */}
                <div className="p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                    {exp.clients.slice(0, 6).map((client, idx) => (
                      <motion.div
                        key={idx}
                        onClick={toggleExpand}
                        className="relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        // whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="bg-white rounded-lg p-2 mb-2">
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="w-full h-12 object-contain"
                            />
                          </div>
                          <p className="text-xs text-white/80 font-medium text-center truncate">
                            {client.name}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Expanded Content - Modern Design */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="border-t border-white/20"
                  >
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-h-96 overflow-y-auto custom-scrollbar">
                      {exp.clients.map((client, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            delay: idx * 0.15, 
                            duration: 0.6,
                            ease: "easeOut"
                          }}
                          className="group relative"
                        >
                          {/* Modern Card Container */}
                          <div className="relative rounded-2xl bg-gray-800/20 border border-white/15 overflow-hidden transition-all duration-500">
                            {/* Subtle pattern background */}
                            <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 opacity-[0.02] overflow-hidden">
                              <img 
                                src={client.logo}
                                alt=""
                                className="w-full h-full object-contain grayscale brightness-200"
                              />
                            </div>
                            
                            {/* Main Content */}
                            <div className="relative p-4 sm:p-6">
                              {/* Header Section - Mobile First */}
                              <div className="flex flex-col space-y-4 mb-6">
                                {/* Company Identity Row */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                  {/* Logo */}
                                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-2 flex-shrink-0 shadow-lg ring-1 ring-black/5">
                                    <img
                                      src={client.logo}
                                      alt={client.name}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  
                                  {/* Company Info */}
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">
                                      {client.name}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-1">
                                      <motion.div
                                        animate={{ 
                                          opacity: [0.4, 1, 0.4],
                                          scale: [0.8, 1, 0.8]
                                        }}
                                        transition={{ 
                                          duration: 2,
                                          repeat: Infinity,
                                          repeatType: "reverse"
                                        }}
                                      >
                                        <PiCode className="text-indigo-300 text-base sm:text-lg" />
                                      </motion.div>
                                      <span className="text-sm sm:text-base text-white/80 font-medium">
                                        {client.role}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Period Badge - Full Width on Mobile */}
                                <motion.div
                                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 backdrop-blur-sm rounded-xl border border-emerald-400/25"
                                  initial={{ scale: 0.9, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <PiClock className="text-emerald-400 text-sm sm:text-base" />
                                  <span className="text-sm sm:text-base text-emerald-300 tracking-wide">
                                    {client.period}
                                  </span>
                                </motion.div>
                              </div>
                              
                              {/* Activities Section */}
                              <div className="relative">
                                {/* Decorative line */}
                                <div className="absolute -left-2 sm:-left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400/60 via-purple-400/60 to-pink-400/60 rounded-full" />
                                
                                {/* Content */}
                                <div className="pl-4 sm:pl-6">
                                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light tracking-wide">
                                    {client.activities}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Dot */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
          style={{ y: useTransform(cardProgress, [0.3, 0.7], [50, -50]) }}
        >
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-2xl"
            animate={isInView ? {
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(99, 102, 241, 0.7)",
                "0 0 0 20px rgba(99, 102, 241, 0)",
              ]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.div>
      </motion.div>
    );
  });

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black -z-10" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 -z-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-20"
      >
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4 md:mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <PiBriefcase className="text-indigo-400 text-xl" />
          <span className="text-xs md:text-sm font-medium text-indigo-700 dark:text-indigo-300">
            Professional Journey
          </span>
        </motion.div>
        
        {/* <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
          Experience{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Timeline
          </span>
        </h1> */}

        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
              Experience{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
          Discover my professional evolution through immersive experiences and transformative projects
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="fixed left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent -z-0">
          <motion.div
            className="w-full bg-gradient-to-b from-indigo-400 via-purple-500 to-pink-500 rounded-full"
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />
        </div>

        {/* Experience cards */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={`experience-${exp.consultant}-${index}`}
              exp={exp} 
              index={index}
            />
          ))}
        </div>

        {/* Final element */}
        <motion.div
          className="relative z-10 flex justify-center py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 4px 20px rgba(99, 102, 241, 0.3)",
                "0 8px 30px rgba(99, 102, 241, 0.5)",
                "0 4px 20px rgba(99, 102, 241, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            <PiRocket className="text-2xl" />
            <span className="font-bold text-xl">Ready for the next adventure!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;