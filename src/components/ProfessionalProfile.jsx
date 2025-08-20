import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  FaCode, 
  FaAward, 
  FaDatabase, 
  FaReact, 
  FaMobile, 
  FaCloud, 
  FaTools, 
  FaCogs,
  FaMicrosoft,
  FaCertificate,
  FaGraduationCap,
  FaNewspaper,
  FaStar,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaJava
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
  SiGit
} from "react-icons/si";

  import { VscAzureDevops } from "react-icons/vsc";
    import { PiFileCSharpFill  } from "react-icons/pi";

const techStackData = [
  {
    category: "Backend Development",
    icon: <FaCode />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
    skills: [
      { name: "C#", icon: <PiFileCSharpFill />, level: 95 },
      { name: ".NET Core", icon: <SiDotnet />, level: 95 },
      { name: "Java", icon: <FaJava />, level: 85 },
      { name: "Python", icon: <SiPython />, level: 80 },
      { name: "PHP", icon: <SiPhp />, level: 75 }
    ]
  },
  {
    category: "Frontend Development",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    skills: [
      { name: "React", icon: <SiReact />, level: 90 },
      { name: "Angular", icon: <SiAngular />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 95 }
    ]
  },
  {
    category: "Database & Cloud",
    icon: <FaDatabase />,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    skills: [
      { name: "SQL Server", icon: <FaDatabase />, level: 90 },
      { name: "MySQL", icon: <SiMysql />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb />, level: 75 },
      { name: "Azure", icon: <VscAzureDevops />, level: 85 },
      { name: "AWS", icon: <SiAmazonwebservices  />, level: 70 }
    ]
  },
  {
    category: "DevOps & Mobile",
    icon: <FaTools />,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    skills: [
      { name: "Docker", icon: <SiDocker />, level: 80 },
      { name: "Kubernetes", icon: <SiKubernetes />, level: 70 },
      { name: "Android", icon: <SiAndroid />, level: 85 },
      { name: "Git", icon: <SiGit />, level: 95 }
    ]
  }
];

const achievementsData = [
  {
    title: "Microsoft Azure Certified",
    subtitle: "AZ-900 Azure Fundamentals",
    icon: <FaMicrosoft />,
    color: "from-blue-500 to-cyan-500",
    link: "https://www.credly.com/badges/fef56564-2602-4102-8fa2-4c6188113a63/linked_in?t=sqwocc",
    type: "certification",
    year: "2024"
  },
  {
    title: "Master's in Software Engineering",
    subtitle: "International University of La Rioja (UNIR)",
    icon: <FaGraduationCap />,
    color: "from-emerald-500 to-teal-500",
    type: "education",
    year: "2024-2025"
  },
  {
    title: "8+ Years Experience",
    subtitle: "Software Development & Architecture",
    icon: <FaChartLine />,
    color: "from-orange-500 to-red-500",
    type: "experience",
    year: "2016-2024"
  },
  {
    title: "Published Research Paper",
    subtitle: "Genetic Operators in Cryptography",
    icon: <FaNewspaper />,
    color: "from-purple-500 to-indigo-500",
    link: "https://www.ijimai.org/journal/node/3276",
    type: "research",
    year: "2023"
  }
];

const ProfessionalProfile = () => {
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
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full border border-indigo-200 dark:border-indigo-700 mb-4 md:mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaRocket className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs md:text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Professional Excellence
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Profile
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Discover my technical expertise, certifications, and professional achievements that drive innovation in software development.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Technical <span className="text-indigo-600 dark:text-indigo-400">Stack</span>
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {techStackData.map((category, categoryIndex) => (
              <TechStackCard 
                key={categoryIndex} 
                category={category} 
                index={categoryIndex} 
              />
            ))}
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
              Achievements & <span className="text-purple-600 dark:text-purple-400">Recognition</span>
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

// Tech Stack Card Component
const TechStackCard = React.memo(({ category, index }) => {
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
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="group relative h-full"
    >
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-2xl h-full transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] group-hover:border-indigo-500/30">
        
        {/* Header with gradient background */}
        <motion.div 
          className={`relative p-6 bg-gradient-to-br ${category.bgColor} border-b border-gray-200/30 dark:border-gray-700/30`}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white shadow-lg`}
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-xl">{category.icon}</span>
            </motion.div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {category.category}
            </h4>
          </div>
        </motion.div>

        {/* Skills List */}
        <div className="p-6">
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-lg text-gray-600 dark:text-gray-400">
                  {skill.icon}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// Achievement Card Component
const AchievementCard = React.memo(({ achievement, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  const CardContent = () => (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
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
          <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            {achievement.year}
          </span>
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
          <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
            {achievement.type}
          </span>
        </div>

        {/* Link Indicator */}
        {achievement.link && (
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
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
