// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hotel.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="absolute top-4 right-6 z-20 flex gap-4">
        <Link to="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Signup
          </button>
        </Link>
      </div>

      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center drop-shadow-lg">
          Welcome to Luxury Stays
        </h1>
      </div>
    </div>
  );
};

export default Home;
