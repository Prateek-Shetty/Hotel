
// pages/Signup.jsx
import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User Signup</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
