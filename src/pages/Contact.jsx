// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Contact Us</h1>
      <p className="mb-8 text-gray-600 text-center">We'd love to hear from you! Fill out the form below.</p>

      <form className="space-y-6 bg-white p-6 rounded shadow-lg transition-all duration-500 hover:shadow-2xl">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
