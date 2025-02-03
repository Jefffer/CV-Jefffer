import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLanguage } from "react-icons/fa";

const educationData = [
  {
    university: "International University of La Rioja (UNIR)",
    logo: "https://pbs.twimg.com/profile_images/1666002917482979329/L7ZnSnEv_400x400.png",
    degree: "Master's Degree in Software Engineering and Computer Systems",
    period: "2024 - 2025",
  },
  {
    university: "Universidad Distrital Francisco José de Caldas",
    logo: "https://www.udistrital.edu.co/sites/default/files/contenido-estatico/imagenes/escudo_ud.gif",
    degree: "Engineer's Degree in Computer Software Engineering",
    period: "2011 - 2017",
  },
];

const languages = [
  { name: "Español", level: "Native" },
  { name: "Inglés", level: "CEFR B2" },
  { name: "Francés", level: "CEFR A1" },
];

const Education = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="prose container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-10 text-gray-800"
        >
          Education & <span className="text-indigo-500">Languages</span>
        </motion.h2>

        {/* Education Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex items-center space-x-4"
            >
              <img
                src={edu.logo}
                alt={edu.university}
                className="w-16 h-16 object-contain rounded-md border border-gray-300"
              />
              <div>
                <h3 className="text-2xl font-bold text-indigo-600">{edu.university}</h3>
                <p className="text-gray-500 font-semibold text-sm">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
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
          <h3 className="text-3xl font-bold text-indigo-600 flex items-center">
            <FaLanguage className="mr-2" /> Languages
          </h3>
          <ul className="mt-4 space-y-2">
            {languages.map((lang, index) => (
              <li key={index} className="flex justify-between text-gray-700 text-lg border-b pb-2">
                <span>{lang.name}</span>
                <span className="font-semibold text-indigo-500">{lang.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
