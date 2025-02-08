import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Flag from "react-world-flags";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto p-8 my-12 bg-white rounded-lg shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Encabezado animado */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What <span className="text-indigo-500">I Do</span>
      </motion.h2>

      {/* Introducción */}
      <motion.p
        className="text-lg text-gray-700 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hi there! I'm a Software Developer currently living in <strong>Bilbao</strong> <Flag code="ES" className="w-8 h-6 inline-block transition-transform transform hover:rotate-12" />
        <br />I am passionate about creating robust, scalable, and efficient software solutions.
      </motion.p>

      {/* Habilidades */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ul className="list-disc prose text-gray-700 space-y-3 pl-5">
          <li>
            <strong className="font-bold">Software Design & Backend Development</strong>{" "}
            with expertise in <strong>C#, .NET, Java, Python, PHP</strong>.
          </li>
          <li>
            <strong className="font-bold">Database Management</strong> (SQL,
            MySQL, PostgreSQL, NoSQL, MongoDB).
          </li>
          <li>
            <strong className="font-bold">Frontend Development</strong> with{" "}
            React, Angular, and modern UI frameworks.
          </li>
          <li>
            <strong className="font-bold">DevOps & Cloud</strong> experience
            with Azure DevOps and AWS (ECS, EC2, S3).
          </li>
          <li>
            Strong knowledge of <strong>Agile Methodologies</strong> (Scrum,
            Kanban) and version control (Git, Azure DevOps).
          </li>
        </ul>
      </motion.div>

      {/* Botones de descarga */}
      <motion.div
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <a
          // href="/path-to-your-cv.pdf"
          download="My_CV.pdf"
          className="transition-transform transform hover:scale-105 flex items-center gap-2 bg-indigo-600 text-white font-bold py-2 px-5 rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
        >
          <FaDownload className="transition-transform transform hover:rotate-12" />
          Download CV
        </a>
        <a
          // href="/path-to-your-cv.pdf"
          download="My_CV.pdf"
          className="transition-transform transform hover:scale-105 flex items-center gap-2 bg-gray-800 text-white font-bold py-2 px-5 rounded-md shadow-md hover:bg-gray-900 hover:shadow-lg transition-all"
        >
          <FaDownload className="transition-transform transform hover:rotate-12"/>
          CV en Español
        </a>
      </motion.div>
    </motion.section>
  );
};

export default About;
