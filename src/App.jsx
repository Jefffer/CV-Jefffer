import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-indigo-950 dark:via-indigo-950 dark:to-indigo-950">
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