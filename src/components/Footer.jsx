import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          {/* Redes sociales */}
          <p className="text-lg font-semibold">Follow me on:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Jefffer"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/jefffer/"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://instagram.com/vida__triste"
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
            <Link
                to="/"
                className="hover:text-gray-400 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="hover:text-gray-400 transition duration-300"
              >
                Profile
              </Link>
              <Link
                to="/about"
                className="hover:text-gray-400 transition duration-300"
              >
                About Me
              </Link>
              <Link
                to="/projects"
                className="hover:text-gray-400 transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className="hover:text-gray-400 transition duration-300"
              >
                Experience
              </Link>
              <Link
                to="/education"
                className="hover:text-gray-400 transition duration-300"
              >
                Education
              </Link>
              <Link
                to="/contact"
                className="hover:text-gray-400 transition duration-300"
              >
                Get In Touch
              </Link>
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
  
          <p className="mt-6 text-sm text-gray-400">
            Last update: July 2025. Developed by Jefferson Rodríguez <br />
          </p>         
        </div>
      </footer>
    );
  };

export default Footer;
