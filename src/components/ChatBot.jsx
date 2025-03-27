import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Groq from "groq-sdk";

// System context (personal bio) to prime the conversation
const systemContext = {
  role: "system",
  content: `
You are chatting with Gaurav, a Software Engineer pursuing a BTech in Computer Science at IIT Bhilai.
He loves turning ideas into scalable digital solutions and exploring new technologies.
Answer any questions about him in a friendly and detailed manner. ( important )

Details about Gaurav :-
Full Name - Gaurav Kumar 
Address - From Sitamarhi , Bihar
Education :-
BTech in CSE from IIT Bhilai ( 2023 - 2027 ) , currently in 2nd year , 4th sem.

Higher Secondary Eduaction :- Hellens School Sitamarhi , 88% in 12th
Prepared for JEE from Allen Kota

Secondary education :- Mission Boarding School , Sitamarhi ( Hometown )


Hobbies :- Playing Cricket and coding


Skills :- 
 category: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "Shell Scripting"],
    category: "Frameworks and Languages",
    icon: <FaCogs className="text-2xl text-[#0284C7]" />,
    skills: ["React Js", "Node js", "Express Js", "Next js", "Tailwind CSS", "React Native", "HTML", "CSS"],
    category: "Data Science",
   skills: ["Pandas", "NumPy", "scikit-learn", "Statistics", "Visualization", "pandas-profiling", "Matplotlib"],
    category: "Clouds and DevOps",
    skills: ["AWS", "Git", "GitHub", "Docker", "Deployment"],
    category: "Machine Learning",
      "Linear Regression", "Logistic Regression", "KNN", "PCA", "Gradient Descent",
      "Bagging", "Boosting", "Random Forest", "Decision Trees", "Softmax Regression", Voting Ensemble.
    category: "Libraries and Tools",
    openAI, Groq AI, LaTeX, Bcrypt, JWT, MUI, npm , nodemon


    Achievements :- 
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


  Gaurav's projects details :-
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

  `,
};

// Initialize Groq with your API key
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // Use with caution
});

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Conversation history
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    // Add user's message to the conversation
    setMessages(prev => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);
    try {
      // Include the system context along with the user's message
      const response = await groq.chat.completions.create({
        messages: [
          systemContext,
          { role: "user", content: trimmed },
        ],
        model: "llama-3.3-70b-versatile",
      });
      const botReply = response.choices[0]?.message?.content || "Sorry, I didn't get that.";
      // Add the bot's reply to the conversation
      setMessages(prev => [...prev, { role: "bot", content: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", content: "Error: " + error.message }]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 relative">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#0284C7]">
        Chat with My Assistant
      </h2>
      
      {/* Chat Area with extra padding at bottom for the sticky input */}
      <div className="h-[500px] overflow-y-auto pb-24 p-4 bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-lg break-words p-3 rounded-xl ${
                msg.role === "user" ? "bg-[#0284C7] text-white" : "bg-gray-100 text-gray-800"
              }`}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-xl bg-gray-100 text-gray-800">
              Loading...
            </div>
          </div>
        )}
      </div>
      
      {/* Sticky Input Area */}
      <div className="sticky bottom-0 left-0 right-0 flex bg-white p-4 border-t border-gray-200">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-l-xl p-3 focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
        />
        <button
          onClick={handleSend}
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 rounded-r-xl"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
