import React from "react";

const ProfessionalProfile = () => {
  return (
    <section className="mx-auto py-12 bg-white">
      <div className="prose container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          My <span className="text-blue-600">Professional Profile</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          <em>Discover my technical skills, certifications, and career highlights.</em>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>C#, .NET Framework, .NET Core, ASP.NET, Entity Framework</li>
              <li>Database Management: SQL SMM, MySQL, PostgreSQL, MongoDB</li>
              <li>FrontEnd: JavaScript, React, Angular</li>
              <li>Other languages: Python, PHP, Java, Kotlin</li>
              <li>Cloud: Azure DevOps, AWS</li>
              <li>Tools: Git, VS, Visual Code, CRM, Project, Office</li>
              <li>Methodologies: SCRUM, Kanban, Agile, Cascade</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">
              Certifications & Achievements
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              {/* <li>Certified AWS Developer Associate</li> */}
              <li>Microsoft Certified: AZ900 Azure Fundamentals</li>
              <li>Master in Software Engineering (in progress)</li>
              {/* <li>Scrum Master Certification</li> */}
              <li>Paper: <em>Genetic Operators Applied to Symmetric Cryptography.</em> <a 
            href="https://www.ijimai.org/journal/node/3276"
            className="hover:text-blue-600 transition duration-300"
          >See more here</a> </li>
              <li>7+ years of experience in software development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;
