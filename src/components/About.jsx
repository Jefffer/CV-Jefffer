import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="prose mx-auto p-6 my-8 bg-gradient-to-r from-gray-10 via-gray-100 to-gray-40 rounded-md shadow-lg"
//     >
//       {/* <h2 className="text-center text-4xl font-bold mb-6">My Profile</h2> */}
//       <p className="text-base font-medium text-gray-600 eading-relaxed animate-fadeInUp">
//         Profile oriented to{" "}
//         <strong className="font-bold">analysis, design, modeling</strong>, and
//         <strong className="font-bold"> software development</strong>, with
//         advanced knowledge in:
//         <ul className="list-disc list-inside my-4">
//           <li>
//             Process diagramming and{" "}
//             <strong className="font-bold">Database Administration </strong>
//             (relational SQL and non-relational).
//           </li>
//           <li>
//             Web development (
//             <strong className="font-bold">MVC, WebApi, Multitier</strong>, and
//             <strong className="font-bold"> Clean Architecture</strong>).
//           </li>
//           <li>
//             <strong className="font-bold">FrontEnd</strong> development with
//             Angular and React, and
//             <strong className="font-bold"> Mobile development</strong> (Android,
//             Kotlin).
//           </li>
//           <li>
//             Experience in{" "}
//             <strong className="font-bold">Microsoft .NET Framework</strong>{" "}
//             (ASP.NET, .NET Core) and extensive knowledge in{" "}
//             <strong className="font-bold">Entity Framework</strong>, with
//             deployments in IIS (Windows Server).
//           </li>
//           <li>
//             Agile methodologies (
//             <strong className="font-bold">SCRUM, XP, Kanban</strong>) and tools
//             such as
//             <strong className="font-bold">
//               Git, Azure DevOps, CRM
//             </strong> and{" "}
//             <strong className="font-bold"> Microsoft Project</strong>.
//           </li>
//           <li>
//             DevOps skills with{" "}
//             <strong className="font-bold">AWS ECS, EC2, S3</strong>, and tools
//             like
//             <strong className="font-bold">
//               {" "}
//               CodeCommit, CodePipeline
//             </strong> and <strong className="font-bold"> CodeBuild</strong>.
//           </li>
//         </ul>
//       </p>
//       <div className="text-center mt-6">
//           <a
//             href="/path-to-your-cv.pdf"
//             download="My_CV.pdf"
//             className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
//           >
//             Download CV
//           </a>
//           <a
//             href="/path-to-your-cv.pdf"
//             download="My_CV.pdf"
//             className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
//           >
//             Descargar CV en Español
//           </a>
//         </div>
//     </section>
//   );
// };

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
        What <span className="text-blue-600">I Do</span>
      </motion.h2>

      {/* Introducción */}
      <motion.p
        className="text-lg text-gray-700 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Originally from <strong>Your Country</strong>, currently living in{" "}
        <strong>Your Current Country</strong>. Passionate about creating robust,
        scalable, and efficient software solutions.
      </motion.p>

      {/* Habilidades */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ul className="list-disc list-inside text-gray-700 space-y-3 pl-5">
          <li>
            <strong className="font-bold">Software Design & Development</strong>{" "}
            with expertise in <strong>C#, .NET, Python, PHP</strong>.
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
            with AWS (ECS, EC2, S3) and Azure DevOps.
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
          href="/path-to-your-cv.pdf"
          download="My_CV.pdf"
          className="flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-5 rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
        >
          <FaDownload />
          Download CV
        </a>
        <a
          href="/path-to-your-cv.pdf"
          download="My_CV.pdf"
          className="flex items-center gap-2 bg-gray-800 text-white font-bold py-2 px-5 rounded-md shadow-md hover:bg-gray-900 hover:shadow-lg transition-all"
        >
          <FaDownload />
          Descargar CV en Español
        </a>
      </motion.div>
    </motion.section>
  );
};

export default About;
