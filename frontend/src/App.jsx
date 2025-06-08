import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tailwind is Working! 🚀</h1>
        <p className="text-lg text-gray-600">You have successfully set up Tailwind CSS with React + Vite.</p>
      </div>
    </div>
  );
}

export default App;
