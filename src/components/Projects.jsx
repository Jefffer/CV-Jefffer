import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaAngular, FaJava, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiVercel, SiVite, SiBlazor, SiTypescript, SiDotnet,
  SiPhp, SiPhpmyadmin, SiCpanel, SiKotlin 
  } from 'react-icons/si';
import { DiDotnet, DiMsqlServer, DiSqllite  } from "react-icons/di";
import { TbBrandVite, TbBrandCSharp  } from "react-icons/tb";
import { AiFillAndroid } from "react-icons/ai";
import { motion } from 'framer-motion';
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
  return (
    <Tooltip.Provider delayDuration={200}>
      <section id="projects" className="prose mx-auto py-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-6"
        >
          My <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
        <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-gray-600 text-center mb-10"
                >
                  <em>Here are some of the projects I've worked on:</em>
                </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all border-gray-200 dark:bg-transparent border dark:border-gray-600"
            >
              <h5 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{project.name}</h5>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center gap-3 mb-4">
                {project.technologies.map((tech, i) => (
                  <Tooltip.Root key={i}>
                    <Tooltip.Trigger asChild>
                      <div className="cursor-pointer text-2xl transition-transform hover:scale-125 hover:text-indigo-500">
                        {tech.icon}
                      </div>
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
              {/* <span className="block text-sm font-semibold text-gray-500">{project.client}</span> */}

              <div className="flex items-center gap-3 my-5">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
                  {project.client}
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <div className="flex gap-4 mt-4">
              {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold justify-center gap-2 w-1/2 border border-indigo-400 text-indigo-600 rounded-lg py-1 transition-all duration-300 hover:bg-indigo-100 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900"
                  >
                    <FaGithub className="text-lg" /> View Code
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold justify-center gap-2 w-1/2 border border-green-400 text-green-600 rounded-lg py-1 transition-all duration-300 hover:bg-green-100 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900"
                  >
                    <FaExternalLinkAlt className="text-lg" /> Visit Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Tooltip.Provider>
  );
};

export default Projects;
