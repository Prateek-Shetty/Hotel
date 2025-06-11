import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    mapsLink: "",
    link: "",
    description: "",
    rating: 0,
    collection: "",
    pricePerNight: { currency: "INR", Deluxe: 0, Executive: 0, Suite: 0 },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in hotel.pricePerNight) {
      setHotel((prev) => ({
        ...prev,
        pricePerNight: { ...prev.pricePerNight, [name]: Number(value) },
      }));
    } else {
      setHotel((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/hotels", hotel);
      alert("Hotel added successfully");
    } catch {
      alert("Failed to add hotel");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded" />
        <input name="location" placeholder="Location" onChange={handleChange} className="border p-2 rounded" />
        <input name="mapsLink" placeholder="Google Maps Link" onChange={handleChange} className="border p-2 rounded" />
        <input name="link" placeholder="Website Link" onChange={handleChange} className="border p-2 rounded" />
        <input name="description" placeholder="Description" onChange={handleChange} className="border p-2 rounded" />
        <input name="rating" placeholder="Rating" type="number" onChange={handleChange} className="border p-2 rounded" />
        <input name="collection" placeholder="Collection Name" onChange={handleChange} className="border p-2 rounded" />
        <input name="Deluxe" placeholder="Deluxe Price" type="number" onChange={handleChange} className="border p-2 rounded" />
        <input name="Executive" placeholder="Executive Price" type="number" onChange={handleChange} className="border p-2 rounded" />
        <input name="Suite" placeholder="Suite Price" type="number" onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
