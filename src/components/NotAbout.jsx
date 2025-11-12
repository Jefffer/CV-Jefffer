import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  PiEyesFill,
  PiCodeDuotone,
  PiCloudDuotone,
  PiDatabaseDuotone,
  PiUsersDuotone,
  PiBrainDuotone,
  PiPaletteDuotone,
  PiFileCSharpFill
} from "react-icons/pi";
import { LiaHandPointDownSolid, LiaHandPointDown, LiaAws } from "react-icons/lia";
import {
  SiDotnet, 
  SiReact, 
  SiAngular, 
  SiJavascript,
  SiDocker, 
  SiKubernetes, 
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiSpringboot,
  SiNodedotjs,
  SiGraphql,
  SiKotlin,
  SiGit,
  SiGooglegemini
} from "react-icons/si";
import { TbBrandReactNative, TbApi, TbCloud, TbRobot } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { FaJava } from 'react-icons/fa';
import { DiMsqlServer, DiDotnet } from "react-icons/di";

import Flag from "react-world-flags";

// Iconos de tecnologías por categoría de habilidad
const techIcons = {
  backend: [
    { Icon: PiFileCSharpFill, color: "text-purple-400" },
    { Icon: SiDotnet, color: "text-purple-400" },
    { Icon: DiDotnet, color: "text-sky-400" },
    { Icon: FaJava, color: "text-orange-400" },
    { Icon: SiPython, color: "text-yellow-400" },
    { Icon: SiSpringboot, color: "text-green-400" },
    { Icon: DiMsqlServer, color: "text-red-400" },
  ],
  frontend: [
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiAngular, color: "text-red-500" },
    { Icon: SiJavascript, color: "text-yellow-300" },
    { Icon: TbBrandReactNative, color: "text-blue-400" },
    { Icon: TbApi, color: "text-pink-400" },
  ],
  devops: [
    { Icon: SiDocker, color: "text-blue-400" },
    { Icon: SiKubernetes, color: "text-blue-500" },
    { Icon: VscAzureDevops, color: "text-cyan-400" },
    { Icon: TbCloud, color: "text-indigo-400" },
    { Icon: LiaAws, color: "text-orange-400" },
    { Icon: SiGit, color: "text-orange-500" },
  ],
  database: [
    { Icon: DiMsqlServer, color: "text-red-400" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: SiPostgresql, color: "text-blue-400" },
    { Icon: SiMysql, color: "text-blue-500" },
  ],
  agile: [
    { Icon: VscAzureDevops, color: "text-cyan-400" },
    { Icon: SiGit, color: "text-orange-500" },
    { Icon: TbApi, color: "text-purple-400" },
  ],
  ai: [
    { Icon: TbRobot, color: "text-pink-400" },
    { Icon: SiPython, color: "text-yellow-400" },
    { Icon: TbApi, color: "text-fuchsia-400" },
    { Icon: SiGooglegemini, color: "text-blue-400" },
  ],
};

const skills = [
  {
    title: "Software Design & Backend Development",
    description: "Expertise in C#, .NET, Java, Python, PHP",
    image: "./backend2.webp",
    icon: <PiCodeDuotone className="text-4xl" />,
    gradient: "from-blue-300 via-purple-400 to-indigo-500",
    color: "text-blue-400",
    techCategory: "backend",
  },
  {
    title: "Frontend Development",
    description: "Building modern UIs with React, Angular, and more",
    image: "./frontend2.webp",
    icon: <PiPaletteDuotone className="text-4xl" />,
    gradient: "from-red-500 via-orange-500 to-amber-400",
    color: "text-pink-400",
    techCategory: "frontend",
  },
  {
    title: "DevOps & Cloud",
    description: "Experience with Docker, Kubernetes, Azure DevOps, AWS (ECS, EC2, S3)",
    image: "./devops2.webp",
    icon: <PiCloudDuotone className="text-4xl" />,
    gradient: "from-cyan-300 via-teal-300 to-emerald-400",
    color: "text-cyan-400",
    techCategory: "devops",
  },
  {
    title: "Database Management",
    description: "SQL, MySQL, PostgreSQL, NoSQL, MongoDB",
    image: "./database4.webp",
    icon: <PiDatabaseDuotone className="text-4xl" />,
    gradient: "from-emerald-400 via-green-400 to-lime-400",
    color: "text-emerald-400",
    techCategory: "database",
  },
  {
    title: "Agile Methodologies",
    description: "Scrum, Kanban, Git, and Azure DevOps",
    image: "./agile2.webp",
    icon: <PiUsersDuotone className="text-4xl" />,
    gradient: "from-purple-400 via-violet-500 to-indigo-300",
    color: "text-purple-400",
    techCategory: "agile",
  },
  {
    title: "Artificial Intelligence & Automation",
    description:
      "Machine Learning, Neural Networks, Make, Prompt Engineering and GPT-3 models",
    image: "./ia1.webp",
    icon: <PiBrainDuotone className="text-4xl" />,
    gradient: "from-fuchsia-200 via-pink-300 to-rose-400",
    color: "text-orange-400",
    techCategory: "ai",
  },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Componente individual para cada skill con animaciones avanzadas
  const SkillSection = ({ skill, index }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
      threshold: 0.3,
      margin: "-100px",
    });

    const { scrollYProgress: sectionProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(sectionProgress, [0, 1], [100, -100]);
    const scale = useTransform(sectionProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(
      sectionProgress,
      [0, 0.2, 0.8, 1],
      [0, 1, 1, 0]
    );
    const imageScale = useTransform(
      sectionProgress,
      [0, 0.5, 1],
      [1.2, 1, 1.2]
    );
    const rotate = useTransform(
      sectionProgress,
      [0, 1],
      [index % 2 === 0 ? -5 : 5, index % 2 === 0 ? 5 : -5]
    );

    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={sectionRef}
        className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden"
        style={{ y, scale, opacity }}
      >
        {/* Imagen de fondo con parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale: imageScale }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />
          <motion.img
            src={skill.image}
            alt={skill.title}
            className="w-full h-full object-cover"
            style={{ rotate }}
          />
        </motion.div>

        {/* Efectos de partículas con iconos de tecnologías */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          {techIcons[skill.techCategory].map((tech, i) => {
            const IconComponent = tech.Icon;
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 3;
            const randomDuration = 4 + Math.random() * 3;
            
            return (
              <motion.div
                key={i}
                className={`absolute ${tech.color}`}
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  opacity: 0.3,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeInOut",
                }}
              >
                <IconComponent className="text-xl md:text-2xl drop-shadow-lg" />
              </motion.div>
            );
          })}
          
          {/* Partículas adicionales más sutiles para llenar espacio */}
          {[...Array(8)].map((_, i) => {
            const randomIcon = techIcons[skill.techCategory][i % techIcons[skill.techCategory].length];
            const IconComponent = randomIcon.Icon;
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 2;
            
            return (
              <motion.div
                key={`extra-${i}`}
                className={`absolute ${randomIcon.color}`}
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  opacity: 0.15,
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.1, 0.25, 0.1],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeInOut",
                }}
              >
                <IconComponent className="text-base md:text-lg" />
              </motion.div>
            );
          })}
        </div>

        {/* Contenido principal */}
        <motion.div
          className={`relative z-30 w-full max-w-7xl mx-auto px-6 flex items-center ${
            isEven ? "justify-start" : "justify-end"
          }`}
          initial={{ x: isEven ? -100 : 100, opacity: 0 }}
          animate={
            isInView
              ? { x: 0, opacity: 1 }
              : { x: isEven ? -100 : 100, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={`max-w-lg ${isEven ? "text-left" : "text-right"}`}>
            {/* Icono flotante */}
            <motion.div
              className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.gradient} text-white mb-6 shadow-2xl`}
              animate={
                isInView
                  ? {
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{
                rotateY: { duration: 2, repeat: Infinity, repeatDelay: 3 },
                scale: { duration: 1, repeat: Infinity, repeatType: "reverse" },
              }}
            >
              {skill.icon}
            </motion.div>

            {/* Título con efecto de texto */}
            <motion.h3
              className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span
                className={`bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
              >
                {skill.title}
              </span>
            </motion.h3>

            {/* Descripción */}
            <motion.p
              className="text-xl text-gray-200 leading-relaxed mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {skill.description}
            </motion.p>

            {/* Línea decorativa animada */}
            <motion.div
              className={`h-1 bg-gradient-to-r ${skill.gradient} rounded-full`}
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Número de índice grande */}
            <motion.div
              className={`absolute ${
                isEven ? "-right-20" : "-left-20"
              } top-1/2 -translate-y-1/2 opacity-40`}
              initial={{ scale: 0, rotate: -45 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }
              }
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className={`text-9xl font-black ${skill.color}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Efectos de borde glassmorphism */}
        <div className="absolute inset-0 z-25 border border-white/10 pointer-events-none" />

        {/* Brillo lateral */}
        <motion.div
          className={`absolute ${
            isEven ? "left-0" : "right-0"
          } top-0 w-1 h-full bg-gradient-to-b ${skill.gradient} opacity-60`}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    );
  };
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      {/* Introducción */}
      <motion.p
        className="text-xl text-indigo-500 dark:text-gray-300 text-center mt-14 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hi there! I'm a{" "}
        {/* <strong className="font-semibold">Software Developer</strong> */}
        <span className="font-bold bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Software Developer
        </span>{" "}
        with{" "}
        {/* <strong className="font-semibold">8 years of experience</strong> */}
        <span className="font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
          8+ years of experience
        </span>{" "}
        currently living in{" "}
        {/* <strong className="font-semibold">Bilbao</strong>{" "} */}
        <span className="font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Bilbao
        </span>{" "}
        <Flag
          code="ES"
          className="w-8 h-6 inline-block transition-transform transform hover:rotate-12"
        />
        {/* <br /> */}
        {/* I am passionate about creating robust, scalable, and efficient software solutions. */}
        <span className="text-lg text-indigo-500/90 dark:text-gray-300/90 mt-2 block">
          I am passionate about creating robust, scalable, and efficient
          software solutions.
        </span>
      </motion.p>

      {/* Botones de descarga mejorados */}
      <div className="relative flex flex-col items-center mt-10">
        {/* Texto animado de llamada a la acción */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {/* <HiOutlineSparkles className="text-indigo-600 dark:text-indigo-400" /> */}
            </motion.div>
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Click to view my CV
            </span>
            <motion.div
              animate={{
                x: [0, 3, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <LiaHandPointDownSolid className="text-indigo-600 dark:text-indigo-400 text-base" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contenedor de botones mejorado */}
        <motion.div
          className="flex justify-center gap-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Botón CV en inglés */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />

            <a
              href="/cv-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center font-semibold gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl transition-all duration-300 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Brillo animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="relative flex items-center gap-3"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <PiEyesFill className="transition-transform transform group-hover:scale-110 -scale-x-100" />
                <span>View CV</span>
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </a>
          </motion.div>

          {/* Botón CV en español */}
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />

            <a
              href="/cv-es.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex items-center justify-center font-semibold gap-3 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl transition-all duration-300 hover:from-gray-600 hover:to-gray-800 shadow-lg hover:shadow-xl overflow-hidden"
            >
              {/* Brillo animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              <motion.div
                className="relative flex items-center gap-3"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <PiEyesFill className="transition-transform transform group-hover:scale-110 -scale-x-100" />
                <span>Ver CV</span>
                <motion.div
                  className="w-2 h-2 bg-orange-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Sección de habilidades */}
      <div ref={containerRef} className="w-full mt-20 relative">
        {/* Indicador de progreso */}
        <motion.div
          className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full border-2 border-white/30 backdrop-blur-sm"
                whileHover={{ scale: 1.5 }}
                style={{
                  background: `linear-gradient(45deg, ${skill.gradient
                    .replace("from-", "")
                    .replace(" via-", ", ")
                    .replace(" to-", ", ")})`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Skills sections */}
        {skills.map((skill, index) => (
          <SkillSection key={index} skill={skill} index={index} />
        ))}

        {/* Separador final elegante */}
        <motion.div
          className="w-full h-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
