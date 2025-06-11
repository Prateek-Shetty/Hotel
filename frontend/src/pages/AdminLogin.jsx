
// pages/AdminLogin.jsx
import React from "react";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <form>
          <input
            type="text"
            placeholder="Admin Username"
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
          <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-black">
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;