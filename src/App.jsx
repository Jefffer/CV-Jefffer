import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
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
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-gray-900 dark:to-indigo-950">
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
    </GoogleReCaptchaProvider>
  );
}

export default App;