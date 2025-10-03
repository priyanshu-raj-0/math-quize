// src/pages/User.jsx
import React from 'react';

const User = () => {
  const user = {
    name: "Ravi Kumar",
    email: "ravi@example.com",
    totalAttempts: 10,
    correctAnswers: 72,
    timeSpent: "1 hr 15 mins"
  };

  return (
    <div className="p-8 flex justify-center items-center min-h-[80vh] animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl shadow-lg max-w-md w-full transform transition hover:scale-105 duration-500">
        <h2 className="text-3xl font-semibold text-center text-indigo-800 mb-6">User Profile</h2>
        <div className="space-y-4 text-gray-700">
          <p><span className="font-medium">👤 Name:</span> {user.name}</p>
          <p><span className="font-medium">📧 Email:</span> {user.email}</p>
          <p><span className="font-medium">📝 Quizzes Attempted:</span> {user.totalAttempts}</p>
          <p><span className="font-medium">✅ Correct Answers:</span> {user.correctAnswers}</p>
          <p><span className="font-medium">⏱️ Time Spent:</span> {user.timeSpent}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
