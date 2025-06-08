import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/hotels')
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Available Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.length === 0 && <p>No hotels available.</p>}
        {hotels.map(hotel => (
          <div key={hotel._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="mt-2">${hotel.price} per night</p>
            <p className="mt-2 text-sm">{hotel.description}</p>
            <Link to={`/hotels/${hotel._id}`} className="text-blue-600 hover:underline mt-3 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
