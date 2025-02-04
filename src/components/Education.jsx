import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";
import Flag from "react-world-flags";

const educationData = [
  {
    university: "International University of La Rioja (UNIR)",
    logo: "https://pbs.twimg.com/profile_images/1666002917482979329/L7ZnSnEv_400x400.png",
    degree: "Master's Degree in Software Engineering and Computer Systems",
    location: "Logroño, La Rioja",
    flag: "ES",
    period: "2024 - 2025",
  },
  {
    university: "District University Francisco José de Caldas",
    logo: "https://www.udistrital.edu.co/sites/default/files/contenido-estatico/imagenes/escudo_ud.gif",
    degree: "Engineer's Degree in Computer Software Engineering",
    location: "Bogotá D.C", 
    flag: "CO",
    period: "2011 - 2017",
  },
];
    
const languages = [
    { name: "Spanish", level: "Native", flag: "ES", proficiency: 100 },
    { name: "English", level: "CEFR B2", flag: "GB", proficiency: 75 },
    { name: "French", level: "CEFR A1", flag: "FR", proficiency: 30 },
];

const Education = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-100">
      <div className="prose container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-10 text-gray-800"
        >
          Education <span className="text-indigo-500">& Languages</span>
        </motion.h2>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            //   whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
              className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 flex items-center space-x-4 transition-transform duration-300"
            >
              <img
                src={edu.logo}
                alt={edu.university}
                className="w-20 h-20 object-contain rounded-md border border-gray-300 transition-transform transform hover:scale-110"
              />
              <div>
                <h5 className="text-2xl font-bold text-indigo-600">
                  {edu.university}
                </h5>
                <p className="text-gray-500 font-semibold text-sm mb-1 mt-1">
                  {edu.degree}
                </p>
                <p className="text-gray-500 text-sm mb-1 mt-1"> {edu.location}{" · "} <Flag code={edu.flag} className="m-0 w-8 h-6 inline-block rotate-12 transition-transform transform hover:rotate-0" /> </p>
                <p className="text-gray-500 text-sm mb-1 mt-1">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white shadow-lg rounded-xl p-6 border border-gray-200"
        >
          <h5 className="text-3xl font-semibold text-gray-800 flex items-center gap-3 mb-10 relative">
            <FaLanguage className="text-violet-500 text-4xl" />
            Languages
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-violet-400 rounded-full"></span>
          </h5>
          <ul className="pl-0 list-none">
            {languages.map((lang, index) => (
              <li key={index} className="flex items-center gap-4">
                <Flag code={lang.flag} className="w-8 h-6 m-0" />
                <span className="text-lg text-gray-700 font-medium w-32">{lang.name}</span>
                <div className="relative w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="h-full bg-indigo-500"
                  ></motion.div>
                </div>
                <span className="text-indigo-500 font-semibold w-24 text-right">{lang.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
