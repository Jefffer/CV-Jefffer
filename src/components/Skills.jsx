import React from 'react';

const Skills = () => {
  const skills = ["JavaScript", "React", ".NET", "SQL", "Tailwind CSS"];

  return (
    <section id="skills" className="prose mx-auto p-6 my-8">
      <h2 className="text-center text-4xl font-bold">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-4 mt-4">
        {skills.map((skill, index) => (
          <li key={index} className="p-2 bg-gray-800 text-white rounded-md shadow-md hover:scale-110 transition-transform">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};


export default Skills;
