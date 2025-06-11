import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Luxury Stays</h1>
      <div className="flex gap-6">
        <Link to="/hotels" className="hover:text-amber-400 transition">Hotels</Link>
        <Link to="/tablemanager" className="hover:text-amber-400 transition">Table Manager</Link>
        <Link to="/admin" className="hover:text-amber-400 transition">Admin Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar2;
