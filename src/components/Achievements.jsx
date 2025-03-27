import React, { forwardRef } from 'react';
import { FaTrophy } from 'react-icons/fa';

const achievementsData = [
  {
    title: "Codeforces Specialist ( 1483 Max Rating )",
    date: "2024 - present , gauravkr54",
    description: "Secured a rank of 1188 in Codeforces Round 1009 , Div 3.",
  },
  {
    title: "3 Star on CodeChef ( 1748 Max Rating )",
    date: "2023 - present , gauravkr54",
    description: "Giving contests consistently and achieved this milestone.",
  },
  {
    title: "Open Source Contributor",
    date: "2025 , Gaurav-k-Gupta",
    description: "Contributed to popular open source project by VIKASA ( C4GT Community ).",
  },
  {
    title: "450+ Problems solved and top 8% on Leetcode",
    date: "2023 - Present , Codewith_gaurav",
    description: "From solving POTDs to giving contests, i have solved problems mostly on DP , Graphs and focusing on optimization.",
  },
];

const Achievements = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="achievements"
      className="py-16 bg-white"
      style={{ scrollMarginTop: '80px' }}  // Adjust to match your navbar height
    >
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-center text-white bg-[#0284C7] py-4 flex items-center justify-center gap-2">
            <FaTrophy className="text-white" />
            Achievements
          </h2>
        </header>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>
          <div className="space-y-8">
            {achievementsData.map((item, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row items-center">
                {/* Marker */}
                <div className="w-8 h-8 bg-[#0284C7] rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                {/* Connector (only on larger screens) */}
                <div className="hidden md:block w-8 h-0.5 bg-gray-200"></div>
                {/* Achievement Card */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md md:ml-8 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Achievements;
