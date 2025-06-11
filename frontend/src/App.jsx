import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import Hotels from "./pages/Hotels";
import TableManager from "./pages/TableManager";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page: No Navbar */}
        <Route path="/" element={<Home />} />

        {/* Pages with Navbar */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin-login" element={<AdminLogin />} />
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
