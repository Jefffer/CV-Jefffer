import React from 'react';
import { FaGithub, FaReact, FaNodeJs, FaPython, FaAngular, FaJava, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiVercel, SiVite, SiBlazor   } from 'react-icons/si';
import { DiDotnet, DiMsqlServer } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";

import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';

const projects = [
  {
    name: "Portfolio System",
    description: "Requirements gathering, architectural design, database design, backend development and deployment of the State Insurance Portfolio System, complying with legal collection regulations for debtors of various insurance policies acquired with the company.",
    technologies: [
      { icon: <DiDotnet className="text-purple-500" />, name: ".Net Core" },
      { icon: <FaAngular className="text-red-600" />, name: "Angular" },
      { icon: <DiMsqlServer className="text-red-600" />, name: "SQL Server" },
    ],
    client: "State Insurance Colombia (Seguros del Estado)"
  },
  {
    name: "FrontEnd Library App",
    description: "FrontEnd of functional e-commerce web application with authentication, cart, and payment integration for a virtual library.",
    technologies: [
      { icon: <FaReact className="text-blue-500" />, name: "React" },
      { icon: <TbBrandVite className="text-purple-500" />, name: "Vite" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
      { icon: <SiVercel className="text-gray-700" />, name: "Vercel" },
      // { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
      // { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      // { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/RelatosDePapelFrontEnd",
  },
  {
    name: "BackEnd Library App",
    description: "Microservices-based backend of a functional e-commerce web application with a book catalog, shopping cart and payment integration for a virtual library using Eureka and an API Gateway.",
    technologies: [
      { icon: <FaJava className="text-red-600" />, name: "Java" },
      { icon: <SiMysql className="text-teal-600" />, name: "MySQL" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/RelatosDePapelFrontEnd",
  },
  {
    name: "Authentication Demo Api",
    description: "Demo API to handle user authentication.",
    technologies: [
      { icon: <DiDotnet className="text-purple-500" />, name: ".Net Framework 4.6" },
      { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "CSHTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/DemoApiAuthentication",
  },
  {
    name: "Bogus Data Generator",
    description: "A simple and sane data generator for populating objects that supports different locales. A delightful port of the famed faker.js and inspired by FluentValidation. Use Bogus to create UIs with fake data or seed databases.",
    technologies: [
      { icon: <DiDotnet className="text-purple-500" />, name: ".Net Core 7.0" },
      { icon: <SiBlazor className="text-purple-700" />, name: "Blazor Server" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "CSHTML" },
      { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    ],
    client: "Personal Project",
    github: "https://github.com/Jefffer/BogusDataApp",
  },
  {
    name: "",
    description: "A chatbot powered by machine learning and natural language processing.",
    technologies: [
      { icon: <FaPython className="text-yellow-500" />, name: "Python" },
      { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    ],
    client: "Proyecto Personal",
    github: "https://github.com/your-repo",
  },
  {
    name: "Banking System API",
    description: "A secure and scalable banking system API developed in Java.",
    technologies: [
      { icon: <DiDotnet className="text-purple-600" />, name: ".Net Core" },
      { icon: <SiBlazor className="text-purple-700" />, name: "PostgreSQL" },
    ],
    client: "Finance Corp",
    github: "https://github.com/your-repo",
  }
];

const Projects = () => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <section id="projects" className="prose mx-auto p-6 my-8">
        <h2 className="text-center text-5xl font-bold">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Here are some of the projects I've worked on:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-transform hover:scale-105"
              // whileHover={{ }}
            >
              <h5 className="text-2xl font-semibold mb-2">{project.name}</h5>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center gap-3 mb-4">
                {project.technologies.map((tech, i) => (
                  <Tooltip.Root key={i}>
                    <Tooltip.Trigger asChild>
                      <div className="cursor-pointer text-2xl">{tech.icon}</div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-black text-white text-sm px-2 py-1 rounded-md shadow-md"
                        side="top"
                      >
                        {tech.name}
                        <Tooltip.Arrow className="fill-black" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                ))}
              </div>
              <span className="block text-sm font-semibold text-gray-500">{project.client}</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
              >
                <FaGithub className="text-2xl" /> View Code
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </Tooltip.Provider>
  );
};

export default Projects;
