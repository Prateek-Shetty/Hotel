import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">🏨 HotelBooking</h1>
      <div className="flex gap-4 text-sm font-medium">
        <Link to="/hotels" className="hover:text-blue-500">Hotels</Link>
        <Link to="/tables" className="hover:text-blue-500">Tables</Link>
        <Link to="/admin" className="hover:text-blue-500">Admin</Link>
        <Link to="/" className="hover:text-blue-500">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
