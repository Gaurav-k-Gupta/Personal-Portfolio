import React, { forwardRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "HostelPro - Hostel Management System",
    description:
      "Developed a web app for hostel management with room booking and availability tracking. Implemented a complaint system for issue reporting and resolution, and built a secure backend with authentication along with a responsive UI.",
    technologies: ["React Js", "Node Js", "Tailwind CSS"],
    github: "https://github.com/OmAnand857/Hostel_Management",
    live: "https://hostel-management-roan.vercel.app/"
  },
  {
    title: "VaultRoom - Password Manager Web App",
    description:
      "Built a secure password manager with a secured login system and OAuth authentication. Developed RESTful APIs for user-specific credential management and designed a responsive UI with React.js and TailwindCSS. Implemented industry-standard encryption for data security.",
    technologies: ["React Js", "Express Js", "MongoDB"],
    github: "https://github.com/Gaurav-k-Gupta/VaultRoom---password-Manager"
    // No live demo provided
  },
  {
    title: "VIKASA App - C4GT",
    description:
      "An open-source PWA aimed to ease data collection for VIKASA by working offline in no-internet areas. Implemented a queue management system using IndexedDB and data synchronization using service workers. Built a responsive UI for a seamless experience.",
    technologies: ["React Js", "TypeScript", "Fastify", "IndexedDB"],
    github: "https://github.com/Gaurav-k-Gupta/vikasa-form-app"
    // No live demo provided
  },
  {
    title: "Stress Management App",
    description:
      "Developed an end-to-end stress management app with self-assessment and personalized recommendations. Integrated chat assistance, music/video therapies, and guided meditation.",
    technologies: ["React Native", "TypeScript"],
    // No github or live demo provided
  },
  {
    title: "100 Days of Machine Learning",
    description:
      "A comprehensive journey documenting 100 days of learning and projects in Machine Learning. Explores a range of ML topics, from data preprocessing to model evaluation.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "numpy", "pandas-profiling"],
    github: "https://github.com/Gaurav-k-Gupta/100-Days-of-Machine-Learning/tree/main"
    // No live demo provided
  },
  {
    title: "TrusToken Starter",
    description:
      "Developed a secure communication and document signing app which uses a custom trust token to detect the device security.",
    technologies: ["kotlin", "xml"],
    github: "https://github.com/Rahulrajln1111/Secure_TrusToken/tree/patchII"
    // No live demo provided
  }
];

const Projects = forwardRef((props, ref) => {
  return (
    <section 
      ref={ref} 
      id="projects"
      className="py-10 bg-gray-50"
      style={{ scrollMarginTop: '80px' }}  // Adjust if your navbar height changes
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0284C7] mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-gray-700 font-semibold">Technologies:</p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li 
                        key={techIndex} 
                        className="bg-[#0284C7] text-white text-xs font-medium px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
