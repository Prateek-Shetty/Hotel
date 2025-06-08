import { Navigate } from 'react-router-dom';

// Example: assuming you're storing the token in localStorage after login
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
