import React from 'react';
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
    { name: ".NET", icon: <FaMicrosoft className="text-purple-700 text-5xl" />, bg: "bg-purple-50" },
    { name: "C#", icon: <PiFileCSharpFill className="text-blue-500 text-5xl" />, bg: "bg-blue-50" },
    { name: "SQL", icon: <FaDatabase className="text-gray-600 text-5xl" />, bg: "bg-gray-50" },
    { name: "Azure", icon: <VscAzureDevops className="text-blue-600 text-5xl" />, bg: "bg-blue-50" },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" />, bg: "bg-yellow-50" },
    { name: "Java", icon: <FaJava className="text-red-600 text-5xl" />, bg: "bg-red-50" },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl" />, bg: "bg-blue-50" },
    { name: "PHP", icon: <FaPhp className="text-indigo-500 text-5xl" />, bg: "bg-indigo-50" },
    { name: "React", icon: <FaReact className="text-blue-500 text-5xl" />, bg: "bg-blue-50" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-5xl" />, bg: "bg-yellow-50" },
    { name: "HTML 5", icon: <FaHtml5 className="text-orange-500 text-5xl" />, bg: "bg-orange-50" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" />, bg: "bg-blue-50" },
    { name: "Angular", icon: <FaAngular className="text-red-500 text-5xl" />, bg: "bg-red-50" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" />, bg: "bg-green-50" },
    { name: "MySQL", icon: <SiMysql className="text-teal-500 text-5xl" />, bg: "bg-teal-50" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-5xl" />, bg: "bg-blue-50" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" />, bg: "bg-green-50" },
    { name: "Kotlin", icon: <SiKotlin className="text-purple-500 text-5xl" />, bg: "bg-purple-50" },
    { name: "OutSystems", icon: <FaDotCircle className="text-red-400 text-5xl" />, bg: "bg-red-50" },
    { name: "MATLAB", icon: <PiMathOperationsFill className="text-blue-400 text-5xl" />, bg: "bg-blue-50" },
    { name: "phpMyAdmin", icon: <SiPhpmyadmin className="text-green-500 text-5xl" />, bg: "bg-green-50" },
  ];

return (
  <section id="skills" className="prose mx-auto p-6 my-8">
    <h2 className="text-center text-5xl font-bold">Tech <span className="text-indigo-500">Skills</span></h2>
    <p className="text-center text-lg text-gray-600 mb-12">
        These are the technologies, languages and tools I am proficient in:
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-6 justify-items-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`w-full flex flex-col items-center gap-2 p-4 ${skill.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110`}
        >
          <div className="transition-transform transform hover:rotate-12">{skill.icon}</div>
          <span className="text-m font-semibold">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);
};

export default Skills;
