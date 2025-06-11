import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="absolute top-4 right-6 z-50 flex gap-4">
      <Link
        to="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
      >
        Signup
      </Link>
    </div>
  );
};

export default Navbar1;
