import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaHeart,
  FaRegCopy,
  FaGithub
} from "react-icons/fa";
import { PiLinkedinLogoFill,
  PiGithubLogoFill ,
  PiMapPinLineFill ,
  PiMailboxFill ,
  PiDownloadFill ,
 } from "react-icons/pi";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = monthNames[new Date().getMonth()];

  const socialLinks = [
    {
      icon: <PiGithubLogoFill />,
      href: "https://github.com/Jefffer",
      label: "GitHub",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      icon: <PiLinkedinLogoFill />,
      href: "https://www.linkedin.com/in/jefffer/",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: <PiMailboxFill />,
      href: "mailto:jefre123@hotmail.com",
      label: "Email",
      color: "hover:text-emerald-600 dark:hover:text-emerald-400",
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/profile", label: "Profile" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-6 text-gray-100 dark:text-gray-800"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current"
          ></path>
        </svg>
      </div>

      <div className="relative pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Brand & Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                  >
                    <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Jefferson Rodríguez
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Senior .NET Developer specializing in full-stack development,
                      cloud solutions, and AI integration.
                    </p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <PiMapPinLineFill className="text-xs text-gray-500 dark:text-gray-500" />
                      <span>Bilbao, Spain</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PiMailboxFill className="text-xs text-gray-500 dark:text-gray-500" />
                      <a
                      href="mailto:jefre123@hotmail.com"
                      className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                      jefre123@hotmail.com 
                      </a>
                      <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText("jefre123@hotmail.com");
                      }}
                      className="p-1 hover:bg-gray-600 hover:text-gray-300 transition-colors"
                      title="Copy email"
                      >
                      <FaRegCopy className="text-xs" />
                      </button>
                    </div>
                    </div>
                  </motion.div>

                  {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Resources & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Resources
              </h4>

              {/* Download Links */}
              <div className="space-y-2">
                <a
                  href="/cv-en.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <PiDownloadFill className="text-xs group-hover:translate-y-0.5 transition-transform" />
                  <span>Download CV (English)</span>
                </a>
                <a
                  href="/cv-es.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <PiDownloadFill className="text-xs group-hover:translate-y-0.5 transition-transform" />
                  <span>Descargar CV (Español)</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-500 dark:text-gray-400 ${social.color} transition-all`}
                      whileHover={{ y: -2, scale: 1.5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="hidden md:inline">Built with</span>
                <FaHeart className="text-red-500 text-xs animate-pulse hidden md:inline" />
                <span className="hidden md:inline">
                  using React & Tailwind CSS. By
                </span>
                 <a
    href="https://github.com/Jefffer"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 ml-0 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200 group"
  >
    <span>Jeffer</span>
    <FaGithub className="text-xs group-hover:scale-110 transition-transform" />
  </a>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-200 hover:shadow-md"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Back to top</span>
                <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>

            {/* Last Update Info */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Last updated: {currentMonth} {currentYear} • Made with passion
                in Bilbao, Spain {' '}
                <Flag
                  code="ES"
                  className="w-5 h-4 inline-block"
                />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
