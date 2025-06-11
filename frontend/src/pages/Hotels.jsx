import React, { useEffect, useState } from "react";
import axios from "axios";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/hotels").then((res) => setHotels(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel) => (
        <div key={hotel._id} className="bg-white rounded-xl shadow-lg p-4">
          <img src={hotel.image || "/default-hotel.jpg"} alt={hotel.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-bold">{hotel.name}</h2>
          <p className="text-gray-600">{hotel.location}</p>
          <p className="mt-2">{hotel.description}</p>
          <p className="mt-1 text-yellow-500 font-semibold">Rating: {hotel.rating}</p>
          <div className="mt-4 flex gap-2">
            <a href={hotel.mapsLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-800 text-white py-2 px-4 rounded text-center hover:bg-black">
              Google Maps
            </a>
            <a href={hotel.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-800 text-white py-2 px-4 rounded text-center hover:bg-blue-900">
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hotels;
