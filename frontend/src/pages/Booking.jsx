import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const hotelId = searchParams.get('hotelId');

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      hotel: hotelId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      guests,
      totalPrice: 100, // You should calculate this based on hotel price and nights in backend or frontend
      status: 'booked',
      user: "YOUR_USER_ID", // For now hardcoded or you can integrate auth later
    };

    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      if (res.ok) {
        setMessage('Booking successful!');
      } else {
        setMessage('Booking failed.');
      }
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Book Your Stay</h1>
      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block mb-1">Check-in Date</label>
          <input
            type="date"
            required
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Check-out Date</label>
          <input
            type="date"
            required
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Guests</label>
          <input
            type="number"
            min="1"
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book Now
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
