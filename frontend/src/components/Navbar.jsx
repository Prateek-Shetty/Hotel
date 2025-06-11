import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/admin";

  if (isAuthPage) return null;

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex-1 flex justify-center gap-8 text-lg font-semibold text-gray-700">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/hotels" className="hover:text-blue-600 transition">Hotels</Link>
        <Link to="/tables" className="hover:text-blue-600 transition">Tables</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
