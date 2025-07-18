import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaRocket,
  FaCode,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
import { 
  HiOutlineSparkles, 
  HiOutlineLightningBolt,
  HiOutlineChat,
  HiOutlineMail
} from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_2j4ig4n",
        "template_vcmt7eb",
        form.current,
        "HBocGiWPceGhGPSWU"
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
          setIsLoading(false);
        },
        (error) => {
          setStatus("error");
          setIsLoading(false);
        }
      );
  };

  // Datos de contacto
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Bilbao, Spain",
      link: null,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "jefre123@hotmail.com",
      link: "mailto:jefre123@hotmail.com",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      label: "Phone",
      value: "+34 646 217 559",
      link: "tel:+34646217559",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "@Jefffer",
      link: "https://github.com/Jefffer",
      gradient: "from-gray-900 to-black dark:from-gray-800 dark:to-gray-900",
      bgGradient: "from-gray-900/10 to-black/10",
      iconColor: "text-white"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "jefffer",
      link: "https://www.linkedin.com/in/jefffer/",
      gradient: "from-blue-600 to-blue-800",
      bgGradient: "from-blue-600/10 to-blue-800/10"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6 max-w-[120ch]">
        {/* Header Hero */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <HiOutlineSparkles className="text-indigo-500 dark:text-indigo-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Let's create something amazing together
            </span>
          </motion.div>

          <motion.h2 
            className="text-7xl md:text-8xl font-black mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Let's
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: <FaRocket />, text: "Remote Ready" },
              { icon: <FaCode />, text: "8+ Years Experience" },
              { icon: <FaLightbulb />, text: "Creative Solutions" },
              { icon: <FaHeart />, text: "Passionate Developer" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base">{item.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contenedor original con huecos */}
          <div className="relative flex justify-center items-center mb-12">
            {/* Contenedor principal con "agujeros" */}
            <motion.div
              className="relative bg-indigo-300 dark:bg-indigo-900 py-10 ml-12 mr-8 pl-16 pr-5 dark:text-gray-300 font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {/* "Agujeros" en el fondo */}
              <div className="absolute w-10 h-10 bg-gray-100 top-16 left-0 z-0 dark:bg-indigo-950"></div>
              <div className="absolute w-6 h-6 bg-gray-100 top-26 left-10 dark:bg-indigo-950"></div>
              <div className="absolute w-3 h-3 bg-gray-100 top-7 left-16 dark:bg-indigo-950"></div>
              <div className="absolute w-5 h-5 bg-gray-100 top-1/4 right-1/3 z-0 dark:bg-indigo-950"></div>
              <div className="absolute w-5 h-12 bg-gray-100 bottom-0 right-0 dark:bg-indigo-950"></div>
              <div className="absolute w-16 h-5 bg-gray-100 bottom-16 right-20 dark:bg-indigo-950"></div>
              
              <p className="m-0 text-base text-gray-950 dark:text-gray-300 z-10 relative">
                I'm always excited about new opportunities and collaborations. Whether it's a challenging project, 
                a remote position, or an opportunity that requires relocation, I'm ready to bring my passion 
                and expertise to create exceptional digital experiences.
              </p>
            </motion.div>

            {/* Piezas faltantes a los lados */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-11 h-11 bg-indigo-300 dark:bg-indigo-900"></div>
            <div className="absolute top-1/3 -translate-y-1/2 right-0 w-5 h-16 bg-indigo-300 dark:bg-indigo-900"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-indigo-300 dark:bg-indigo-900"></div>
          </div>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {contactInfo.map((item, index) => {
            const isClickable = item.link && (item.label === 'GitHub' || item.label === 'LinkedIn');
            const CardWrapper = isClickable ? 'a' : 'div';
            const cardProps = isClickable ? {
              href: item.link,
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {};

            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <CardWrapper
                  {...cardProps}
                  className={`
                    relative p-6 rounded-2xl transition-all duration-300 block
                    bg-white/40 dark:bg-white/5 backdrop-blur-lg
                    border border-white/20 dark:border-white/10
                    hover:bg-white/60 dark:hover:bg-white/10
                    hover:shadow-2xl hover:shadow-current/10
                    overflow-hidden
                    ${isClickable ? 'cursor-pointer' : ''}
                  `}
                >
                  {/* Fondo con gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Brillo animado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Icono */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.gradient} ${item.iconColor || 'text-white'} mb-4 shadow-lg`}
                      whileHover={{ rotateY: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Label */}
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                      {item.label}
                    </p>

                    {/* Value */}
                    {item.link && !isClickable ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-gray-700 dark:text-gray-300 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        {item.value}
                      </p>
                    )}
                  </div>

                  {/* Borde animado */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/30 dark:border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 dark:from-purple-400/5 dark:via-pink-400/5 dark:to-blue-400/5" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Form Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
                  <HiOutlineChat className="text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Send me a message
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Ready to start a project?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Let's discuss your ideas and make them reality
                </p>
              </motion.div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-4 bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.9 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-4 bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 2.0 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-4 bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 2.1 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Brillo animado */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%', opacity: 0 }}
                      whileHover={{ x: '100%', opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-200" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                {status && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-xl text-center font-medium ${
                      status === 'success'
                        ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                        : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                    }`}
                  >
                    {status === 'success' 
                      ? '🎉 Message sent successfully! I\'ll get back to you soon.' 
                      : '😔 Something went wrong. Please try again or contact me directly.'
                    }
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <HiOutlineLightningBolt className="text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              Usually responds within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
