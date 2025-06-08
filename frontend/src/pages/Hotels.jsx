import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/hotels/${id}`)
      .then(res => res.json())
      .then(data => setHotel(data))
      .catch(console.error);
  }, [id]);

  if (!hotel) return <div className="text-center mt-10">Loading hotel details...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
      <p className="text-gray-600 mb-2">Location: {hotel.location}</p>
      <p className="mb-2">${hotel.price} per night</p>
      <p className="mb-4">{hotel.description}</p>
      <Link to={`/booking?hotelId=${hotel._id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Book Now
      </Link>
    </div>
  );
}
