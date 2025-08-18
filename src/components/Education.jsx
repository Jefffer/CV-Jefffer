import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaGraduationCap, FaLanguage, FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaAward, FaGlobe } from "react-icons/fa";
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-12 md:py-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-full border border-emerald-200 dark:border-emerald-700 mb-4 md:mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaGraduationCap className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs md:text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Academic Journey
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
            Education{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              & Languages
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            My academic background and linguistic skills that drive my passion for technology and global communication.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16 md:mb-20">
          {/* Timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="space-y-12 md:space-y-16">
            {educationData.map((edu, index) => (
              <EducationCard key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <LanguagesSection languages={languages} />

        {/* Floating Elements */}
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

// Education Card Component
const EducationCard = React.memo(({ edu, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 100
      }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.3 + 0.5, type: "spring", stiffness: 200 }}
      />

      {/* Card */}
      <motion.div
        className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} mt-8 md:mt-0`}
        whileHover={{ 
          y: -8,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-2xl" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header with logo and period */}
            <div className="flex items-start justify-between mb-4">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.3 + 0.3 }}
              >
                <div className="relative">
                  <img
                    src={edu.logo}
                    alt={edu.university}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl border-2 border-white dark:border-gray-700 shadow-lg bg-white"
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/50 dark:to-cyan-900/50 rounded-full border border-emerald-200 dark:border-emerald-700"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.3 + 0.6 }}
              >
                <FaCalendarAlt className="text-emerald-600 dark:text-emerald-400 w-3 h-3" />
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  {edu.period}
                </span>
              </motion.div>
            </div>

            {/* University name */}
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.3 + 0.4 }}
            >
              {edu.university}
            </motion.h3>

            {/* Degree */}
            <motion.div
              className="flex items-start gap-2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.3 + 0.5 }}
            >
              <FaAward className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                {edu.degree}
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.3 + 0.6 }}
            >
              <FaMapMarkerAlt className="text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {edu.location}
              </span>
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Flag code={edu.flag} className="w-6 h-4 rounded shadow-sm" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

// Languages Section Component
const LanguagesSection = React.memo(({ languages }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-cyan-50/50 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-cyan-900/20 rounded-3xl" />
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        {/* Header */}
        <motion.div
          className="relative z-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white shadow-lg"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGlobe className="w-6 h-6" />
            </motion.div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Languages
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Global communication skills
              </p>
            </div>
          </div>
        </motion.div>

        {/* Languages Grid */}
        <div className="relative z-10 grid gap-4 md:gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg transition-all duration-300">
                {/* Flag */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <Flag code={lang.flag} className="w-10 h-7 rounded shadow-md" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded" />
                </motion.div>

                {/* Language info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {lang.name}
                    </h4>
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-sm"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Proficiency percentage */}
                <motion.div
                  className="text-right"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                    {lang.proficiency}%
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default Education;
