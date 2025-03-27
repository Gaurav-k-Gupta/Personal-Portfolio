import React, { forwardRef } from 'react';
import { FaLaptopCode, FaCogs, FaChartBar, FaCloud, FaTools, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaLaptopCode className="text-2xl text-[#0284C7]" />,
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Shell Scripting"],
  },
  {
    category: "Frameworks and Languages",
    icon: <FaCogs className="text-2xl text-[#0284C7]" />,
    skills: ["React Js", "Node js", "Express Js", "Next js", "Tailwind CSS", "React Native", "HTML", "CSS"],
  },
  {
    category: "Data Science",
    icon: <FaChartBar className="text-2xl text-[#0284C7]" />,
    skills: ["Pandas", "NumPy", "scikit-learn", "Statistics", "Visualization", "pandas-profiling", "Matplotlib"],
  },
  {
    category: "Clouds and DevOps",
    icon: <FaCloud className="text-2xl text-[#0284C7]" />,
    skills: ["AWS", "Git", "GitHub", "Docker", "Deployment"],
  },
  {
    category: "Machine Learning",
    icon: <GiBrain className="text-2xl text-[#0284C7]" />,
    skills: [
      "Linear Regression", "Logistic Regression", "KNN", "PCA", "Gradient Descent",
      "Bagging", "Boosting", "Random Forest", "Decision Trees", "Softmax Regression", "Voting Ensemble"
    ],
  },
  {
    category: "Libraries and Tools",
    icon: <FaTools className="text-2xl text-[#0284C7]" />,
    skills: ["openAI", "Groq", "LaTeX", "Bcrypt", "JWT", "MUI", "npm", "nodemon"],
  },
];

const Skills = forwardRef((props, ref) => {
  const [openCategories, setOpenCategories] = React.useState({});

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div ref={ref} id="skills" className="max-w-4xl mx-auto my-12 px-4" style={{scrollMarginTop : "80px"}}>
      <h2 className="text-3xl font-bold text-center text-[#0284C7] mb-8">My Skills</h2>
      <div className="space-y-4">
        {skillsData.map((group, idx) => (
          <div key={idx} className="border rounded-lg shadow-sm">
            <button
              onClick={() => toggleCategory(group.category)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 focus:outline-none"
            >
              <div className="flex items-center space-x-4">
                {group.icon}
                <span className="text-xl font-semibold">{group.category}</span>
              </div>
              <div>
                {openCategories[group.category] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            {/* Accordion Content with smooth transition */}
            <div
              className={`overflow-hidden transition-all duration-1800 ${
                openCategories[group.category] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 bg-gray-50">
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {group.skills.map((skill, index) => (
                    <li key={index} className="text-gray-700 text-base">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
