import React from "react";
import { FaCloud, FaDatabase, FaCode, FaAward, FaBook } from "react-icons/fa";

const ProfessionalProfile = () => {
  return (
    <section className="mx-auto py-12 bg-gray-50">
      <div className="prose container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        {/* <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-800"> */}
          My <span className="text-blue-600">Professional Profile</span>
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          <em>Discover my technical skills, certifications, and career highlights.</em>
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h5 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaCode className="text-blue-600" /> Tech Stack & Skills
            </h5>
            <ul className="list-none space-y-3 text-gray-600">
              <li><strong>Backend:</strong> C#, .NET Core, ASP.NET, Entity Framework</li>
              <li><strong>Databases:</strong> SQL Server, MySQL, PostgreSQL, MongoDB</li>
              <li><strong>Frontend:</strong> JavaScript, React, Angular</li>
              <li><strong>Languages:</strong> Python, PHP, Java, Kotlin</li>
              <li><strong>Cloud & DevOps:</strong> Azure, AWS, Docker, Kubernetes</li>
              <li><strong>Tools:</strong> Git, VS Code, Azure DevOps, Jira</li>
              <li><strong>Agile & Methodologies:</strong> SCRUM, Kanban, Waterfall</li>
            </ul>
          </div>

          {/* Certifications & Experience */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
            <h5 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaAward className="text-yellow-500" /> Certifications & Achievements
            </h5>
            <ul className="list-none space-y-3 text-gray-600">
              <li>✅ Microsoft Certified: AZ-900 Azure Fundamentals</li>
              <li>🎓 Master's Degree in Software Engineering (in progress)</li>
              <li>📜 7+ years of experience in software development</li>
              <li>📝 Published Paper: 
                <a href="https://www.ijimai.org/journal/node/3276"
                   className="ml-1 text-blue-600 hover:underline font-medium">
                   Genetic Operators in Cryptography
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;
