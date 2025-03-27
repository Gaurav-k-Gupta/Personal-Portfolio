import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Groq from "groq-sdk";

// Define your personal context message
const systemContext = {
  role: "system",
  content: `
You are chatting with **Gaurav**, a Software Engineer currently pursuing a BTech in Computer Science at **IIT Bhilai**.
He loves turning ideas into scalable digital solutions and is passionate about exploring new technologies.
He has experience in web development, programming, and building creative digital experiences.
When users ask questions about him, provide detailed and friendly responses.
  `,
};

// Initialize Groq with your API key (ensure you've set VITE_GROQ_API_KEY in your .env.local)
// WARNING: Using dangerouslyAllowBrowser exposes your key to the client.
// For production, consider using a secure backend endpoint.
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Chatbot = () => {
  // Store conversation history, starting with the system context (not displayed in the UI)
  const [messages, setMessages] = useState([systemContext]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Append user's message to conversation
    const userMessage = { role: "user", content: trimmed };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      // Send the conversation history (including system context) to the API
      const response = await groq.chat.completions.create({
        messages: [...messages, userMessage],
        model: "llama-3.3-70b-versatile",
      });
      const botReply = response.choices[0]?.message?.content || "Sorry, I didn't get that.";
      setMessages(prev => [...prev, { role: "bot", content: botReply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "bot", content: "Error: " + error.message }]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#0284C7]">Chat with My Assistant</h2>
      
      {/* Enlarged Chat Area */}
      <div className="h-96 overflow-y-auto border p-4 rounded mb-4 bg-gray-50">
        {/*
          We display only the messages that are not the system context.
          The system context is used to prime the model but not shown in the UI.
        */}
        {messages.slice(1).map((msg, index) => (
          <div
            key={index}
            className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs break-words p-3 rounded-lg shadow 
                ${msg.role === "user"
                  ? "bg-[#0284C7] text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"}`}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="p-3 rounded-lg shadow bg-gray-200 text-gray-800">Loading...</div>
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded-l-lg p-3 focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
        />
        <button
          onClick={handleSend}
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 rounded-r-lg"
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
