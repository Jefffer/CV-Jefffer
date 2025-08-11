import React, { useState, useRef, useCallback } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaAngular, FaJava, FaCss3Alt, FaHtml5, FaJsSquare, FaRocket, FaLaptopCode, FaEye } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiVercel, SiVite, SiBlazor, SiTypescript, SiDotnet,
  SiPhp, SiPhpmyadmin, SiCpanel, SiKotlin 
  } from 'react-icons/si';
import { DiDotnet, DiMsqlServer, DiSqllite  } from "react-icons/di";
import { TbBrandVite, TbBrandCSharp  } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';

const projects = [
  {
    name: "Laboral Kutxa Online Banking",
    description: "LK Online Banking is the website and mobile app service of Laboral Kutxa, a Basque financial institution. The service allows you to manage your accounts, cards, transfers, etc.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework 4.8" },
      { icon: <SiDotnet  className="text-purple-800 dark:text-purple-300" />, name: ".Net Core 6.0" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },   
    ],
    client: "Laboral Kutxa Bank",
    website: "https://www.laboralkutxa.com/es/",
  },
  
  {
    name: "CAPTOR Sisteplant",
    description: "Custom development and version migrations from CAPTOR 3 to CAPTOR 4 for the Gestamp client. CAPTOR is a software for the management of production processes in the industrial sector.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework 3.5 - 4.5" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },   
    ],
    client: "Sisteplant",
    website: "https://sisteplant.com/que-ofrecemos/captor/",
  },
  
  {
    name: "Library App FrontEnd",
    description: "FrontEnd of functional e-commerce web application with authentication, cart, and payment integration for a virtual library.",
    technologies: [
      { icon: <FaReact className="text-blue-500" />, name: "React" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <TbBrandVite className="text-purple-500" />, name: "Vite" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <SiVercel className="text-gray-700 dark:text-gray-300" />, name: "Vercel" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/RelatosDePapelFrontEnd",
    website: "https://relatos-de-papel-front-end.vercel.app/",
  },
  {
    name: "Library App BackEnd",
    description: "Microservices-based backend of a functional e-commerce web application with a book catalog, shopping cart and payment integration for a virtual library using Eureka and an API Gateway.",
    technologies: [
      { icon: <FaJava className="text-red-600" />, name: "Java" },
      { icon: <SiMysql className="text-teal-600 dark:text-teal-300" />, name: "MySQL" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/ms-book-catalogue",
  },
  {
    name: "Demo Api",
    description: "A little demo API to handle representative currency exchange rate.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework 4.6" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/DemoApiAuthentication",
  },
  {
    name: "Schedule Mobile App",
    description: "Mobile application for timetable management at school or university. The application allows you to manage class hours, notifications, write notes, etc.",
    technologies: [
      { icon: <SiKotlin className="text-purple-600" />, name: "Kotlin" },
      { icon: <FaJava className="text-red-600" />, name: "Java" },
      { icon: <AiFillAndroid className="text-lime-500" />, name: "Android" },
      { icon: <DiSqllite className="text-blue-900 dark:text-blue-500" />, name: "SQLite" },       
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/ScheduleTestV10",
  },
  {
    name: "Bogus Data Generator",
    description: "A simple and sane data generator for populating objects that supports different locales. A delightful port of the famed faker.js and inspired by FluentValidation. Use Bogus to create UIs with fake data or seed databases.",
    technologies: [
      { icon: <SiDotnet  className="text-purple-800 dark:text-purple-300" />, name: ".Net Core 7.0" },
      { icon: <SiBlazor className="text-violet-600" />, name: "Blazor Server" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/BogusDataApp",
  },
  {
    name: "Suggestion App",
    description: "An App to suggest new ideas within a website and save them in different categories to be taken into account later. Based on tutorial by IAmTimCorey",
    technologies: [
      { icon: <SiDotnet  className="text-purple-800 dark:text-purple-300"/>, name: ".Net Core 6.0" },
      { icon: <SiBlazor className="text-violet-600" />, name: "Blazor Server" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" }
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/SuggestionApp",
  },
  {
    name: "Blazor App with Dapper",
    description: ".Net API using Blazor server and Dapper as ORM for data connection in the persistence layer.",
    technologies: [
      { icon: <SiDotnet  className="text-purple-800 dark:text-purple-300" />, name: ".Net Core 6.0" },
      { icon: <SiBlazor className="text-violet-600" />, name: "Blazor Server" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/BlazorDemoApp",
  },
  {
    name: "Portfolio Debt Collection System",
    description: "Requirements gathering, architectural design, database design, backend development and deployment of the State Insurance Portfolio System, complying with legal collection regulations for debtors of various insurance policies acquired with the company.",
    technologies: [
      { icon: <SiDotnet  className="text-purple-800 dark:text-purple-300" />, name: ".Net Core 5.0" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaAngular className="text-red-600" />, name: "Angular" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },
    ],
    client: "State Insurance Colombia (Seguros del Estado)",    
    website: "https://crediestado.com.co/polizas/",
  },
  {
    name: "IDDEA Web App",
    description: "Backend Support for Iddea, an innovation engine with web and mobile platforms, its function is to motivate and encourage members of an organization to propose ideas for a specific challenge, obtaining incentives.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },   
    ],
    client: "Exsis Digital Angels",
    website: "https://exsis.co/services-software",
  },
  {
    name: "MoneyXchange App BackEnd",
    description: "Web Api for the MoneyXchange project that consists of performing a currency exchange, the access to the data is controlled through EntityFramework. This application is consumed by the FrontEnd part made in Angular.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework 4.6" }, 
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/WebApiMoneyXchange",
  },
  {
    name: "MoneyXchange App FrontEnd",
    description: "FrontEnd of the MoneyXchange project that consists of performing a currency exchange. This application consumes the Web Api made in .Net.",
    technologies: [
      { icon: <FaAngular className="text-red-600" />, name: "Angular" },
      { icon: <SiTypescript className="text-sky-600" />, name: "TypeScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/SuggestionApp",
  },
  {
    name: "Pyramid: Viata Real State Website",
    description: "Website for a real estate company that allows the management of properties, clients, etc. Data managed with phpMyAdmin and deployment with cPanel administration.",
    technologies: [
      { icon: <SiPhp className="text-sky-700" />, name: "PHP" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <SiPhpmyadmin className="text-gray-400" />, name: "PhpMyAdmin" },
      { icon: <SiCpanel className="text-orange-600" />, name: "cPanel" },
    ],
    client: "Pyramid: Viata Real State",
    github: "https://github.com/Jefffer/Pyramid",
  },
  {
    name: "WebClinic App BackEnd",
    description: "Web Api for the WebClinic project that allows the management of patients, doctors, appointments.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework 4.6" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/ApiClinicGAP",
  },
  {
    name: "WebClinic App FrontEnd",
    description: "Little web application for a clinic that allows the management of patients, doctors and appointments. Conected to a Web Api made in .Net.",
    technologies: [
      { icon: <FaAngular className="text-red-600" />, name: "Angular 7" },
      { icon: <SiTypescript className="text-sky-600" />, name: "TypeScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/WebClinicGAP",
  },
  {
    name: "Employee Management App BackEnd",
    description: "Web Api for the Employee Management project that allows the management of employees, salaries positions, etc.",
    technologies: [
      { icon: <DiDotnet className="text-sky-500" />, name: ".Net Framework 4.6" },
      { icon: <TbBrandCSharp className="text-fuchsia-600" />, name: "C#" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <DiMsqlServer className="text-red-700 dark:text-red-400" />, name: "SQL Server" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/WebApiOigaTech",
  },
  {
    name: "Employee Management App FrontEnd",
    description: "FrontEnd of the Employee Management project that allows the management of employees, salaries positions, etc. Conected to a Web Api made in .Net.",
    technologies: [
      { icon: <FaAngular className="text-red-600" />, name: "Angular 7" },
      { icon: <SiTypescript className="text-sky-600" />, name: "TypeScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/EmployeesViewOigaTech",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Filtros para categorías
  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaLaptopCode /> },
    { id: 'web', name: 'Web Apps', icon: <FaReact /> },
    { id: 'mobile', name: 'Mobile', icon: <AiFillAndroid /> },
    { id: 'api', name: 'APIs', icon: <FaNodeJs /> }
  ];

  // Asignar categorías a proyectos
  const categorizedProjects = projects.map(project => ({
    ...project,
    category: project.name.toLowerCase().includes('mobile') || project.name.toLowerCase().includes('android') ? 'mobile' :
             project.name.toLowerCase().includes('api') || project.name.toLowerCase().includes('backend') ? 'api' : 'web'
  }));

  const filteredProjects = activeFilter === 'all' 
    ? categorizedProjects 
    : categorizedProjects.filter(project => project.category === activeFilter);

  // Componente para cada tarjeta de proyecto
  const ProjectCard = React.memo(({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { 
      once: true, 
      margin: "-100px 0px -100px 0px" 
    });

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        className="group relative flex flex-col min-h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative min-h-full bg-transparent border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg overflow-hidden"
          whileHover={{ 
            y: -8,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative p-6 min-h-full flex flex-col">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-3">
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {project.name}
                  </h3>
                  <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-full border border-indigo-200 dark:border-indigo-700"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <FaRocket className="text-indigo-600 dark:text-indigo-400 w-3 h-3" />
                    <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300">
                      {project.client}
                    </span>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-2 ml-3"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.website && (
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {project.description}
            </motion.p>

            {/* Technologies - Con línea de Tech Stack */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Tech Stack
                </span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full" />
              </div>
              
              <div className="flex items-center gap-3">
                {project.technologies.map((tech, i) => (
                  <Tooltip.Root key={i}>
                    <Tooltip.Trigger asChild>
                      <motion.div
                        className="cursor-pointer text-2xl transition-transform hover:scale-125 hover:text-indigo-500"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + 0.7 + i * 0.05 }}
                        whileHover={{ scale: 1.25 }}
                      >
                        {tech.icon}
                      </motion.div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-indigo-700 text-white text-sm px-3 py-2 rounded-md shadow-md"
                        side="top"
                      >
                        {tech.name}
                        <Tooltip.Arrow className="fill-indigo-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                ))}
              </div>
            </motion.div>

            {/* Línea divisoria sutil */}
            <motion.div
              className="my-4 border-t border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ delay: index * 0.1 + 0.8, duration: 0.3 }}
            />

            {/* Action buttons */}
            <motion.div
              className="flex gap-4 mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 0.9 }}
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-semibold justify-center gap-2 w-1/2 border border-indigo-400 text-indigo-600 rounded-lg py-1 transition-all duration-300 hover:bg-indigo-100 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub className="text-lg" /> View Code
                </motion.a>
              )}
              {project.website && (
                <motion.a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-semibold justify-center gap-2 w-1/2 border border-green-400 text-green-600 rounded-lg py-1 transition-all duration-300 hover:bg-green-100 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt className="text-lg" /> Visit Site
                </motion.a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  });

  return (
    <Tooltip.Provider delayDuration={200}>
      <section ref={containerRef} className="py-12 md:py-20 min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700 mb-4 md:mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaLaptopCode className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs md:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                Portfolio Showcase
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Discover the projects that showcase my expertise in modern development technologies and innovative solutions.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300
                  ${activeFilter === category.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
                  }
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                <motion.span
                  className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {category.id === 'all' ? projects.length : categorizedProjects.filter(p => p.category === category.id).length}
                </motion.span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            style={{ gridAutoRows: 'max-content' }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: projects.length, label: "Total Projects" },
                { number: [...new Set(projects.flatMap(p => p.technologies.map(t => t.name)))].length, label: "Technologies" },
                { number: projects.filter(p => p.website).length, label: "Live Sites" },
                { number: projects.filter(p => p.github).length, label: "Open Source" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 md:p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="text-2xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Tooltip.Provider>
  );
};

export default Projects;
