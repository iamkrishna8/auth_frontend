import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigateto = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/users/login",
      formData, // <-- Send actual user data
      {
        withCredentials: true, // <-- Must be inside config (3rd argument)
      }
    );
    toast.success("Login Successfull");
    navigateto("/");
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-50">
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">
            EDHR
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-indigo-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-slate-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
