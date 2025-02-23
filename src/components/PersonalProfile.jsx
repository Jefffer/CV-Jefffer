import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  FaMusic,
  FaGuitar,
  FaPlane,
  FaCat,
  FaPaintBrush,
  FaLaptopCode,
  FaGlobeAmericas,
  FaDog,
  FaLanguage,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { BiSolidCameraMovie, BiSolidCoffeeBean } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";

const hobbies = [
  {
    icon: <CgGym />,
    text: "Staying fit & going to the gym",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <FaCat />,
    text: "Spending time with my cats",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaMusic />,
    text: "Playing guitar & discovering music",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <BiSolidCameraMovie />,
    text: "Exploring different movie genres",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaPlane />,
    text: "Traveling & learning about cultures",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaPaintBrush />,
    text: "Expressing myself through tattoos",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <BiSolidCoffeeBean />,
    text: "Enjoy a good 100% Arabica coffee",
    color: "bg-red-100 text-red-800 ",
  },
];

const futureGoals = [
  {
    icon: <FaLaptopCode />,
    title: "Software Architect",
    text: "Design scalable & innovative systems as a senior software architect.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Travel the World",
    text: "Explore new places and cultures around the world.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaMusic />,
    title: "Music Production",
    text: "Create my own music tracks.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaDog />,
    title: "Animal Refuge",
    text: "Help animals by building a refuge for them.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <FaLanguage />,
    title: "Learn Languages",
    text: "Speak fluently in different languages, currently learning French.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Mentorship",
    text: "Help aspiring developers grow their careers.",
    color: "bg-pink-100 text-pink-600",
  },
];

const PersonalProfile = () => {
  return (
    <section className="mx-auto py-12">
      <div className="prose container mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-6 text-gray-800 dark:text-gray-200"
        >
          About <span className="text-indigo-500">Me</span>
        </motion.h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
          <em>Here's a little glimpse into who I am outside of work and what I do in my life.</em>
        </p>

        {/* Hobbies Section con Carrusel Mejorado */}
        <div>
          <h5 className="text-3xl font-semibold flex items-center gap-3 mb-10 relative">
            <FaGuitar className="text-indigo-500 text-4xl" />
            Hobbies & Interests
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-indigo-400 rounded-full"></span>
          </h5>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="mySwiper"
          >
            {hobbies.map((hobby, index) => (
              <SwiperSlide key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all bg-white text-center m-3 dark:bg-gray-800 dark:border dark:border-gray-600"
                >
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full ${hobby.color} text-5xl dark:bg-gray-300 dark:border dark:border-gray-600`}
                  >
                    {hobby.icon}
                  </div>
                  <span className="text-gray-700 mt-4 text-lg font-medium dark:text-gray-300">
                    {hobby.text}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Future Goals Section */}
        <div className="mt-12">
          <h5 className="text-3xl font-semibold text-gray-800 flex items-center gap-3 mb-10 relative">
            <TbTargetArrow className="text-red-600 text-4xl" />
            Future Goals
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-red-500 rounded-full"></span>
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center bg-white dark:bg-transparent dark:border dark:border-gray-600 dark:hover:bg-gray-800`}
              >
                <div className={`m-0 p-0 flex flex-col items-center w-full h-auto ${goal.color} dark:bg-transparent`}>
                <div className="w-16 h-16 mt-4 flex items-center justify-center rounded-full bg-transparent text-4xl border border-white dark:border-gray-600 dark:bg-gray-300">
                  {goal.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-gray-200 mt-5 mb-5">{goal.title}</h3>
                </div>
                <p className="text-gray-600 text-base mb-0 mt-3 dark:text-gray-400">{goal.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;
