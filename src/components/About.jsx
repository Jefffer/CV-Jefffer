import React from "react";

// const About = () => {
//     return (
//       <section id="about" className="prose mx-auto p-6 my-8">
//         <h2 className="text-center text-4xl font-bold">About me</h2>
//         <p>
//           Soy un desarrollador apasionado con experiencia en <strong>.NET</strong> y <strong>React</strong>. 
//           Mi enfoque está en crear aplicaciones escalables, eficientes y atractivas visualmente.
//         </p>
//       </section>
//     );
//   };

const About = () => {
    return (
      <section id="about" className="prose mx-auto p-6 my-8 bg-gradient-to-r from-gray-10 via-gray-100 to-gray-40 rounded-md shadow-lg">
        <h2 className="text-center text-4xl font-bold mb-6">My Profile</h2>
        <p className="text-base font-medium text-gray-600 eading-relaxed animate-fadeInUp">
          Profile oriented to <strong className="font-bold">analysis, design, modeling</strong>, and 
          <strong className="font-bold"> software development</strong>, with advanced knowledge in:
          <ul className="list-disc list-inside my-4">
            <li>
              Process diagramming and <strong className="font-bold">Database Administration </strong> 
              (relational SQL and non-relational).
            </li>
            <li>
              Web development (<strong className="font-bold">MVC, WebApi, Multitier</strong>, and 
              <strong className="font-bold"> Clean Architecture</strong>).
            </li>
            <li>
              <strong className="font-bold">FrontEnd</strong> development with Angular and React, and 
              <strong className="font-bold"> Mobile development</strong> (Android, Kotlin).
            </li>
            <li>
              Experience in <strong className="font-bold">Microsoft .NET Framework</strong> (ASP.NET, .NET Core) 
              and extensive knowledge in <strong className="font-bold">Entity Framework</strong>, with deployments in IIS 
              (Windows Server).
            </li>
            <li>
              Agile methodologies (<strong className="font-bold">SCRUM, XP, Kanban</strong>) and tools such as 
              <strong className="font-bold">Git, Azure DevOps, CRM</strong> and <strong className="font-bold"> Microsoft Project</strong>.
            </li>
            <li>
              DevOps skills with <strong className="font-bold">AWS ECS, EC2, S3</strong>, and tools like 
              <strong className="font-bold"> CodeCommit, CodePipeline</strong> and <strong className="font-bold"> CodeBuild</strong>.
            </li>
          </ul>
        </p>
        {/* <div className="text-center mt-6">
          <a
            href="/path-to-your-cv.pdf"
            download="My_CV.pdf"
            className="inline-block bg-blue-500 text-white font-bold py-2 px-6 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all"
          >
            Download CV
          </a>
        </div> */}
      </section>
    );
  };
  

export default About;
