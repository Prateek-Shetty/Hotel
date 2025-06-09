import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover"
        src="/videos/HOTEL.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="fixed inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to DreamStay</h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8 drop-shadow">
          Discover luxury, comfort, and the best hotels around the world.
        </p>
        <Link
          to="/hotels"
          className="bg-blue-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-blue-400 transition"
        >
          Explore Hotels
        </Link>
      </div>
    </div>
  );
};

export default Home;