import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigateto = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/users/signup",
      formData, // <-- Send actual user data
      {
        withCredentials: true, // <-- Must be inside config (3rd argument)
      }
    );
    toast.success("User Registered Succesfull");
    navigateto("/login");
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-indigo-200">
      <nav className="absolute top-6 left-6 flex items-center gap-2">
        <img onClick={() => navigateto("/")} src="/logo.svg" alt="logo" />
      </nav>
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-indigo-50">
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#333A5C] text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">
            EDHR
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-[#333A5C] mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-[#333A5C]">
              <User className="w-5 h-5 text-[#333A5C] mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address
            </label>
            <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-[#333A5C]">
              <Mail className="w-5 h-5 text-[#333A5C] mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="flex items-center w-full px-4 py-2 rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-[#333A5C]">
              <Lock className="w-5 h-5 text-[#333A5C] mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#333A5C] text-white py-2 rounded-lg text-lg font-medium hover:bg-[#2b324f] transition shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-5 text-sm text-slate-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#333A5C] font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
