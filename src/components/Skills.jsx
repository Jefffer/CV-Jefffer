import React from 'react';
// import { CheckIcon } from '@heroicons/react/solid';
import { FaJsSquare, FaReact, FaDatabase, FaMicrosoft, FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaDotCircle,
  FaDocker
  } from 'react-icons/fa';

  import {
    
    SiKotlin,
    
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiPhpmyadmin,
    
  } from "react-icons/si";

  import { PiFileCSharpFill, PiMathOperationsFill  } from "react-icons/pi";

  import { GrDocumentStore } from "react-icons/gr";
  import { VscAzureDevops } from "react-icons/vsc";



const Skills = () => {
  const skills = [
    { name: ".NET", icon: <FaMicrosoft className="text-purple-700 text-4xl" /> },
    { name: "C#", icon: <PiFileCSharpFill className="text-blue-500 text-4xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-600 text-4xl" /> },
    { name: "Azure", icon: <VscAzureDevops className="text-blue-600 text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
    { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-4xl" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
    { name: "HTML 5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-teal-500 text-4xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-4xl" /> },
    // { name: "NoSQL", icon: <GrDocumentStore className="text-blue-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-4xl" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-500 text-4xl" /> },
    { name: "OutSystems", icon: <FaDotCircle className="text-red-400 text-4xl" /> },
    { name: "MATLAB", icon: <PiMathOperationsFill className="text-blue-400 text-4xl" /> },
    { name: "phpMyAdmin", icon: <SiPhpmyadmin className="text-green-500 text-4xl" /> },
  ];

//   return (
//     <section id="skills" className="prose mx-auto p-6 my-8">
//       <h2 className="text-center text-4xl font-bold">Skills</h2>
//       <ul className="flex flex-wrap justify-center gap-4 mt-4">
//         {skills.map((skill, index) => (
//           <li key={index} className="p-2 bg-gray-800 text-white rounded-md shadow-md hover:scale-110 transition-transform">
//             {skill.icon}{skill.name}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// return (
//   <section id="skills" className="prose mx-auto p-6 my-8">
//     <h2 className="text-center text-4xl font-bold">Habilidades</h2>
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 justify-items-center">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow"
//         >
//           {skill.icon}
//           <span className="text-lg font-semibold">{skill.name}</span>
//         </div>
//       ))}
//     </div>
//   </section>
// );
// };

return (
  <section id="skills" className="prose mx-auto p-6 my-8">
    <h2 className="text-center text-4xl font-bold">Tech Skills</h2>
    <p className="text-center text-lg text-gray-600 mb-12">
        These are the technologies, languages and tools I am proficient in:
      </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 justify-items-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition-transform transform hover:scale-110"
        >
          <div className="transition-transform transform hover:rotate-12">{skill.icon}</div>
          <span className="text-lg font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);
};

// return (
//   <section id="skills" className="py-16 bg-gray-100">
//     <div className="container mx-auto px-6 text-center">
//       <h2 className="text-4xl font-bold mb-8 text-gray-800">
//         My <span className="text-blue-600">Skills</span>
//       </h2>
//       <p className="text-lg text-gray-600 mb-12">
//         These are the technologies and tools I am proficient in:
//       </p>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="text-5xl mb-4">{skill.icon}</div>
//             <p className="text-lg font-medium text-gray-700">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );
// };





// const Skills = () => {
//   const skills = [
//     { name: "JavaScript", icon: <CheckIcon className="h-6 w-6 text-green-500" /> },
//     { name: "React", icon: <CheckIcon className="h-6 w-6 text-green-500" /> },
//     { name: ".NET", icon: <CheckIcon className="h-6 w-6 text-green-500" /> },
//   ];

//   return (
//     <section id="skills" className="prose mx-auto p-6 my-8">
//       <h2 className="text-center text-4xl font-bold">Habilidades</h2>
//       <ul className="flex flex-wrap justify-center gap-4 mt-4">
//         {skills.map((skill, index) => (
//           <li key={index} className="flex items-center gap-2 p-2 bg-gray-800 text-white rounded-md shadow-md">
//             {skill.icon}
//             {skill.name}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

export default Skills;
