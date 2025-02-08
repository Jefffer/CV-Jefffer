import React from 'react';
import { FaGithub, FaReact, FaNodeJs, FaPython, FaAngular, FaJava } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiMysql, SiTailwindcss } from 'react-icons/si';
import { DiDotnet } from "react-icons/di";
import { motion } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';

const projects = [
  {
    name: "E-commerce Platform",
    description: "A fully functional e-commerce web application with authentication, cart, and payment integration.",
    technologies: [
      { icon: <FaReact className="text-blue-500" />, name: "React" },
      { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
    ],
    client: "Relatos de Papel",
    github: "https://github.com/your-repo",
  },
  {
    name: "Project Management App",
    description: "A task and project management tool with real-time collaboration features.",
    technologies: [
      { icon: <FaAngular className="text-red-600" />, name: "Angular" },
      { icon: <SiMysql className="text-teal-600" />, name: "MySQL" },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    ],
    client: "Enterprise Client",
    github: "https://github.com/your-repo",
  },
  {
    name: "AI Chatbot",
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
      { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
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
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
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
