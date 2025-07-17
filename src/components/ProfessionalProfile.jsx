import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaAward } from "react-icons/fa";

const ProfessionalProfile = () => {
  return (
    <section className="mx-auto py-12">
      <div className="prose container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-6 text-gray-800"
        >
          My <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">Professional Profile</span>
          </motion.h2>
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-10"
        >
          <em>Discover my technical skills, certifications, and career highlights.</em>
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-gray-200 dark:bg-transparent dark:border dark:border-gray-600">
            {/* <h5 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaCode className="text-blue-600" /> Tech Stack & Skills
            </h5> */}
            <h5 className="text-3xl font-semibold text-gray-800 flex items-center gap-3 mb-10 relative">
                    <FaCode className="text-blue-600 text-4xl" />
                    Tech Stack & Skills
                    <span className="absolute left-0 -bottom-2 w-24 h-1 bg-blue-500 rounded-full"></span>
                  </h5>
            <ul className="space-y-3 text-gray-600 list-none pl-0 dark:text-gray-400">
              <li><strong className="font-semibold dark:text-gray-300">Backend:</strong> C#, .NET Core, ASP.NET, Java, Python, PHP</li>
              <li><strong className="font-semibold dark:text-gray-300">Databases:</strong> SQL Server, MySQL, PostgreSQL, MongoDB, Entity Framework</li>
              <li><strong className="font-semibold dark:text-gray-300">Frontend:</strong> React, Angular, CSS, HTML, JavaScript, Typescript</li>
              <li><strong className="font-semibold dark:text-gray-300">Mobile:</strong> Java, Kotlin, Android</li>
              <li><strong className="font-semibold dark:text-gray-300">Cloud & DevOps:</strong> Azure, AWS, Docker, Kubernetes</li>
              <li><strong className="font-semibold dark:text-gray-300">Tools:</strong> Git, VS Code, Azure DevOps, Jira</li>
              <li><strong className="font-semibold dark:text-gray-300">Agile & Methodologies:</strong> SCRUM, Kanban, Waterfall</li>
            </ul>
          </div>          

          {/* Certifications & Experience */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-gray-200 dark:bg-transparent dark:border dark:border-gray-600">
            {/* <h5 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaAward className="text-yellow-500" /> Certifications & Achievements
            </h5> */}
            <h5 className="text-3xl font-semibold text-gray-800 flex items-center gap-3 mb-10 relative">
                    <FaAward className="text-yellow-500 text-4xl" />
                    Certifications & Achievements
                    <span className="absolute left-0 -bottom-2 w-24 h-1 bg-yellow-400 rounded-full"></span>
                  </h5>
            <ul className="list-none space-y-3 text-gray-600 pl-0 dark:text-gray-400">
              <li>✅ Microsoft Certified: 
              <a href="https://www.credly.com/badges/fef56564-2602-4102-8fa2-4c6188113a63/linked_in?t=sqwocc"
                   className="ml-1 text-blue-600 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-300">
                   AZ-900 Azure Fundamentals
                </a>
              </li> 
              
              <li>🎓 Master's Degree in Software Engineering (in progress)</li>
              <li>📜 8+ years of experience in software development</li>
              <li>📝 Published Paper: 
                <a href="https://www.ijimai.org/journal/node/3276"
                   className="ml-1 text-blue-600 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-300">
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
