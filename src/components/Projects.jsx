import React, { forwardRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Project One",
    description: "A modern web application that demonstrates innovative features and sleek design.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one-demo.com"
  },
  {
    title: "Project Two",
    description: "A mobile-friendly solution built with progressive technologies for improved UX.",
    technologies: ["Next.js", "Firebase", "Sass"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two-demo.com"
  },
  {
    title: "Project Three",
    description: "An innovative approach to solving real-world problems with machine learning and data visualization.",
    technologies: ["Python", "TensorFlow", "Matplotlib"],
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three-demo.com"
  },
  {
    title: "Project Three",
    description: "An innovative approach to solving real-world problems with machine learning and data visualization.",
    technologies: ["Python", "TensorFlow", "Matplotlib"],
    github: "https://github.com/yourusername/project-three",
    live: "https://project-three-demo.com"
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
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
