import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProviderFormStepOne = ({ onNextClick, onBackClick }) => {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
      type: 'provider',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  

    const validate = () => {
      const newErrors = {};
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (Object.keys(formData.password).length < 8) newErrors.password = 'Password must be at least 8 characters';
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleNextClick = () => {
      // send data to the backend
        if (validate()) {
          console.log("User Information: ", formData)
          onNextClick();
        }
      };


  return (
    <div className="flex items-center justify-center mb-10 sm:min-h-full sm:my-0">
    <div className="max-w-md shadow-lg space-y-8 p-6 sm:shadow-none">
      <div>
        <h2 className="text-center text-2xl font-bold text-gray-700 md:text-xl">Create <span className='text-[#ff7a57]'>Provider</span> account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/sign" className="font-medium text-indigo-600 hover:text-indigo-500">
            sign in
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6 sm:mt-0">
        <div className="rounded-md shadow-sm space-y-4 sm:shadow-none">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Business Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onBackClick}
              className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNextClick}
              className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ProviderFormStepOne;
