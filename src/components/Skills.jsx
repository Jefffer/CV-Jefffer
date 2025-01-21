import React from 'react';

const Skills = () => {
  const skills = ['.NET', 'React', 'JavaScript', 'C#', 'SQL', 'Azure', 'HTML', 'CSS'];

  return (
    <section id="skills" className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-md my-8 text-center">
      <h2 className="text-3xl font-semibold mb-4">Habilidades</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-800 text-white py-2 px-4 rounded-md shadow-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

const sectionStyle = {
  padding: '20px',
  margin: '20px auto',
  maxWidth: '800px',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  padding: '0',
};

const listItemStyle = {
  padding: '10px 20px',
  backgroundColor: '#282c34',
  color: '#ffffff',
  borderRadius: '5px',
};

export default Skills;
