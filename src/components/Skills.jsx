import React from 'react';

const Skills = () => {
  const skills = ['.NET', 'React', 'JavaScript', 'C#', 'SQL', 'Azure', 'HTML', 'CSS'];

  return (
    <section id="skills" style={sectionStyle}>
      <h2>Habilidades</h2>
      <ul style={listStyle}>
        {skills.map((skill, index) => (
          <li key={index} style={listItemStyle}>
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
