import { useState } from 'react';
import { registerUser } from '../api';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(formData);
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <input name="name" type="text" onChange={handleChange} placeholder="Name" className="w-full p-2 border" />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" className="w-full p-2 border" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" className="w-full p-2 border" />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Sign Up</button>
    </form>
  );
};

export default Signup;
