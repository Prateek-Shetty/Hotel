import { useEffect, useState } from 'react';
import { fetchHotels } from '../api';
import HotelCard from '../components/HotelCard';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchHotels();
      setHotels(data);
    };
    getData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-bold">Available Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </div>
    </div>
  );
};

export default Home;
