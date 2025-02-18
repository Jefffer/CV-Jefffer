import React from "react";
import About from "../components/About";
import NotAbout from "../components/NotAbout";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
// import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <NotAbout />
      {/* <About /> */}
      <Skills />
      {/* <Projects /> */}
      {/* <Experience /> */}
      <Contact />
      {/* <Education /> */}
    </div>
  );
};

export default Home;
