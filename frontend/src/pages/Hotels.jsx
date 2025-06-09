import React, { useEffect, useState } from "react";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch hotels on mount
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

  if (loading) return <p className="text-center mt-20 text-gray-500">Loading hotels...</p>;

  if (!hotels.length)
    return <p className="text-center mt-20 text-gray-500">No hotels found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Carousel */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              {hotel.images && hotel.images.length ? (
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                  No Image Available
                </div>
              )}
            </div>

            <div className="p-6">
              {/* Name & Location */}
              <h2 className="text-2xl font-semibold text-gray-900">{hotel.name}</h2>
              <p className="text-gray-600 mb-2">{hotel.location}</p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <span className="text-yellow-400 mr-2">
                  {Array.from({ length: Math.floor(hotel.rating) }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L3.615 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
                </span>
                <span className="text-gray-600 font-medium">{hotel.rating.toFixed(1)}</span>
              </div>

              {/* Collection */}
              {hotel.collection && (
                <p className="text-sm text-indigo-600 font-semibold mb-3">
                  Collection: {hotel.collection}
                </p>
              )}

              {/* Description */}
              <p className="text-gray-700 mb-4">{hotel.description}</p>

              {/* Price Per Night */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-gray-900">Price Per Night:</h3>
                <ul className="text-gray-700 list-disc list-inside">
                  {hotel.pricePerNight &&
                    Object.entries(hotel.pricePerNight)
                      .filter(([key]) => key.toLowerCase() !== "currency")
                      .map(([roomType, price]) => (
                        <li key={roomType}>
                          <span className="capitalize">{roomType}:</span> {hotel.pricePerNight.currency}{" "}
                          {price.toLocaleString()}
                        </li>
                      ))}
                </ul>
              </div>

              {/* Amenities */}
              {hotel.amenities && hotel.amenities.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-gray-900">Amenities:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity) => (
                      <li
                        key={amenity}
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold"
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
                  <h3 className="font-semibold mb-2 text-gray-900">Room Types:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {hotel.roomTypes.map((roomType) => (
                      <li
                        key={roomType}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {roomType}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={hotel.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
                >
                  View on Map
                </a>
                {hotel.link && (
                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-semibold transition"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
