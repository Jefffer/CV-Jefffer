import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Flag from "react-world-flags";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto p-8 my-12 dark:bg-indigo-950 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600"
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
        Hi there! I'm a Software Developer with <strong>8 years of experience</strong> currently living in <strong>Bilbao</strong> <Flag code="ES" className="w-8 h-6 inline-block transition-transform transform hover:rotate-12" />
        <br />I am passionate about creating robust, scalable, and efficient software solutions.
      </motion.p>

      {/* Habilidades */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ul className="list-disc prose text-gray-500 space-y-3 pl-5 dark:text-gray-400">
          <li>
            <strong className="font-semibold text-gray-600 dark:text-gray-300">Software Design & Backend Development</strong>{" "}
            with expertise in <strong className="font-semibold text-gray-600 dark:text-gray-300">C#, .NET, Java, Python, PHP</strong>.
          </li>
          <li>
            <strong className="font-semibold text-gray-600 dark:text-gray-300">Database Management</strong> (SQL,
            MySQL, PostgreSQL, NoSQL, MongoDB).
          </li>
          <li>
            <strong className="font-semibold text-gray-600 dark:text-gray-300">Frontend Development</strong> with{" "}
            React, Angular, and modern UI frameworks.
          </li>
          <li>
            <strong className="font-semibold text-gray-600 dark:text-gray-300">DevOps & Cloud</strong> experience
            with Azure DevOps and AWS (ECS, EC2, S3).
          </li>
          <li>
            Strong knowledge of <strong className="font-semibold text-gray-600 dark:text-gray-300">Agile Methodologies</strong > (Scrum,
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
          className="flex items-center justify-center font-semibold gap-2 pl-5 pr-5 border border-indigo-400 text-indigo-600 rounded-lg py-2 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 dark:text-indigo-300 dark:border-indigo-700"
        >
          <FaDownload className="hover:rotate-12" />
          Download CV
        </a>
        <a
          // href="/path-to-your-cv.pdf"
          download="My_CV.pdf"
          className="flex items-center justify-center font-semibold gap-2 pl-5 pr-5 border border-gray-400 text-gray-600 rounded-lg py-2 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        >
          <FaDownload className="transition-transform transform hover:rotate-12"/>
          CV en Español
        </a>
      </motion.div>
    </motion.section>
  );
};

export default About;
