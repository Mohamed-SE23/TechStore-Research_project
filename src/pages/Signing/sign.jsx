import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Brand from '../../components/structure/brand';

const SignInPage = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State to hold errors
  const [errors, setErrors] = useState({});

  // errors validations 
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "email is required";
    if (!formData.password) newErrors.password = "password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Cancelations
  const navigate = useNavigate();
  const handleCancelation = () => {
    navigate('/');
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()){

        // Here you can send formData to your backend or handle it as needed
        console.log('Form Data:', formData);
        // Example: You could use fetch or axios to send formData to an API
        // fetch('/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(formData),
        // })
        // .then(response => response.json())
        // .then(data => {
        //   // Handle response data
        //   console.log('Success:', data);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
    }
  };

  return (
    <div className="flex flex-col gap-8 px-10 items-center justify-center">
      <div className='mt-10'>
        <Brand />
      </div>
      <div className="max-w-md w-full bg-white p-8 rounded-lg border border-[#ff7a57] shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-700 mb-6">Sign In</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className='flex space-x-3'>
                <button
                  type="button"
                  onClick={handleCancelation}
                  className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
                >
                  Sign in
                </button>
              </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
