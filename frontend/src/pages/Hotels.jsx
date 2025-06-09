import React, { useEffect, useState } from "react";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/hotels");
        const data = await res.json();
        setHotels(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch hotels:", err);
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  // Auto cycle images every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev };
        hotels.forEach((hotel) => {
          const imagesLength = hotel.images ? hotel.images.length : 0;
          if (imagesLength > 1) {
            newIndex[hotel._id] = (prev[hotel._id] + 1) % imagesLength || 0;
          } else {
            newIndex[hotel._id] = 0;
          }
        });
        return newIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [hotels]);

  // Filter hotels by search term (case-insensitive)
  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500 text-lg font-medium">
        Loading hotels...
      </p>
    );

  if (!filteredHotels.length)
    return (
      <div className="max-w-xl mx-auto mt-20 px-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <p className="text-center mt-12 text-gray-500 text-lg font-medium">
          No hotels found.
        </p>
      </div>
    );

  return (
   
  <div className="min-h-screen bg-gray-900 text-white">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-white-900 tracking-wide">
        Explore Our Hotels
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-500">
        {filteredHotels.map((hotel) => {
          const imgIndex = currentImageIndex[hotel._id] || 0;
          return (
            <div
             key={hotel._id}
             className="bg-white/90 dark:bg-gray-900 text-white-900 dark:text-white rounded-3xl shadow-xl overflow-hidden flex flex-col transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >

              {/* Image Carousel */}
              <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden rounded-t-3xl">
                {hotel.images && hotel.images.length ? (
                  <>
                    <img
                      src={hotel.images[imgIndex]}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    />
                    {hotel.images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {hotel.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [hotel._id]: i,
                              }))
                            }
                            className={`w-3 h-3 rounded-full transition-colors ${
                              i === imgIndex
                                ? "bg-indigo-600"
                                : "bg-indigo-300 hover:bg-indigo-500"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          ></button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 rounded-t-3xl">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {/* Name & Location */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-400 mb-1 truncate">
               {hotel.name}
                 </h2>

                <p className="text-sm sm:text-base text-gray-500 mb-3 truncate">
                  {hotel.location}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="flex text-yellow-400 mr-2">
                    {Array.from({ length: Math.floor(hotel.rating) }).map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 sm:w-6 sm:h-6 inline-block"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L3.615 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                        </svg>
                      )
                    )}
                  </span>
                  <span className="text-gray-500 font-semibold text-base sm:text-lg">
                    {hotel.rating.toFixed(1)}
                  </span>
                </div>

                {/* Collection */}
                {hotel.collection && (
                  <p className="text-indigo-600 font-semibold mb-3 tracking-wide text-sm sm:text-base">
                    Collection: {hotel.collection}
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-500 mb-5 text-sm sm:text-base line-clamp-4">
                  {hotel.description}
                </p>

                {/* Price Per Night */}
                <div className="mb-5">
                  <h3 className="font-semibold mb-1 text-gray-500 text-lg sm:text-xl">
                    Price Per Night:
                  </h3>
                  <ul className="text-gray-400 list-disc list-inside space-y-0.5 text-sm sm:text-base">
                    {hotel.pricePerNight &&
                      Object.entries(hotel.pricePerNight)
                        .filter(([key]) => key.toLowerCase() !== "currency")
                        .map(([roomType, price]) => (
                          <li key={roomType} className="capitalize">
                            <span className="font-medium">{roomType}</span>:{" "}
                            {hotel.pricePerNight.currency}{" "}
                            {price.toLocaleString()}
                          </li>
                        ))}
                  </ul>
                </div>

                {/* Amenities */}
                {hotel.amenities && hotel.amenities.length > 0 && (
                  <div className="mb-5">
                    <h3 className="font-semibold mb-2 text-gray-300 text-lg sm:text-xl">
                      Amenities:
                    </h3>
                    <ul className="flex flex-wrap gap-2 text-xs sm:text-sm">
                      {hotel.amenities.map((amenity) => (
                        <li
                          key={amenity}
                          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-semibold select-none"
                        >
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Room Types */}
                {hotel.roomTypes && hotel.roomTypes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-gray-300 text-lg sm:text-xl">
                      Room Types:
                    </h3>
                    <ul className="flex flex-wrap gap-2 text-xs sm:text-sm">
                      {hotel.roomTypes.map((roomType) => (
                        <li
                          key={roomType}
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold select-none"
                        >
                          {roomType}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={hotel.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-center transition"
                  >
                    View on Map
                  </a>
                  {hotel.link && (
                    <a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-2xl font-semibold text-center transition"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-xl mx-auto mb-8 px-4">
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search hotels by name..."
        className="w-full border border-gray-300 rounded-full py-3 px-5 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        aria-label="Search hotels by name"
      />
    </div>
  );
};

export default Hotels;
