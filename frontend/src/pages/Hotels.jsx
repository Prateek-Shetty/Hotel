// src/pages/Hotels.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/hotels");
        setHotels(res.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Explore Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105 duration-300"
          >
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-64"
            >
              {hotel.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Hotel ${idx}`}
                    className="w-full h-64 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">{hotel.name}</h2>
              <p className="text-gray-600 mb-2">{hotel.location}</p>
              <p className="text-sm text-gray-500 mb-2">{hotel.description}</p>
              <p className="text-yellow-500 font-bold mb-2">⭐ {hotel.rating}</p>

              <div className="mb-2">
                <span className="font-semibold text-gray-700">Amenities:</span>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {hotel.amenities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center mt-4">
                <a
                   href={hotel.mapsLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-block bg-blue-300 text-black px-4 py-2 rounded-full hover:bg-blue-400 transition"
            >
                   View on Map
               </a>
               </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
