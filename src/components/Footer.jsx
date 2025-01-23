import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

// const Footer = () => {
//     return (
//       <footer className="p-6 bg-gray-800 text-white text-center">
//         <p>&copy; 2025 Jefffer</p>
//         <p>All rights reserved</p>
//       </footer>
//     );
//   };

//   const Footer = () => {
//     return (
//       <footer className="p-6 bg-gray-800 text-white text-center">
//         <p>Follow me on:</p>
//         <div className="flex justify-center gap-4 mt-2">
//           <a href="https://github.com/tu-usuario" className="hover:text-gray-400">
//             <FaGithub className="text-4xl" />
//           </a>
//           <a href="https://linkedin.com/in/tu-perfil" className="hover:text-gray-400">
//             <FaLinkedin className="text-4xl" /> 
//           </a>
//           <a href="https://github.com/tu-usuario" className="hover:text-gray-400">
//             <RiInstagramFill className="text-4xl" />
//           </a>
//         </div>
//         <p className="mt-4">&copy; 2025 Jefferson Rodríguez. All rights reserved.</p>
//       </footer>
//     );
//   };


const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          {/* Redes sociales */}
          <p className="text-lg font-semibold">Follow me on:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/tu-usuario"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/tu-perfil"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://instagram.com/tu-usuario"
              aria-label="Instagram Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <RiInstagramFill className="text-3xl" />
            </a>
          </div>
  
          {/* Mapa del sitio */}
          <div className="mt-8">
            <p className="text-lg font-semibold">Site Map</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
            <a
                href="/"
                className="hover:text-gray-400 transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-gray-400 transition duration-300"
              >
                About Me
              </a>
              <a
                href="#skills"
                className="hover:text-gray-400 transition duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-gray-400 transition duration-300"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-gray-400 transition duration-300"
              >
                Experience
              </a>
              <a
                href="#education"
                className="hover:text-gray-400 transition duration-300"
              >
                Education
              </a>
              <a
                href="/contact"
                className="hover:text-gray-400 transition duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
  
          {/* Volver al inicio */}
          <div className="mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition duration-300"
            >
              Back to Top
            </button>
          </div>
  
          {/* Derechos reservados */}
          <p className="mt-6 text-sm text-gray-400">
            &copy; Last update: January 2025 by Jefferson Rodríguez <br />
            All rights reserved
          </p>
          {/* <p className="mt-6 text-sm text-gray-400">
             2025 Developed by Jefferson Rodríguez. All rights reserved.
          </p> */}
        </div>
      </footer>
    );
  };

export default Footer;
