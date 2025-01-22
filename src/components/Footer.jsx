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

  const Footer = () => {
    return (
      <footer className="p-6 bg-gray-800 text-white text-center">
        <p>Follow me on:</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/tu-usuario" className="hover:text-gray-400">
            <FaGithub className="text-4xl" />
          </a>
          <a href="https://linkedin.com/in/tu-perfil" className="hover:text-gray-400">
            <FaLinkedin className="text-4xl" /> 
          </a>
          <a href="https://github.com/tu-usuario" className="hover:text-gray-400">
            <RiInstagramFill className="text-4xl" />
          </a>
        </div>
        <p className="mt-4">&copy; 2025 Jefferson Rodríguez. All rights reserved.</p>
      </footer>
    );
  };

export default Footer;
