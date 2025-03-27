import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './components/About';
import EducationSection from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Chatbot from './components/ChatBot';
import Footer from './components/Footer';

// Render home page content: About + all sections.
const MainContent = ({ educationRef, skillsRef, projectsRef, achievementsRef, contactRef }) => {
  const location = useLocation();

  return (
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      {location.pathname === "/" && (
        <>
          <EducationSection ref={educationRef} />
          <Skills ref={skillsRef} />
          <Projects ref={projectsRef} />
          <Achievements ref={achievementsRef} />
          <Contact ref={contactRef} />
        </>
      )}
    </div>
  );
};

function App() {
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAchievements = () => {
    if (achievementsRef.current) {
      achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar 
          onEducationClick={scrollToEducation} 
          onSkillsClick={scrollToSkills} 
          onProjectsClick={scrollToProjects}
          onAchievementsClick={scrollToAchievements}
          onContactClick={scrollToContact}
        />
        <MainContent 
          educationRef={educationRef} 
          skillsRef={skillsRef} 
          projectsRef={projectsRef}
          achievementsRef={achievementsRef}
          contactRef={contactRef}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
