import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-8 py-4">
      <div className="text-xl font-bold">Luxury Stays</div>
      <div className="space-x-4">
        <Link to="/hotels" className="hover:underline">Hotels</Link>
        <Link to="/tablemanager" className="hover:underline">Tables</Link>
      </div>
    </nav>
  );
};

export default Navbar;
