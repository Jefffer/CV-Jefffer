import React, { useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaCaretDown, FaCaretUp, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaRocket, FaBuilding, FaClock } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";

const experiences = [
  
  {
    consultant: "Ditech Group",
    consultantLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJWQ9jFRpq96bx2aVkT7rirbNJ9Uc-C6vXQ&s",
    period: "January 2022 - Present",
    location: "Bilbao, Spain",
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
    clients: [
      {
        name: "AON",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5seiuluH7Tp2HPnNshe9luEaqK6b7-NHnA&s",
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
        logo: "https://seeklogo.com/images/S/Seguros_del_Estado_S_A_-logo-1C31DF4CFE-seeklogo.com.png",
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
    consultantLogo: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/300788621_490409453088863_7310934356003262293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kIEXcsm83CoQ7kNvgERtno0&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=AjpMwJh6cZmBAO2XPXu1Wwx&oh=00_AYA1RrVRlWkZXOTSMGd-C6TRDz4gxsKYEJpM_I4N8XY_-w&oe=67A528BE",
    location: "Remote",
    clients: [
      {
        name: "Viata Real State",
        logo: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/300788621_490409453088863_7310934356003262293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kIEXcsm83CoQ7kNvgERtno0&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=AjpMwJh6cZmBAO2XPXu1Wwx&oh=00_AYA1RrVRlWkZXOTSMGd-C6TRDz4gxsKYEJpM_I4N8XY_-w&oe=67A528BE",
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
    
    // Extraer fechas del período
    const datePattern = /(\w+)\s+(\d{4})/g;
    const matches = [...cleanPeriod.matchAll(datePattern)];
    
    if (matches.length < 2) {
      return null;
    }
    
    const startMatch = matches[0];
    const endMatch = matches[matches.length - 1];
    
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
    
    const startMonth = monthMap[startMatch[1].toLowerCase()];
    const startYear = parseInt(startMatch[2]);
    const endMonth = monthMap[endMatch[1].toLowerCase()];
    const endYear = parseInt(endMatch[2]);
    
    if (startMonth === undefined || endMonth === undefined || 
        isNaN(startYear) || isNaN(endYear)) {
      return null;
    }
    
    // Crear fechas
    const startDate = new Date(startYear, startMonth, 1);
    let endDate;
    
    // Si contiene "Present" o "Presente", usar fecha actual
    if (cleanPeriod.toLowerCase().includes('present') || 
        cleanPeriod.toLowerCase().includes('presente')) {
      endDate = new Date();
    } else {
      endDate = new Date(endYear, endMonth, 1);
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

  // Componente para cada tarjeta de experiencia con estado local
  const ExperienceCard = React.memo(({ exp, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    
    const toggleExpand = useCallback(() => {
      setIsExpanded(prev => !prev);
    }, []);

    // Calcular duración del trabajo
    const workDuration = calculateWorkDuration(exp.period);
    const formattedDuration = formatDuration(workDuration);
    
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`relative flex ${
          index % 2 === 0 ? 'justify-start' : 'justify-end'
        } mb-8 md:mb-16`}
      >
        {/* Timeline dot */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        >
          <motion.div
            className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-2 md:border-4 border-white dark:border-gray-900 shadow-lg"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(99, 102, 241, 0.7)",
                "0 0 0 10px rgba(99, 102, 241, 0)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          className={`w-full md:w-5/12 ${
            index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
          } px-4 md:px-0`}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden cursor-pointer"
            onClick={toggleExpand}
            whileHover={{
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
            layout
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/30 dark:from-indigo-950/20 dark:via-transparent dark:to-purple-950/20" />
            
            {/* Main content */}
            <div className="relative p-4 md:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 md:space-x-4 min-w-0 flex-1">
                  <motion.div
                    className="relative group flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
                    <img
                      src={exp.consultantLogo}
                      alt={exp.consultant}
                      className="relative w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border-2 border-white dark:border-gray-700 bg-white dark:bg-gray-100 p-1 shadow-lg"
                    />
                  </motion.div>
                  
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-1 truncate">
                      {exp.consultant}
                    </h3>
                    <div className="flex flex-col gap-1 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-indigo-500 w-3 h-3 flex-shrink-0" />
                        <span className="font-medium truncate">{exp.period}</span>
                      </div>
                      {formattedDuration && (
                        <div className="flex items-center gap-2">
                          <FaClock className="text-emerald-500 w-3 h-3 flex-shrink-0" />
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium truncate">
                            {formattedDuration}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-purple-500 w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand button */}
                <motion.div
                  className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white shadow-lg flex-shrink-0 ml-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaCaretDown className="w-3 h-3 md:w-4 md:h-4" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Clients count badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-full border border-indigo-200 dark:border-indigo-700"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <FaBuilding className="text-indigo-600 dark:text-indigo-400 w-3 h-3" />
                <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">
                  {exp.clients.length} {exp.clients.length === 1 ? 'Client' : 'Clients'}
                </span>
              </motion.div>
            </div>

            {/* Expanded content */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/80 dark:bg-gray-900/80"
              >
                <div className="p-4 md:p-6 space-y-4">
                  {exp.clients.map((client, idx) => (
                    <motion.div
                      key={`${exp.consultant}-${client.name}-${idx}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      className="group"
                    >
                      <motion.div
                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-3">
                          <motion.img
                            src={client.logo}
                            alt={client.name}
                            className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-100 p-1 shadow-sm mx-auto md:mx-0 flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          />
                          
                          <div className="flex-1 min-w-0 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                              <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-white">
                                {client.name}
                              </h4>
                              <div className="flex items-center justify-center md:justify-start gap-1 text-xs text-gray-500 dark:text-gray-400">
                                <HiOutlineClock className="w-3 h-3" />
                                <span>{client.period}</span>
                              </div>
                            </div>
                            
                            <motion.div
                              className="inline-flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-full border border-blue-200 dark:border-blue-700 mb-2"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <FaCode className="text-blue-600 dark:text-blue-400 w-3 h-3" />
                              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                                {client.role}
                              </span>
                            </motion.div>
                            
                            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {client.activities}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Connector line for alternating layout - hidden on mobile */}
        <motion.div
          className={`hidden md:block absolute top-1/2 ${
            index % 2 === 0 ? "right-1/2 mr-3" : "left-1/2 ml-3"
          } w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-30`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
        />
      </motion.div>
    );
  });

  return (
    <section ref={containerRef} className="py-12 md:py-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700 mb-4 md:mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaBriefcase className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs md:text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Career Journey
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          {/* <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Discover my professional journey through innovative projects and meaningful collaborations with industry-leading companies.
          </p> */}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line - adjusted for mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-transparent via-indigo-300 to-transparent dark:via-indigo-600 opacity-50">
            <motion.div
              className="w-full bg-gradient-to-b from-indigo-500 via-purple-600 to-blue-600 rounded-full"
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
            className="flex justify-center mt-8 md:mt-16 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg"
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
              <FaRocket className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">Ready for new challenges!</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;