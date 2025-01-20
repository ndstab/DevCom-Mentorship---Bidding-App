import React, { useState } from 'react';
import { assets } from '../assets/assets/assets.js';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [state, setState] = useState('Sign-Up');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (state === 'Sign-Up' && formData.username.trim() === '') {
      setError('Username is required.');
      return;
    }
    if (formData.email.trim() === '') {
      setError('Email is required.');
      return;
    }
    if (formData.password.trim() === '') {
      setError('Password is required.');
      return;
    }

    // Clear error and navigate to landing page
    setError('');
    navigate('/landing');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-200 to-purple-400">
      <div className="bg-slate-900 p-10 w-96 rounded-lg">
        <h2 className="text-3xl font-semibold mb-5 text-white justify-self-center">
          {state === 'Login' ? 'Login' : 'Register'}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} autoComplete='off'>
          {state === 'Sign-Up' && (
            <div className="flex mb-4 gap-3 px-5 py-3 items-center w-full rounded-full bg-[#333A5C]">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="bg-transparent text-white"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="flex mb-4 gap-3 px-5 py-3 items-center w-full rounded-full bg-[#333A5C]">
            <img src={assets.mail_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex mb-4 gap-3 px-5 py-3 items-center w-full rounded-full bg-[#333A5C] ">
            <img src={assets.lock_icon} alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent text-white"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p
            onClick={() => navigate('/forgot-password')}
            className="mb-4 text-sm text-indigo-500 cursor-pointer"
          >
            Forgot Password?
          </p>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full w-full"
          >
            {state === 'Sign-Up' ? 'Create Account' : 'Login'}
          </button>
        </form>
        <div className="text-sm mt-2">
          {state === 'Sign-Up' ? (
            <p className="text-gray-400 text-center text-xs mt-4">
              Already have an account?
              <span
                onClick={() => setState('Login')}
                className="text-blue-400 cursor-pointer underline"
              >
                {' '}
                Login here
              </span>
            </p>
          ) : (
            <p className="text-gray-400 text-center text-xs mt-4">
              Don't have an account?{' '}
              <span
                onClick={() => setState('Sign-Up')}
                className="text-blue-400 cursor-pointer underline"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
