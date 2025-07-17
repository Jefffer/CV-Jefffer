import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Header from './components/Header';
import './styles/App.css';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import AboutMePage from './pages/AboutMePage';
import Footer from './components/Footer';
import ProfessionalProfile from './components/ProfessionalProfile';
import Education from './components/Education';



function App() {

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

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950">
        {/* <main className="flex-grow bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-indigo-950 dark:via-indigo-950 dark:to-indigo-950"> */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-pink-400/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.05),transparent_50%)]" />

      <FloatingParticles /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfessionalProfile />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;