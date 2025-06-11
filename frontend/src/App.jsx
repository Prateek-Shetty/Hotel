import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Hotels from "./pages/Hotels";
import TableManager from "./pages/TableManager";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar2 from "./components/Navbar2";
import Navbar1 from "./components/Navbar1";

const AppWrapper = () => {
  const location = useLocation();

  // Show Navbar2 only on routes other than "/"
  const showNavbar2 = location.pathname !== "/";

  return (
    <>
      {showNavbar2 && <Navbar2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tablemanager" element={<TableManager />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;
