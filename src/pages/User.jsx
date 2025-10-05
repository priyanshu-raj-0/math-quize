// src/pages/User.jsx
import React, { useState, useContext, useEffect } from 'react';
import { userContext } from '../context/context';

const User = () => {
  const { user, setuser } = useContext(userContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("mathQuizeUser"));
    if (storedUser) {
      setuser(storedUser);
      setNewName(storedUser.name);
    }
  }, [setuser]);

  // Save the updated name
  const handleNameChange = () => {
    if (newName.trim().length > 2) {
      const updatedUser = { ...user, name: newName };
      setuser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setIsEditing(false);
    }
  };

  return (
    <div className="p-8 flex justify-center items-center min-h-[80vh] animate-fade-in">
      <div className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl shadow-lg max-w-md w-full transform transition hover:scale-105 duration-500">
        <h2 className="text-3xl font-semibold text-center text-indigo-800 mb-6">User Profile</h2>

        <div className="space-y-4 text-gray-700">

          {/* 👤 Name Field with Edit Button */}
          <div className="flex items-center gap-2">
            <span className="font-medium">👤 Name:</span>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="border px-2 py-1 rounded" />
                <button onClick={handleNameChange} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" title="Save" > 💾 </button>
                <button onClick={() => { setIsEditing(false); setNewName(user.name); }} className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500" title="Cancel" > ❌ </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-[75%]">
                <span>{user.name}</span>
                <button onClick={() => setIsEditing(true)} className="text-blue-600 hover:text-blue-800 text-lg" title="Edit name" > ✏️ </button>
              </div>
            )}
          </div>

          {/* 📧 Email */}
          <p><span className="font-medium">📧 Email:</span> {user.email}</p>

          {/* 📝 Quizzes Attempted */}
          <p><span className="font-medium">📝 Quizzes Attempted:</span> {user.totalAttempts}</p>

          {/* ✅ Correct Answers */}
          <p><span className="font-medium">✅ Correct Answers:</span> {user.correctAnswers}</p>

          {/* ⏱️ Time Spent (optional placeholder) */}
          <p><span className="font-medium">⏱️ Time Spent:</span> {"00:00"}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
