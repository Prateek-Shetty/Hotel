import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">HotelBooking</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/hotels">Hotels</Link>
      <Link to="/table-manager">Tables</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </nav>
);
export default Navbar;
