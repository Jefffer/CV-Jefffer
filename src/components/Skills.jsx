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
import { LiaAws } from "react-icons/lia";
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
      name: "React", 
      icon: <FaReact className="text-5xl" />, 
      category: "Frontend",
      gradient: "from-blue-600 to-cyan-600",
      hoverGradient: "from-blue-500 to-cyan-500",
      iconColor: "text-cyan-400",
      delay: 0.65
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
      name: "AWS", 
      icon: <LiaAws className="text-5xl" />, 
      category: "Cloud",
      gradient: "from-amber-600 to-orange-700",
      hoverGradient: "from-amber-500 to-orange-600",
      iconColor: "text-amber-400",
      delay: 1.12
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
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-500 to-red-500",
      iconColor: "text-orange-400",
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

  // Componente individual de skill con estilo ciberpunk
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
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Card principal */}
        <div className={`
          relative overflow-hidden p-6 rounded-2xl transition-all duration-300
          bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80
          dark:from-slate-950/80 dark:via-black/80 dark:to-slate-950/80
          backdrop-blur-xl
          border ${isHovered ? 'border-cyan-400/50' : 'border-slate-700/30 dark:border-slate-600/30'}
          shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20
        `}>
          {/* Grid pattern interno */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgb(34 211 238) 1px, transparent 1px),
                linear-gradient(to bottom, rgb(34 211 238) 1px, transparent 1px)
              `,
              backgroundSize: '10px 10px',
            }}
          />

          {/* Esquinas ciberpunk */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-indigo-200/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-indigo-500/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-indigo-500/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-indigo-200/40" />

          {/* Línea de escaneo animada */}
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            animate={{ 
              top: isHovered ? ['0%', '100%'] : '50%',
              opacity: isHovered ? [0, 1, 0] : 0
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Categoría con efecto holográfico */}
            <motion.span 
              className="text-xs font-mono uppercase tracking-wider text-cyan-400/70 mb-3 px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20"
              animate={{ 
                boxShadow: isHovered 
                  ? ['0 0 5px rgba(34,211,238,0.3)', '0 0 15px rgba(34,211,238,0.5)', '0 0 5px rgba(34,211,238,0.3)']
                  : '0 0 0px rgba(34,211,238,0)'
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {skill.category}
            </motion.span>

            {/* Icono con efecto de rotación 3D */}
            <motion.div
              className="mb-4 text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              animate={{ 
                rotateY: isHovered ? 360 : 0,
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              {skill.icon}
            </motion.div>

            {/* Nombre con efecto glitch sutil */}
            <motion.h3
              className="text-white font-bold text-sm leading-tight font-mono"
              animate={{ 
                textShadow: isHovered 
                  ? ['0 0 10px rgba(34,211,238,0.5)', '0 0 20px rgba(168,85,247,0.5)', '0 0 10px rgba(34,211,238,0.5)']
                  : '0 0 0px transparent'
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {skill.name}
            </motion.h3>

            {/* Barra de nivel decorativa */}
            <motion.div
              className="mt-3 w-full h-1 bg-slate-700/30 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                initial={{ width: '0%' }}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      ref={containerRef}
      id="skills" 
      className="relative overflow-hidden"
    >
      {/* Fondo ciberpunk sólido */}
      <div className="absolute inset-0 bg-slate-900 dark:bg-black" />
      
      {/* Patrón de puntos en intersecciones */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgb(99 102 241) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Líneas de neón horizontales animadas sutilmente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <motion.div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{ top: '20%' }}
          animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity }}
        /> */}
        <motion.div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          style={{ top: '60%' }}
          animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          style={{ top: '85%' }}
          animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Efectos de luz ciberpunk */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" /> */}

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-24 max-w-[120ch]">
        {/* Header con estilo ciberpunk */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Badge ciberpunk */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">System.Tech_Stack</span>
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-6"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Tech
            </span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
              Arsenal
            </span>
          </motion.h2>
          
          {/* <motion.p
            className="text-lg text-cyan-100/80 dark:text-cyan-100/70 leading-relaxed max-w-2xl mx-auto tracking-wide font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-mono text-indigo-400">[</span>
            {" "}Technologies powering innovative solutions{" "}
            <span className="font-mono text-indigo-400">]</span>
          </motion.p> */}

          {/* Línea decorativa ciberpunk */}
          <motion.div
            className="mt-8 mx-auto w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
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

        {/* Stats/Summary con diseño ciberpunk */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: "27+", label: "Technologies", color: "from-cyan-500 to-blue-300", icon: "◆" },
              { number: "8+", label: "Years Experience", color: "from-purple-400 to-indigo-400", icon: "●" },
              { number: "6+", label: "Specializations", color: "from-pink-400 to-cyan-400", icon: "◇" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-slate-800/60 dark:bg-slate-950/60 backdrop-blur-xl border border-slate-700/30 dark:border-slate-600/30 group-hover:border-cyan-400/30 rounded-2xl p-6 overflow-hidden transition-colors duration-300">
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgb(34 211 238) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(34 211 238) 1px, transparent 1px)
                      `,
                      backgroundSize: '10px 10px',
                    }}
                  />

                  {/* Esquinas */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/40" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-purple-400/40" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-purple-400/40" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/40" />

                  {/* Contenido */}
                  <div className="relative">
                    {/* Icono decorativo */}
                    <motion.div
                      className="text-cyan-400/30 text-4xl font-bold mb-2"
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {stat.icon}
                    </motion.div>

                    <motion.h3 
                      className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 font-mono`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-cyan-100/60 font-light tracking-wide">{stat.label}</p>

                    {/* Barra decorativa */}
                    <motion.div
                      className="mt-3 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer decorativo */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400/50" />
            <span className="text-cyan-400/60 font-mono text-sm">[ END_OF_STACK ]</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-400/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
