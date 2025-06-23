import { useEffect, useState } from 'react';

const Admin = () => {
  const [hotels, setHotels] = useState([]);
  const [form, setForm] = useState({
    name: '',
    location: '',
    description: '',
    rating: '',
    mapsLink: '',
    link: '',
    collection: '',
    pricePerNight: {
      currency: 'INR',
      Deluxe: '',
      Executive: '',
      Suite: ''
    }
  });
  const [revenue, setRevenue] = useState(0);

  const fetchHotels = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/hotels`);
    const data = await res.json();
    setHotels(data);
  };

  const fetchRevenue = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tables/revenue`);
    const data = await res.json();
    setRevenue(data.revenue);
  };

  useEffect(() => {
    fetchHotels();
    fetchRevenue();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['Deluxe', 'Executive', 'Suite'].includes(name)) {
      setForm((prev) => ({
        ...prev,
        pricePerNight: {
          ...prev.pricePerNight,
          [name]: value
        }
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addHotel = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/hotels`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, rating: Number(form.rating) })
    });
    if (res.ok) {
      await fetchHotels();
    }
  };

  const deleteHotel = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/hotels/${id}`, { method: 'DELETE' });
    await fetchHotels();
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Admin Panel</h1>

      <form onSubmit={addHotel} className="space-y-3 bg-white p-4 rounded-xl shadow-md max-w-xl">
        <h2 className="text-xl font-semibold">Add New Hotel</h2>
        <input name="name" onChange={handleChange} placeholder="Hotel Name" className="w-full p-2 border rounded" required />
        <input name="location" onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" required />
        <input name="description" onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
        <input name="mapsLink" onChange={handleChange} placeholder="Google Maps Link" className="w-full p-2 border rounded" />
        <input name="link" onChange={handleChange} placeholder="Website Link" className="w-full p-2 border rounded" />
        <input name="collection" onChange={handleChange} placeholder="Collection Name" className="w-full p-2 border rounded" />
        <input name="rating" onChange={handleChange} placeholder="Rating (e.g. 4.5)" className="w-full p-2 border rounded" type="number" step="0.1" />
        <div className="grid grid-cols-3 gap-2">
          {['Deluxe', 'Executive', 'Suite'].map(type => (
            <input key={type} name={type} placeholder={`${type} Price`} onChange={handleChange} className="p-2 border rounded" />
          ))}
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add Hotel</button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Hotel List</h2>
        <ul className="space-y-2">
          {hotels.map(hotel => (
            <li key={hotel._id} className="flex justify-between items-center p-3 bg-white rounded-xl shadow">
              <div>
                <strong>{hotel.name}</strong> – {hotel.location}
              </div>
              <button onClick={() => deleteHotel(hotel._id)} className="text-red-600 font-bold">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xl font-bold">
        💰 Total Revenue from Tables: ₹{revenue}
      </div>
    </div>
  );
};

export default Admin;
