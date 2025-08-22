import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaStar,
  FaJava,
  FaBrain,
  FaRobot,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiDotnet,
  SiReact,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiAndroid,
  SiGit,
  SiOpenai,
  SiMake,
} from "react-icons/si";
import { PiUserDuotone, PiWindowsLogoFill, PiGraduationCapFill, PiChartLineUp, PiNewspaperFill } from "react-icons/pi";

import { VscAzureDevops } from "react-icons/vsc";
import { PiFileCSharpFill } from "react-icons/pi";

const techStackData = [
  {
    category: "Languages & Frameworks",
    icon: <FaCode />,
    color: "from-blue-500 to-indigo-600",
    bgColor:
      "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    skills: [
      { name: "C#", icon: <PiFileCSharpFill /> },
      { name: ".NET Core", icon: <SiDotnet /> },
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "Android", icon: <SiAndroid /> },
    ],
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    color: "from-emerald-500 to-teal-600",
    bgColor:
      "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    skills: [
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: <FaCloud />,
    color: "from-cyan-500 to-blue-500",
    bgColor:
      "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    skills: [
      { name: "Azure", icon: <VscAzureDevops /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <SiAmazonwebservices /> },
    ],
  },
  {
    category: "AI & Automation",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-600",
    bgColor:
      "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    skills: [
      { name: "MCP Servers", icon: <FaRobot /> },
      { name: "LLMs Integration", icon: <SiOpenai /> },
      { name: "Make.com", icon: <SiMake /> },
      { name: "AI Workflows", icon: <FaCogs /> },
    ],
  },
];

const achievementsData = [
  {
    title: "Microsoft Azure Certified",
    subtitle: "AZ-900 Azure Fundamentals",
    icon: <PiWindowsLogoFill />,
    color: "from-blue-500 to-cyan-500",
    link: "https://www.credly.com/badges/fef56564-2602-4102-8fa2-4c6188113a63/linked_in?t=sqwocc",
    type: "certification",
    year: "2025",
  },
  {
    title: "Master's in Software Engineering",
    subtitle: "International University of La Rioja (UNIR)",
    icon: <PiGraduationCapFill />,
    color: "from-emerald-500 to-teal-500",
    type: "education",
    year: "2024-2025",
  },
  {
    title: "8+ Years Experience",
    subtitle: "Software Development & Architecture",
    icon: <PiChartLineUp />,
    color: "from-orange-500 to-red-500",
    type: "experience",
    year: "",
  },
  {
    title: "Published Research Paper",
    subtitle: "Genetic Operators in Cryptography",
    icon: <PiNewspaperFill />,
    color: "from-purple-500 to-indigo-500",
    link: "https://www.ijimai.org/journal/node/3276",
    type: "research",
    year: "2019",
  },
];

const ProfessionalProfile = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-20 min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700 mb-4 md:mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <PiUserDuotone className="text-indigo-600 dark:text-indigo-400"/>
            <span className="text-xs md:text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Professional Excellence
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Profile
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Discover my technical expertise, certifications, and professional
            achievements.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <div className="mb-16 md:mb-20">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Technical{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Stack
              </span>
            </h3>
          </motion.div> */}

          {/* Creative Mosaic Layout */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Main Tech Grid - Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 relative z-10">
              {/* Languages & Frameworks - Large Card (spans multiple columns) */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="md:col-span-4 lg:col-span-5 group"
              >
                <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-blue-200/30 dark:border-blue-700/30 shadow-2xl h-full transition-all duration-500 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group-hover:border-blue-400/50">
                  {/* Header */}
                  <div className="p-6 border-b border-blue-200/30 dark:border-blue-700/30">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* <FaCode className="text-2xl" /> */}
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          Languages & Frameworks
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Fullstack development expertise
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {techStackData[0].skills.map((skill, index) => (
                        <SkillBadge
                          key={index}
                          skill={skill}
                          index={index}
                          color="from-blue-500 to-indigo-600"
                          delay={0.3 + index * 0.05}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Stacked smaller cards */}
              <div className="md:col-span-2 lg:col-span-3 space-y-6">
                {/* Databases Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-200/30 dark:border-emerald-700/30 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl text-white shadow-lg"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* <FaDatabase className="text-lg" /> */}
                        </motion.div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          Databases
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {techStackData[1].skills.map((skill, index) => (
                          <SkillBadge
                            key={index}
                            skill={skill}
                            index={index}
                            color="from-emerald-500 to-teal-600"
                            delay={0.5 + index * 0.1}
                            compact={true}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* DevOps & Cloud Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-200/30 dark:border-cyan-700/30 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] group-hover:border-cyan-400/50">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white shadow-lg"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* <FaCloud className="text-lg" /> */}
                        </motion.div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          DevOps & Cloud
                        </h4>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {techStackData[2].skills.map((skill, index) => (
                          <SkillBadge
                            key={index}
                            skill={skill}
                            index={index}
                            color="from-cyan-500 to-blue-500"
                            delay={0.7 + index * 0.1}
                            compact={true}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* AI & Automation - Wide Card at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="md:col-span-6 lg:col-span-8 group"
              >
                <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-purple-900/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-200/30 dark:border-purple-700/30 shadow-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] group-hover:border-purple-400/50">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white shadow-lg"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {/* <FaBrain className="text-2xl" /> */}
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            AI & Automation
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Cutting-edge technology integration
                          </p>
                        </div>
                      </div>

                      {/* <motion.div
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200 dark:border-purple-700"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <FaRocket className="text-purple-600 dark:text-purple-400 text-sm" />
                        <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                          Latest Tech
                        </span>
                      </motion.div> */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {techStackData[3].skills.map((skill, index) => (
                        <SkillBadge
                          key={index}
                          skill={skill}
                          index={index}
                          color="from-purple-500 to-pink-600"
                          delay={0.9 + index * 0.1}
                          featured={true}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Achievements &{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Recognition
              </span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievementsData.map((achievement, achievementIndex) => (
              <AchievementCard
                key={achievementIndex}
                achievement={achievement}
                index={achievementIndex}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

// Skill Badge Component for the new design
const SkillBadge = React.memo(
  ({ skill, index, color, delay, compact = false, featured = false }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: delay,
          type: "spring",
          stiffness: 200,
        }}
        className={`group flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
          compact
            ? "p-2 rounded-lg bg-white/60 dark:bg-gray-700/60"
            : featured
            ? "p-3 rounded-xl bg-white/80 dark:bg-gray-700/80 border border-white/50 dark:border-gray-600/50 shadow-lg"
            : "p-3 rounded-xl bg-white/70 dark:bg-gray-700/70 border border-white/30 dark:border-gray-600/30"
        } hover:bg-white/90 dark:hover:bg-gray-600/90 hover:shadow-md`}
      >
        <motion.div
          className={`${
            compact ? "p-1.5" : "p-2"
          } rounded-lg bg-gradient-to-r ${color} text-white shadow-sm`}
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className={compact ? "text-xs" : "text-sm"}>{skill.icon}</span>
        </motion.div>

        <span
          className={`${
            compact ? "text-xs" : "text-sm"
          } font-medium text-gray-800 dark:text-white ${
            compact ? "leading-tight" : ""
          }`}
        >
          {skill.name}
        </span>

        {featured && (
          <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
            <FaStar className="text-white text-xs" />
            <span className="text-xs font-bold text-white">New</span>
          </div>
        )}
      </motion.div>
    );
  }
);

// Achievement Card Component
const AchievementCard = React.memo(({ achievement, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const CardContent = () => (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 100, scale: 0.8 }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="group relative h-full cursor-pointer"
    >
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-2xl h-full transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] group-hover:border-purple-500/30 p-6">
        {/* Icon and Year */}
        <div className="flex justify-between items-start mb-4">
          <motion.div
            className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl text-white shadow-lg`}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-2xl">{achievement.icon}</span>
          </motion.div>
          <div className="flex items-center gap-2">
            {achievement.link && (
              <motion.div
                className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-700"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaExternalLinkAlt className="text-blue-600 dark:text-blue-400 text-xs" />
              </motion.div>
            )}
            {achievement.year && (
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                {achievement.year}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
            {achievement.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {achievement.subtitle}
          </p>
        </div>

        {/* Type Badge */}
        <div className="mt-4">
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}
          >
            {achievement.type}
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (achievement.link) {
    return (
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
});

export default ProfessionalProfile;
