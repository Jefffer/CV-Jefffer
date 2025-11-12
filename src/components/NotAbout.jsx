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
  PiFileCSharpFill,
  PiOpenAiLogo,
  PiFilePdfFill,
  PiDownloadSimpleBold,
  PiArrowRightBold
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
    { Icon: PiOpenAiLogo, color: "text-black-400" },
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
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* Botón CV en inglés - Diseño Moderno */}
          <motion.a
            href="/cv-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden"
            whileTap={{ scale: 0.97 }}
          >
            {/* Fondo con gradiente */}
            <div className="relative px-6 py-3 rounded-full border-2 border-blue-500/30 dark:border-blue-400/30 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-purple-500/20 backdrop-blur-sm overflow-hidden">
              {/* Efecto de relleno animado de izquierda a derecha */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

              {/* Contenido del botón */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                {/* Bandera UK */}
                <div className="relative z-10">
                  <Flag code="GB" className="h-6 rounded shadow-md" />
                </div>

                {/* Contenedor de texto con animación */}
                <div className="relative h-12 w-20 flex items-center overflow-hidden">
                  {/* Texto original - sube y desaparece en hover */}
                  <div className="absolute inset-0 flex flex-col items-start justify-center group-hover:translate-y-[-50px] group-hover:opacity-0 transition-all duration-300 ease-in-out">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      English
                    </span>
                    <span className="text-lg font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap">
                      View CV
                    </span>
                  </div>

                  {/* Texto hover - aparece desde abajo */}
                  <div className="absolute inset-0 flex flex-col items-start justify-center translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <span className="text-xs font-medium dark:text-white/90 whitespace-nowrap">
                      English
                    </span>
                    <span className="text-lg font-bold dark:text-white whitespace-nowrap">
                      View CV
                    </span>
                  </div>
                </div>

                {/* Flecha sin animación */}
                <div className="relative z-10 text-blue-600 dark:text-blue-400">
                  <PiArrowRightBold className="text-xl" />
                </div>
              </div>
            </div>
          </motion.a>

          {/* Botón CV en español - Diseño Moderno */}
          <motion.a
            href="/cv-es.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden"
            whileTap={{ scale: 0.97 }}
          >
            {/* Fondo con gradiente */}
            <div className="relative px-6 py-3 rounded-full border-2 border-orange-500/30 dark:border-orange-400/30 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10 dark:from-orange-500/20 dark:via-red-500/10 dark:to-yellow-500/20 backdrop-blur-sm overflow-hidden">
              {/* Efecto de relleno animado de izquierda a derecha */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

              {/* Contenido del botón */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                {/* Bandera España */}
                <div className="relative z-10">
                  <Flag code="ES" className="h-6 rounded shadow-md" />
                </div>

                {/* Contenedor de texto con animación */}
                <div className="relative h-12 w-20 flex items-center overflow-hidden">
                  {/* Texto original - sube y desaparece en hover */}
                  <div className="absolute inset-0 flex flex-col items-start justify-center group-hover:translate-y-[-50px] group-hover:opacity-0 transition-all duration-300 ease-in-out">
                    <span className="text-xs font-medium text-orange-600 dark:text-orange-400 whitespace-nowrap">
                      Español
                    </span>
                    <span className="text-lg font-bold text-orange-700 dark:text-orange-300 whitespace-nowrap">
                      Ver CV
                    </span>
                  </div>

                  {/* Texto hover - aparece desde abajo */}
                  <div className="absolute inset-0 flex flex-col items-start justify-center translate-y-[50px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <span className="text-xs font-medium dark:text-white/90 whitespace-nowrap">
                      Español
                    </span>
                    <span className="text-lg font-bold dark:text-white whitespace-nowrap">
                      Ver CV
                    </span>
                  </div>
                </div>

                {/* Flecha sin animación */}
                <div className="relative z-10 text-orange-600 dark:text-orange-400">
                  <PiArrowRightBold className="text-xl" />
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Sección de habilidades */}
      <div ref={containerRef} className="w-full mt-20 relative">
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
