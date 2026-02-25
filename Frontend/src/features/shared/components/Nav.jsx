import React from "react";
import { useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-[#0B0F19] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {/* Simple logo dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <h1 className="text-sm font-semibold text-white tracking-wide hover:underline select-none">
            Snapflow
          </h1>
        </div>

        {/* Actions */}
        <button
          onClick={()=>{navigate("/create-post")}}
          className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white
                     hover:bg-blue-500 transition-colors"
        >
          Create post
        </button>
      </div>
    </nav>
  );
};

export default Nav;
