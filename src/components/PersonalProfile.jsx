import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import {
  
  PiCat,
  PiMusicNote,
  PiFilmStrip,
  PiAirplane,
  PiPaintBrush,
  PiCoffee,
  PiCode,
  PiGlobe,
  PiWaveform,
  PiDog,
  PiTranslate,
  PiChalkboardTeacher,
  PiUser,
  PiTarget,
  PiHeart,
  PiRocket,
  PiMagicWand,
  PiSparkle,
  PiUserDuotone
} from "react-icons/pi";
import { FaDumbbell } from "react-icons/fa";

const personalData = {
  intro: {
    title: "Beyond the Code",
    subtitle: "Exploring life's passions and future aspirations",
    description: "Life is more than just writing code. Here's a glimpse into my world of creativity, ambitions, and the things that fuel my passion for innovation."
  },
  hobbies: [
    {
      icon: FaDumbbell,
      title: "Fitness Journey",
      description: "Maintaining physical and mental strength through regular gym sessions and active lifestyle",
      gradient: "from-red-500 to-orange-500",
      bgPattern: "muscle"
    },
    {
      icon: PiCat,
      title: "Feline Companion",
      description: "Cherishing moments with my cats, finding peace in their playful and calming presence",
      gradient: "from-amber-500 to-yellow-500",
      bgPattern: "paw"
    },
    {
      icon: PiMusicNote,
      title: "Musical Expression",
      description: "Creating melodies on guitar and exploring diverse musical landscapes across genres",
      gradient: "from-blue-500 to-indigo-500",
      bgPattern: "sound"
    },
    {
      icon: PiFilmStrip,
      title: "Cinematic Explorer",
      description: "Diving deep into storytelling through cinema, from indie gems to blockbuster experiences",
      gradient: "from-green-500 to-emerald-500",
      bgPattern: "film"
    },
    {
      icon: PiAirplane,
      title: "Cultural Wanderer",
      description: "Discovering new horizons, embracing different cultures, and collecting unforgettable memories",
      gradient: "from-purple-500 to-violet-500",
      bgPattern: "travel"
    },
    {
      icon: PiPaintBrush,
      title: "Ink & Art",
      description: "Expressing personal stories and beliefs through meaningful tattoo artistry",
      gradient: "from-pink-500 to-rose-500",
      bgPattern: "art"
    },
    {
      icon: PiCoffee,
      title: "Coffee Connoisseur",
      description: "Savoring the perfect 100% Arabica brew, finding inspiration in every sip",
      gradient: "from-amber-600 to-orange-600",
      bgPattern: "coffee"
    }
  ],
  goals: [
    {
      icon: PiCode,
      title: "Software Architect",
      description: "Leading architectural decisions and designing scalable, innovative systems that shape the future of technology",
      timeline: "3-5 years",
      priority: "high",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: PiGlobe,
      title: "Global Explorer",
      description: "Immersing myself in diverse cultures, learning from different perspectives around the world",
      timeline: "Ongoing",
      priority: "high",
      gradient: "from-green-600 to-teal-500"
    },
    {
      icon: PiWaveform,
      title: "Music Producer",
      description: "Crafting original soundscapes and bringing musical visions to life in the digital realm",
      timeline: "2-3 years",
      priority: "medium",
      gradient: "from-purple-600 to-indigo-500"
    },
    {
      icon: PiDog,
      title: "Animal Sanctuary",
      description: "Creating a safe haven for rescued animals, combining compassion with sustainable practices",
      timeline: "10+ years",
      priority: "high",
      gradient: "from-yellow-600 to-orange-500"
    },
    {
      icon: PiTranslate,
      title: "Polyglot Journey",
      description: "Mastering multiple languages including French, opening doors to global communication",
      timeline: "Ongoing",
      priority: "medium",
      gradient: "from-red-600 to-pink-500"
    },
    {
      icon: PiChalkboardTeacher,
      title: "Tech Mentorship",
      description: "Guiding the next generation of developers and sharing knowledge through teaching",
      timeline: "Current",
      priority: "high",
      gradient: "from-emerald-600 to-cyan-500"
    }
  ]
};

const PersonalProfile = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950"
        />
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 dark:bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-full border border-emerald-200 dark:border-emerald-700 mb-4 md:mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <PiUserDuotone className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs md:text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Beyond the Code
            </span>
          </motion.div>

          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            {personalData.intro.title.split(' ').map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className={index === 1 ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent" : ""}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1> */}
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-gray-800 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-white/60 max-w-3xl mx-auto leading-relaxed tracking-wide px-4">
            Life is more than just writing code. Here's a glimpse into my world of creativity, ambitions, and the things that fuel my passion for innovation.
          </p>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-white/80 font-light mb-4"
          >
            {personalData.intro.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 dark:text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            {personalData.intro.description}
          </motion.p> */}
        </motion.div> 

        {/* Hobbies Section */}
        <HobbiesSection />

        {/* Goals Section */}
        <GoalsSection />
      </div>
    </section>
  );
};

// Componente de Hobbies
const HobbiesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="mb-32"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-full border border-pink-200 dark:border-white/20 mb-6"
        >
          <PiHeart className="text-pink-600 dark:text-pink-400 text-xl" />
          <span className="text-sm font-medium text-pink-700 dark:text-white/80">Passions & Interests</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Life's <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Passions</span>
        </motion.h2>
      </div>

      {/* Hobbies Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full max-w-sm mx-auto h-96"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
      >
        {personalData.hobbies.map((hobby, index) => (
          <SwiperSlide key={index}>
            <HobbyCard hobby={hobby} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

// Componente de Tarjeta de Hobby
const HobbyCard = ({ hobby, index }) => {
  const IconComponent = hobby.icon;
  
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${hobby.gradient} rounded-2xl overflow-hidden shadow-2xl`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <IconComponent className="text-4xl text-white" />
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
          className="text-2xl font-bold mb-4"
        >
          {hobby.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
          className="text-white/90 leading-relaxed"
        >
          {hobby.description}
        </motion.p>
      </div>
    </div>
  );
};

// Componente de Goals
const GoalsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-black/5 dark:bg-white/10 backdrop-blur-sm rounded-full border border-cyan-200 dark:border-white/20 mb-6"
        >
          <PiTarget className="text-cyan-600 dark:text-cyan-400 text-xl" />
          <span className="text-sm font-medium text-cyan-700 dark:text-white/80">Future Vision</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Future <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Aspirations</span>
        </motion.h2>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalData.goals.map((goal, index) => (
          <GoalCard key={index} goal={goal} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// Componente de Tarjeta de Goal
const GoalCard = ({ goal, index }) => {
  const IconComponent = goal.icon;
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-50px" });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-emerald-400/50 bg-emerald-500/10 dark:border-emerald-400/50 dark:bg-emerald-500/10';
      case 'medium': return 'border-yellow-400/50 bg-yellow-500/10 dark:border-yellow-400/50 dark:bg-yellow-500/10';
      default: return 'border-blue-400/50 bg-blue-500/10 dark:border-blue-400/50 dark:bg-blue-500/10';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/10 overflow-hidden transition-all duration-500 hover:border-gray-300/50 dark:hover:border-white/30 hover:bg-white/90 dark:hover:bg-white/10`}>
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/20"
            >
              <IconComponent className="text-xl text-gray-700 dark:text-white" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
              className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(goal.priority)}`}
            >
              {goal.priority}
            </motion.div>
          </div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
            className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {goal.title}
          </motion.h3>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
            className="flex items-center gap-2 mb-3"
          >
            <PiRocket className="text-blue-400 text-sm" />
            <span className="text-sm text-gray-600 dark:text-white/60">{goal.timeline}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
            className="text-sm text-gray-700 dark:text-white/80 leading-relaxed"
          >
            {goal.description}
          </motion.p>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: index * 0.1 + 0.7, duration: 0.8 }}
          className={`h-1 bg-gradient-to-r ${goal.gradient}`}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
};

export default PersonalProfile;
