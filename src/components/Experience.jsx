import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       company: 'Empresa XYZ',
//       role: 'Desarrollador .NET',
//       duration: 'Ene 2020 - Actualidad',
//       description: 'Desarrollo de aplicaciones web utilizando .NET y React. Implementación de servicios REST y mantenimiento de sistemas legados.',
//     },
//     {
//       company: 'Empresa ABC',
//       role: 'Junior Developer',
//       duration: 'Mar 2018 - Dic 2019',
//       description: 'Creación de aplicaciones internas con C# y SQL Server. Automatización de procesos internos.',
//     },
//   ];

//   return (
//     <section id="experience" style={sectionStyle}>
//       <h2>Experiencia</h2>
//       {experiences.map((exp, index) => (
//         <div key={index} style={experienceCard}>
//           <h3>{exp.role}</h3>
//           <h4>{exp.company}</h4>
//           <p><strong>{exp.duration}</strong></p>
//           <p>{exp.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// };

const Experience = () => {
    const experiences = [
      { company: "Tech Solutions", role: "Desarrollador .NET", years: "2020 - 2023" },
      { company: "Web Innovators", role: "Frontend Developer", years: "2017 - 2020" },
    ];
  
    return (
      <section id="experience" className="prose mx-auto p-6 my-8">
        <h2 className="text-center text-4xl font-bold">Experiencia</h2>
        <ul>
          {experiences.map((exp, index) => (
            <li key={index} className="mb-4">
              <h3>{exp.role}</h3>
              <p className="text-gray-600">{exp.company} | {exp.years}</p>
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
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
};

const experienceCard = {
  padding: '15px',
  margin: '10px 0',
  border: '1px solid #ddd',
  borderRadius: '8px',
};

export default Experience;
