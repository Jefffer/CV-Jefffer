import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Flag from "react-world-flags";
import { PiGraduationCapDuotone, PiCalendarDotsFill, PiMedalDuotone, PiMapPinLineDuotone, PiGlobeDuotone } from "react-icons/pi";

const educationData = [
  {
    university: "International University of La Rioja (UNIR)",
    logo: "https://pbs.twimg.com/profile_images/1666002917482979329/L7ZnSnEv_400x400.png",
    image: "./unir.jpg",
    degree: "Master's Degree in Software Engineering and Computer Systems",
    location: "Logroño, La Rioja",
    flag: "ES",
    period: "2024 - 2025",
  },
  {
    university: "District University Francisco José de Caldas",
    logo: "https://www.udistrital.edu.co/sites/default/files/contenido-estatico/imagenes/escudo_ud.gif",
    image: "./ud.jpg",
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
            <PiGraduationCapDuotone className="text-emerald-600 dark:text-emerald-400" />
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
            My academic background and linguistic skills.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 100
      }}
      className="group relative h-full transition-transform duration-300"
    >
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-2xl h-full transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] group-hover:border-emerald-500/30">
        
        {/* University Image Header with Creative Overlay */}
        <motion.div 
          className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Main university image */}
          <motion.img
            src={edu.image}
            alt={edu.university}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 1.2, delay: index * 0.3 + 0.2 }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-blue-500/30 z-10" />
          
          
          {/* Creative logo placement - floating in corner */}
          <motion.div
            className="absolute top-4 right-4 z-30"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0, rotate: -180, opacity: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-2 shadow-2xl border-2 border-white/50 dark:border-gray-700/50">
                <img
                  src={edu.logo}
                  alt={edu.university}
                  className="w-full h-full object-contain filter drop-shadow-lg"
                />
              </div>
              {/* Rotating glow effect */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Period badge - creative positioning */}
          <motion.div
            className="absolute bottom-4 left-4 z-30"
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: 50 }}
            transition={{ delay: index * 0.3 + 0.8 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full border border-emerald-200 dark:border-emerald-700 shadow-lg">
              <PiCalendarDotsFill className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                {edu.period}
              </span>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full z-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/10 rounded-full z-20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Content Section */}
        <div className="p-6 md:p-8 relative z-10">
          {/* University Name with creative styling */}
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.3 + 0.6 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {edu.university}
            </span>
          </motion.h3>

          {/* Degree with icon */}
          <motion.div
            className="flex items-start gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.3 + 0.7 }}
          >
            <motion.div
              className="p-2 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/50 dark:to-cyan-900/50 rounded-lg mt-0.5"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PiMedalDuotone className="text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed flex-1">
              {edu.degree}
            </p>
          </motion.div>

          {/* Location with flag */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.3 + 0.8 }}
          >
            <motion.div
              className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PiMapPinLineDuotone className="text-gray-600 dark:text-gray-400 w-4 h-4" />
            </motion.div>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium flex-1">
              {edu.location}
            </span>
            <motion.div
              whileHover={{ rotate: 12, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <Flag code={edu.flag} className="w-8 h-6 rounded shadow-lg border border-white/50" />
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded opacity-0 group-hover:opacity-30 blur transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="mt-6 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.3 + 1 }}
          />
        </div>
      </div>
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
              <PiGlobeDuotone className="w-6 h-6" />
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
