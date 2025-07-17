import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Flag from "react-world-flags";

const skills = [
  {
    title: "Software Design & Backend Development",
    description: "Expertise in C#, .NET, Java, Python, PHP",
    // image: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1739881200~exp=1739884800~hmac=0fe28d2d1d4c35b9dd50c6e829a665faf9ca86f82f7c8c4683e1e9ad0bd9ac9b&w=1060",
    image: "./backend2.webp",
  },
  {
    title: "Frontend Development",
    description: "Building modern UIs with React, Angular, and more",
    // image: "https://img.freepik.com/free-vector/coding-concept-illustration_114360-22486.jpg?t=st=1739885189~exp=1739888789~hmac=3f96e1c0f88a6376d561206361922e8a9298cce144de8c0697ad4f05871914d4&w=826",
    image: "./frontend2.webp",
  },
  {
    title: "DevOps & Cloud",
    description: "Experience with Azure DevOps, AWS (ECS, EC2, S3)",
    // image: "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370940.jpg?t=st=1739885266~exp=1739888866~hmac=6ff8276b323a2b8e5f04824f55bce1b26bdec002655407ea23071b48b17f78ca&w=1380",
    image: "./devops2.webp",
  },
  {
    title: "Database Management",
    description: "SQL, MySQL, PostgreSQL, NoSQL, MongoDB",
    // image: "./5357389_2794206.svg",
    image: "./database4.webp",
  },
  {
    title: "Agile Methodologies",
    description: "Scrum, Kanban, Git, and Azure DevOps",
    // image: "https://img.freepik.com/free-vector/flat-scrum-task-board-with-hands-team-members-color-paper-stickers-group-software-developers-create-work-project-schedule-with-sticky-notes-teamwork-development-sprint-planning-concept_88138-909.jpg?t=st=1739891419~exp=1739895019~hmac=d7a9f5c53c8cc8f9aa6c88459c6cfd87f02001d3b2e76f4cabc905f0dbbceaa0&w=1380",
    image: "./agile2.webp",
  },
  {
    title: "Artificial Intelligence Enthusiast",
    description: "Machine Learning, Deep Learning, Neural Networks, Promp and GPT-3 models",
    // description: "Scrum, Kanban, Git, and Azure DevOps",
    // image: "https://img.freepik.com/free-vector/flat-scrum-task-board-with-hands-team-members-color-paper-stickers-group-software-developers-create-work-project-schedule-with-sticky-notes-teamwork-development-sprint-planning-concept_88138-909.jpg?t=st=1739891419~exp=1739895019~hmac=d7a9f5c53c8cc8f9aa6c88459c6cfd87f02001d3b2e76f4cabc905f0dbbceaa0&w=1380",
    image: "./ia1.webp",
  },
];

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center dark:bg-indigo-950">
      {/* Introducción */}
      <motion.p
        className="text-lg text-indigo-500 dark:text-gray-300 text-center mt-14 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hi there! I'm a <strong className="font-semibold">Software Developer</strong> with <strong className="font-semibold">8 years of experience</strong> currently living in <strong className="font-semibold">Bilbao</strong>{" "}
        <Flag code="ES" className="w-8 h-6 inline-block transition-transform transform hover:rotate-12" />
        <br />I am passionate about creating robust, scalable, and efficient software solutions.
      </motion.p>

      {/* Botones de descarga */}
      <motion.div
        className="flex justify-center gap-4 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="/cv-en.pdf"
          download
          className="group flex items-center justify-center font-semibold gap-2 px-5 py-2 border border-indigo-400 text-indigo-600 rounded-xl transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 dark:text-indigo-300 dark:border-indigo-700"
        >
          <FaDownload className="transition-transform transform group-hover:rotate-12" /> Download CV
        </a>
        <a
          href="/cv-es.pdf"
          download
          className="group flex items-center justify-center font-semibold gap-2 px-5 py-3 border border-gray-400 text-gray-600 rounded-xl transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-900 dark:text-gray-200 dark:border-gray-600"
        >
          <FaDownload className="transition-transform transform group-hover:rotate-12" /> CV en Español
        </a>
      </motion.div>

      {/* Sección de habilidades */}
      <div className="w-full flex flex-col mt-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden"
            initial={{ y: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
            <img
              src={skill.image}
              alt={skill.title}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
            />
            <div className="relative z-10 bg-black/30 backdrop-blur-sm p-8 rounded-xl text-center max-w-lg mx-4">
              <h3 className="text-3xl font-semibold text-gray-100 dark:text-gray-200">{skill.title}</h3>
              <p className="text-lg text-indigo-100 mt-2 dark:text-indigo-200">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
};

export default About;
