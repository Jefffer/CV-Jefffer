import React from "react";
import { motion } from "framer-motion";
import {
  FaMusic,
  FaGuitar,
  FaPlane,
  FaCat,
  FaPaintBrush,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";

const hobbies = [
  { icon: <CgGym />, text: "Staying fit & going to the gym", color: "bg-red-100 text-red-600" },
  { icon: <FaCat />, text: "Spending time with my cats", color: "bg-yellow-100 text-yellow-600" },
  { icon: <FaMusic />, text: "Playing guitar & discovering music", color: "bg-blue-100 text-blue-600" },
  { icon: <BiSolidCameraMovie />, text: "Exploring different movie genres", color: "bg-green-100 text-green-600" },
  { icon: <FaPlane />, text: "Traveling & learning about cultures", color: "bg-purple-100 text-purple-600" },
  { icon: <FaPaintBrush />, text: "Expressing myself through tattoos", color: "bg-pink-100 text-pink-600" },
];

const PersonalProfile = () => {
  return (
    <section className="mx-auto py-12 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100">
      <div className="prose container mx-auto px-6">
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-6 text-gray-800"
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <p className="text-lg text-gray-600 text-center mb-8">
          <em>Here's a little glimpse into who I am outside of work.</em>
        </p>

        {/* Hobbies Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
              <FaGuitar className="text-red-700" /> Hobbies & Interests
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-all bg-white text-center"
                >
                  <div className={`w-16 h-16 flex items-center justify-center rounded-full ${hobby.color} text-4xl`}>
                    {hobby.icon}
                  </div>
                  <span className="text-gray-700 mt-3 text-sm font-medium">{hobby.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Goals Section */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <h5 className="text-2xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
                <TbTargetArrow className="text-red-600" /> Future Goals
              </h5>
              <ul className="list-none space-y-3 text-gray-600">
                <li>🚀 Become a <strong>Software Architect</strong> designing scalable and innovative systems.</li>
                <li>🌍 Travel the world and immerse myself in different cultures.</li>
                <li>🎵 Produce my own music tracks and explore the world of music production.</li>
                <li>🐾 Establish an <strong>animal refuge</strong> to support animal welfare.</li>
                <li>🗣️ Learn new languages (currently learning <strong>French</strong>).</li>
                <li>👨‍🏫 Mentor aspiring developers and give back to the community.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;
