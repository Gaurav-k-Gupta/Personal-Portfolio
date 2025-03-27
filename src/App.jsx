import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Chatbot from './components/ChatBot';
// Example page components; you can replace these with your own implementations
const Home = () => <div className="p-4">Home Page</div>;
// const About = () => <div className="p-4">About Page</div>;
const Projects = () => <div className="p-4">Projects Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        {/* Padding top added to avoid content being hidden behind fixed navbar */}
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
