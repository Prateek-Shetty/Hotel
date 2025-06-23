

import { useEffect, useState } from 'react';
import HotelCard from '../components/HotelCard';
import Navbar from '../components/Navbar';

<Navbar />
const Hotel = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/hotels`);
      const data = await res.json();
      setHotels(data);
    };
    fetchHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Available Hotels</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map(hotel => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotel;
