import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Table = () => {
  const [form, setForm] = useState({ tableNumber: '', guestName: '', reservationDate: '', price: '' });
  const [tables, setTables] = useState([]);

  const fetchTables = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tables`);
    const data = await res.json();
    setTables(data);
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/tables`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) {
      setForm({ tableNumber: '', guestName: '', reservationDate: '', price: '' });
      fetchTables();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Reserve a Table</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow-md max-w-md space-y-3">
          <input name="tableNumber" placeholder="Table Number" onChange={handleChange} value={form.tableNumber} className="w-full p-2 border rounded" required />
          <input name="guestName" placeholder="Guest Name" onChange={handleChange} value={form.guestName} className="w-full p-2 border rounded" required />
          <input type="date" name="reservationDate" onChange={handleChange} value={form.reservationDate} className="w-full p-2 border rounded" required />
          <input name="price" placeholder="Price (INR)" onChange={handleChange} value={form.price} className="w-full p-2 border rounded" required />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Book</button>
        </form>

        <h2 className="text-xl font-bold mt-10 mb-4">Reservations</h2>
        <div className="grid gap-3">
          {tables.map((table, index) => (
            <div key={index} className="bg-white p-3 rounded-xl shadow flex justify-between items-center">
              <div>
                <p><strong>Table:</strong> {table.tableNumber}</p>
                <p><strong>Name:</strong> {table.guestName}</p>
                <p><strong>Date:</strong> {table.reservationDate}</p>
              </div>
              <p className="font-semibold">₹{table.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
