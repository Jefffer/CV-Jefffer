import React, { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { FaJsSquare, FaReact, FaDatabase, FaMicrosoft, FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhp,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaDotCircle,
  FaDocker
  } from 'react-icons/fa';

  import {    
    SiKotlin,    
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiPhpmyadmin, 
    SiDotnet,
    SiKubernetes,
    SiSpring,
    SiRabbitmq,
    SiElasticsearch
  } from "react-icons/si";
  import { DiMsqlServer, DiDotnet } from "react-icons/di";

  import { PiFileCSharpFill, PiMathOperationsFill  } from "react-icons/pi";

  import { VscAzureDevops } from "react-icons/vsc";

const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 });

  const skills = [
    { 
      name: ".Net Core", 
      icon: <SiDotnet className="text-5xl" />, 
      category: "Backend",
      gradient: "from-purple-600 to-purple-800",
      hoverGradient: "from-purple-500 to-purple-700",
      iconColor: "text-purple-400",
      delay: 0.1
    },
    { 
      name: ".Net Framework", 
      icon: <DiDotnet className="text-5xl" />, 
      category: "Backend",
      gradient: "from-sky-600 to-sky-800",
      hoverGradient: "from-sky-500 to-sky-700",
      iconColor: "text-sky-400",
      delay: 0.15
    },
    { 
      name: "C#", 
      icon: <PiFileCSharpFill className="text-5xl" />, 
      category: "Language",
      gradient: "from-blue-600 to-blue-800",
      hoverGradient: "from-blue-500 to-blue-700",
      iconColor: "text-blue-400",
      delay: 0.2
    },
    { 
      name: "SQL Server", 
      icon: <DiMsqlServer className="text-5xl" />, 
      category: "Database",
      gradient: "from-red-600 to-red-800",
      hoverGradient: "from-red-500 to-red-700",
      iconColor: "text-red-400",
      delay: 0.25
    },
    { 
      name: "Azure", 
      icon: <VscAzureDevops className="text-5xl" />, 
      category: "Cloud",
      gradient: "from-indigo-600 to-indigo-800",
      hoverGradient: "from-indigo-500 to-indigo-700",
      iconColor: "text-indigo-400",
      delay: 0.3
    },
    { 
      name: "Python", 
      icon: <FaPython className="text-5xl" />, 
      category: "Language",
      gradient: "from-yellow-600 to-yellow-800",
      hoverGradient: "from-yellow-500 to-yellow-700",
      iconColor: "text-yellow-400",
      delay: 0.35
    },
    { 
      name: "Java", 
      icon: <FaJava className="text-5xl" />, 
      category: "Language",
      gradient: "from-orange-600 to-orange-800",
      hoverGradient: "from-orange-500 to-orange-700",
      iconColor: "text-orange-400",
      delay: 0.4
    },
    { 
      name: "Spring Boot", 
      icon: <SiSpring className="text-5xl" />, 
      category: "Framework",
      gradient: "from-green-600 to-emerald-700",
      hoverGradient: "from-green-500 to-emerald-600",
      iconColor: "text-green-400",
      delay: 0.45
    },
    { 
      name: "Docker", 
      icon: <FaDocker className="text-5xl" />, 
      category: "DevOps",
      gradient: "from-cyan-600 to-cyan-800",
      hoverGradient: "from-cyan-500 to-cyan-700",
      iconColor: "text-cyan-400",
      delay: 0.5
    },
    { 
      name: "Kubernetes", 
      icon: <SiKubernetes className="text-5xl" />, 
      category: "DevOps",
      gradient: "from-blue-600 to-indigo-800",
      hoverGradient: "from-blue-500 to-indigo-700",
      iconColor: "text-blue-400",
      delay: 0.55
    },
    { 
      name: "PHP", 
      icon: <FaPhp className="text-5xl" />, 
      category: "Language",
      gradient: "from-violet-600 to-violet-800",
      hoverGradient: "from-violet-500 to-violet-700",
      iconColor: "text-violet-400",
      delay: 0.6
    },
    { 
      name: "React", 
      icon: <FaReact className="text-5xl" />, 
      category: "Frontend",
      gradient: "from-blue-600 to-cyan-600",
      hoverGradient: "from-blue-500 to-cyan-500",
      iconColor: "text-cyan-400",
      delay: 0.65
    },
    { 
      name: "JavaScript", 
      icon: <FaJsSquare className="text-5xl" />, 
      category: "Language",
      gradient: "from-yellow-600 to-amber-600",
      hoverGradient: "from-yellow-500 to-amber-500",
      iconColor: "text-yellow-400",
      delay: 0.7
    },
    { 
      name: "HTML 5", 
      icon: <FaHtml5 className="text-5xl" />, 
      category: "Frontend",
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-500 to-red-500",
      iconColor: "text-orange-400",
      delay: 0.65
    },
    { 
      name: "CSS", 
      icon: <FaCss3Alt className="text-5xl" />, 
      category: "Frontend",
      gradient: "from-blue-600 to-blue-800",
      hoverGradient: "from-blue-500 to-blue-700",
      iconColor: "text-blue-400",
      delay: 0.7
    },
    { 
      name: "Angular", 
      icon: <FaAngular className="text-5xl" />, 
      category: "Frontend",
      gradient: "from-red-600 to-red-800",
      hoverGradient: "from-red-500 to-red-700",
      iconColor: "text-red-400",
      delay: 0.75
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs className="text-5xl" />, 
      category: "Backend",
      gradient: "from-green-600 to-green-800",
      hoverGradient: "from-green-500 to-green-700",
      iconColor: "text-green-400",
      delay: 0.8
    },
    { 
      name: "MySQL", 
      icon: <SiMysql className="text-5xl" />, 
      category: "Database",
      gradient: "from-teal-600 to-teal-800",
      hoverGradient: "from-teal-500 to-teal-700",
      iconColor: "text-teal-400",
      delay: 0.85
    },
    { 
      name: "PostgreSQL", 
      icon: <SiPostgresql className="text-5xl" />, 
      category: "Database",
      gradient: "from-blue-700 to-indigo-800",
      hoverGradient: "from-blue-600 to-indigo-700",
      iconColor: "text-blue-400",
      delay: 0.9
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="text-5xl" />, 
      category: "Database",
      gradient: "from-green-600 to-emerald-800",
      hoverGradient: "from-green-500 to-emerald-700",
      iconColor: "text-green-400",
      delay: 0.95
    },
    { 
      name: "Kotlin", 
      icon: <SiKotlin className="text-5xl" />, 
      category: "Language",
      gradient: "from-purple-600 to-pink-600",
      hoverGradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
      delay: 1.0
    },
    { 
      name: "OutSystems", 
      icon: <FaDotCircle className="text-5xl" />, 
      category: "Platform",
      gradient: "from-red-600 to-rose-800",
      hoverGradient: "from-red-500 to-rose-700",
      iconColor: "text-red-400",
      delay: 1.05
    },
    { 
      name: "MATLAB", 
      icon: <PiMathOperationsFill className="text-5xl" />, 
      category: "Tool",
      gradient: "from-blue-600 to-indigo-600",
      hoverGradient: "from-blue-500 to-indigo-500",
      iconColor: "text-blue-400",
      delay: 1.1
    },
    { 
      name: "phpMyAdmin", 
      icon: <SiPhpmyadmin className="text-5xl" />, 
      category: "Tool",
      gradient: "from-green-600 to-teal-600",
      hoverGradient: "from-green-500 to-teal-500",
      iconColor: "text-green-400",
      delay: 1.15
    },
    { 
      name: "RabbitMQ", 
      icon: <SiRabbitmq className="text-5xl" />, 
      category: "Message Broker",
      gradient: "from-orange-600 to-amber-700",
      hoverGradient: "from-orange-500 to-amber-600",
      iconColor: "text-orange-400",
      delay: 1.3
    },
    { 
      name: "Elasticsearch", 
      icon: <SiElasticsearch className="text-5xl" />, 
      category: "Search Engine",
      gradient: "from-yellow-600 to-yellow-800",
      hoverGradient: "from-yellow-500 to-yellow-700",
      iconColor: "text-yellow-400",
      delay: 1.35
    },
  ];

  // Componente para partículas flotantes
  const FloatingParticles = () => {
    const particles = Array.from({ length: 12 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    );
  };

  // Componente individual de skill
  const SkillCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ 
          duration: 0.6, 
          delay: skill.delay,
          type: "spring",
          stiffness: 100
        }}
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          z: 50
        }}
        style={{ perspective: 1000 }}
      >
        {/* Fondo principal con gradiente */}
        <div className={`
          relative overflow-hidden p-6 rounded-2xl transition-all duration-300
          bg-gradient-to-br ${isHovered ? skill.hoverGradient : skill.gradient}
          dark:bg-gradient-to-br dark:${isHovered ? skill.hoverGradient : skill.gradient}
          shadow-lg hover:shadow-2xl hover:shadow-current/20
          border border-white/20 dark:border-white/10
        `}>
          {/* Efectos de fondo */}
          <div className="absolute inset-0 bg-white/5 dark:bg-white/5" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Brillo animado */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: isHovered ? '100%' : '-100%', opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Categoría */}
            <motion.span 
              className="text-xs font-medium text-white/70 dark:text-white/60 mb-2 px-2 py-1 bg-white/10 rounded-full"
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {skill.category}
            </motion.span>

            {/* Icono */}
            <motion.div
              className={`mb-3 ${skill.iconColor} drop-shadow-lg`}
              animate={{ 
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              {skill.icon}
            </motion.div>

            {/* Nombre */}
            <motion.h3
              className="text-white dark:text-white font-bold text-sm leading-tight"
              animate={{ y: isHovered ? -3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {skill.name}
            </motion.h3>
          </div>

          {/* Borde animado */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative min-h-screen py-20 overflow-hidden"
    >
      
      {/* Partículas flotantes */}
      <FloatingParticles />

      <div className="relative z-10 container mx-auto px-6 max-w-[120ch]">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-6"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Tech
            </span>{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300/90 leading-relaxed max-w-2xl mx-auto tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            These are the technologies, languages and tools I am proficient in.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Stats/Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "26+", label: "Technologies", color: "from-blue-600 to-cyan-600" },
              { number: "8+", label: "Years Experience", color: "from-purple-600 to-pink-600" },
              { number: "6+", label: "Specializations", color: "from-emerald-600 to-teal-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl p-6"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent dark:from-white/5 dark:to-transparent rounded-2xl" />
                <div className="relative">
                  <motion.h3 
                    className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
