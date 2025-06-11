import React from "react";
import Navbar1 from "../components/Navbar1";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/hotel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Login & Signup Buttons */}
      <Navbar1 />

      {/* Main Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 drop-shadow-2xl">
          Welcome to Luxury Stays
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8">
          Experience unparalleled comfort in our exquisite collection of luxury accommodations.
        </p>
      </div>
    </div>
  );
};

export default Home;
