import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-100 flex flex-col items-center justify-center text-center px-4 relative">
      {/* Navbar */}
      <nav className="absolute top-6 left-6 flex items-center gap-2">
        <div className="w-8 h-2 bg-blue-600 rounded-sm"></div>
        <span className="text-xl font-semibold text-gray-800">EDHR</span>
      </nav>

      {/* Login + Register Buttons */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition flex items-center gap-2"
        >
          Login →
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition flex items-center gap-2"
        >
          Register →
        </button>
      </div>

      {/* Icon */}
      <div className="mb-6">
        <img
          src="/bot.webp"
          alt="robot"
          className="w-32 mx-auto animate-float"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
        Hey Developer! 👋
      </h2>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        Welcome to our app
      </h1>
      <p className="text-gray-600 max-w-md mb-8">
        Let's start with a quick product tour and we will have you up and
        running in no time!
      </p>

      <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
        Get Started
      </button>
    </div>
  );
}
