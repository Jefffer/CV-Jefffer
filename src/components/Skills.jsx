import React from 'react';
// import { CheckIcon } from '@heroicons/react/solid';
import { FaJsSquare, FaReact, FaDatabase, FaMicrosoft, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: ".NET", icon: <FaMicrosoft className="text-purple-700 text-4xl" /> },
    { name: "SQL", icon: <FaDatabase className="text-gray-600 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
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
    <h2 className="text-center text-4xl font-bold">Skills</h2>
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
