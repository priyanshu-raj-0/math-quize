// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">About This App</h1>
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4 leading-relaxed text-gray-700 transition-all duration-500 hover:shadow-xl">
        <p>
          This app helps students prepare for competitive math exams through an interactive quiz system. You can choose your preferred language (Hindi or English), attempt questions, and see your results.
        </p>
        <p>
          It tracks time, shows correct/incorrect answers, and gives feedback instantly. Built with React, Vite, and Tailwind CSS for speed and responsiveness.
        </p>
      </div>
    </div>
  );
};

export default About;
