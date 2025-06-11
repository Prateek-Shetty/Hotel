

// pages/Hotels.jsx
import React from "react";

const Hotels = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Hotels List</h2>
      {/* Hotels data will be mapped here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Hotel Card */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-semibold">Belmond Hotel Caruso</h3>
          <p>Location: Amalfi Coast, Italy</p>
          <p>Price: ₹95,000/night (Deluxe)</p>
          <a
            href="https://www.google.com/maps?q=Belmond+Hotel+Caruso"
            target="_blank"
            className="text-blue-600 underline"
            rel="noreferrer"
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
