import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-4 flex items-center justify-between">
      {/* Center links */}
     <h1 className="text-white text-xl font-bold">Dream Stay</h1>
      <div className="flex-1 flex justify-center space-x-6">
        <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/hotels" className="text-gray-600 hover:text-blue-600 font-medium">Hotels</Link>
        <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
      </div>

      {/* Login and Signup on the right */}
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-blue-600 hover:text-blue-800 font-semibold">Login</Link>
        <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
