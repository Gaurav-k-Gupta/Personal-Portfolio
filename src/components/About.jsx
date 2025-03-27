import React from 'react';
import EducationSection from './Education';
import Skills from './Skills';
const Hero = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-9 py-7 md:py-10 flex flex-col md:flex-row items-center justify-between">
        {/* Right on mobile: Profile Image (1/3 on desktop) */}
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
          <img src="/Profile.svg" alt="Profile" className="w-40 h-auto md:w-48" />
        </div>
        {/* Left on mobile: Text and Buttons (2/3 on desktop) */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 order-2 md:order-1">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#0284C7]">
            // Hello! I'am Gaurav ;
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#334155]">
            I'am a Software Engineer
          </h1>
          <p className="text-[#6B7280] text-sm md:text-base mb-4">
          I am currently pursuing BTech from CSE branch at IIT Bhilai. I love turning ideas into scalable digital solutions. Always exploring new technologies to craft seamless experiences.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 mb-4 justify-center md:justify-start">
            {/* Hire Me Button */}
            <a
              href="mailto:gauravgupta0954@gmail.com?subject=Hello%20Gaurav"
              className="flex items-center bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded transition text-xs md:text-sm"
              style={{borderRadius:"20px"}}
            >
              <img src="/Bag.svg" alt="Hire me icon" className="w-4 h-4 mr-2" />
              Hire Me
            </a>
            {/* Download CV Button */}
            <a
              href="/CV.pdf"
              download
              className="flex items-center border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white px-4 py-2 rounded transition text-xs md:text-sm"
              style={{borderRadius:"20px"}}
            >
              Download CV
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/gaurav-kumar-25554430b/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="https://github.com/Gaurav-k-Gupta" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/gupta.gaaurav/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Wave Design - Positioned closer to the main content */}
      <div className="-mt-5">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#0284C7"
            fillOpacity="1"
            d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,138.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

        {/* <EducationSection/> */}
        {/* <Skills/> */}
    </section>
  );
};

export default Hero;
