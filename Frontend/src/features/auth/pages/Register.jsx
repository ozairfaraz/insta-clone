import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, user, handleRegister } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister(username, email, password);
    navigate("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main>
      <div className="flex min-h-screen items-center justify-center bg-[#0B0F19]">
        {/* Card */}
        <div className="w-full max-w-md rounded-2xl shadow-2xl border p-6 sm:p-8 bg-[#111827] border-white/10">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-white">
              Create an account
            </h1>
            <p className="mt-2 text-sm text-gray-400">Sign up to get started</p>
          </div>
          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm text-gray-300">
                Username
              </label>
              <input
                id="username"
                onInput={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                placeholder="yourUsername"
                className="w-full rounded-lg bg-[#020617] border border-white/10 px-3 py-2.5 
                           text-white placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm text-gray-300">
                Email
              </label>
              <input
                id="email"
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-[#020617] border border-white/10 px-3 py-2.5 
                           text-white placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm text-gray-300">
                Password
              </label>
              <input
                id="password"
                onInput={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg bg-[#020617] border border-white/10 px-3 py-2.5 
                           text-white placeholder-gray-500
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Button */}
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white
                         hover:bg-blue-500 transition-colors"
            >
              Sign up
            </button>
          </form>
          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
