import React, { useEffect, useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    title: 'BTech in Computer Science',
    institution: 'IIT Bhilai',
    period: '2023 - Present ( 8.4 CGPA )',
    description: 'Pursuing my BTech with a focus on software engineering and problem-solving'
  },
  {
    title: 'Higher Secondary Education',
    institution: 'Hellens School , Sitamarhi',
    period: '2021-2023 ( 88% )',
    description: 'Studied science with a major emphasis on Mathematics and Physics.'
  },
  {
    title: 'Secondary School',
    institution: 'Mission Boarding School',
    period: 'till 2021',
    description: 'Completed my foundational education with excellent academic performance.'
  },
];

const EducationSection = () => {
  const trainRef = useRef(null);
  const timelineRef = useRef(null);

  // Animate the train along the track as the user scrolls.
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !trainRef.current) return;
      const timelineRect = timelineRef.current.getBoundingClientRect();
      // Calculate progress: 0 when timeline top is at viewport top, 1 when timeline bottom is at viewport bottom
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - timelineRect.top) / (window.innerHeight + timelineRect.height))
      );
      // Move train from top to bottom of the timeline container
      const trainTop = progress * (timelineRect.height - 24); // 24px is an approximate train size
      trainRef.current.style.top = `${trainTop}px`;
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to position the train
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Remove negative margin and ensure the section is below the fixed navbar by default
    <section id="education" className="relative z-0 -mt-1">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center bg-[#0284C7] pb-8 flex items-center justify-center gap-2">
        <FaGraduationCap className="text-white" />
            Education
          </h1>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative container mx-auto px-4 bg-[#0284C7]">
        {/* Vertical Track */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white"></div>
        {/* Moving Train */}
        <div
          ref={trainRef}
          className="train absolute left-1/2 transform -translate-x-1/2 bg-[#334155] rounded-full w-6 h-6 shadow-lg z-10"
          style={{ top: 0 }}
        ></div>

        {/* Timeline Items */}
        <div className="space-y-16 py-8">
          {educationData.map((item, idx) => {
            // For desktop: left cards for even items, right cards for odd items.
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative grid grid-cols-1 md:grid-cols-12 items-center">
                {isLeft ? (
                  <>
                    {/* Card on left */}
                    <div className="md:col-start-1 md:col-span-5 bg-white p-6 rounded-lg shadow-md z-20 text-right">
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-blue-600 font-medium mt-1">
                        {item.institution} | {item.period}
                      </p>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                    {/* Node in center */}
                    <div className="hidden md:flex md:col-start-6 md:col-span-2 justify-center">
                      <div className="w-4 h-4 bg-white border-4 border-[#334155] rounded-full z-30"></div>
                    </div>
                    {/* Empty space on right */}
                    <div className="hidden md:block md:col-start-8 md:col-span-5"></div>
                  </>
                ) : (
                  <>
                    {/* Empty space on left */}
                    <div className="hidden md:block md:col-start-1 md:col-span-5"></div>
                    {/* Node in center */}
                    <div className="hidden md:flex md:col-start-6 md:col-span-2 justify-center">
                      <div className="w-4 h-4 bg-white border-4 border-[#334155] rounded-full z-30"></div>
                    </div>
                    {/* Card on right */}
                    <div className="md:col-start-8 md:col-span-5 bg-white p-6 rounded-lg shadow-md z-20 text-left">
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-blue-600 font-medium mt-1">
                        {item.institution} | {item.period}
                      </p>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  </>
                )}
                {/* For Mobile: Show card full width with node below */}
                <div className="md:hidden mt-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-30"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Blue Wave (positioned closer to the content) */}
      <div className="-mt-2">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#0284C7"
            fillOpacity="1"
            transform="scale(1,-1) translate(0,-320)"
            d="M0,32L60,42.7C120,53,240,75,360,85.3C480,96,600,96,720,101.3C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Custom CSS for the moving train */}
      <style jsx>{`
        .train {
          transition: top 0.2s ease-out;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
