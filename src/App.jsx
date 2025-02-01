import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
import './styles/App.css';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import AboutMePage from './pages/AboutMePage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

