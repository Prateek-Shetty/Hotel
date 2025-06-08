import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TableManager from './pages/TableManager';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table-manager" element={<TableManager />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin"element={<ProtectedRoute><AdminPanel /></ProtectedRoute>
  }
/>
      </Routes>
    </Router>
  );
}
