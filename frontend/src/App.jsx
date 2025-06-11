import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hotels from "./pages/Hotels";
import TableManager from "./pages/TableManager";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home has NO Navbar */}
        <Route path="/" element={<Home />} />

        {/* All other routes WITH Navbar */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/tablemanager" element={<TableManager />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;