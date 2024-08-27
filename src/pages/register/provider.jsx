import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../../components/structure/brand';

const Provider = ({onBackClick}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    storeName: '',
    bio: '',
    storeLocation: '',
    operationTime: '',
    storeMediaAccount: '',
    profilePicture: null,
    password: '',
    confirmPassword: ''
  });

  // sign value to form data element
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // sign picture to the formData
  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  // submit function to send to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, validation, etc.
    console.log(formData);
  };


  return (
    <>
      <div className='text-center my-10'>
        <Brand />
      </div>
      <div className="min-h-screen flex items-center justify-center my-10 px-4 md:p-5 sm:px-6 lg:px-8">
        <div className="max-w-md shadow-lg space-y-8 p-8">
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-700">Create <span className='text-[#ff7a57]'>Provider</span> account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/sign" className="font-medium text-indigo-600 hover:text-indigo-500">
                sign in
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
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
              </div>
              <div>
                <label htmlFor="storeName" className="sr-only">Store Name</label>
                <input
                  id="storeName"
                  name="storeName"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Store Name"
                />
              </div>
              <div>
                <label htmlFor="storeLocation" className="sr-only">Store Location</label>
                <select
                  id="storeLocation"
                  name="storeLocation"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
                  <option value="">Select Store Location</option>
                  <option value="White Nile state">White Nile state</option>
                  <option value="Atbara">Atbara</option>
                  <option value="Port Sudan">Port Sudan</option>
                  <option value="Kasala">Kasala</option>
                  <option value="Shendy">Shendy</option>
                </select>
              </div>
              <div>
                <label htmlFor="storeName" className="sr-only">Bio (optional)</label>
                    <input
                    id="bio"
                    name="bio"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Bio (optional)"
                    />
              </div>
              <div>
                <label htmlFor="storeName" className="sr-only">Store social media account (if any)</label>
                    <input
                    id="storeMediaAccount"
                    name="storeMediaAccount"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Store social media account (if any)"
                    />
              </div>
              <div>
                <label htmlFor="profilePicture" className="sr-only">Profile Picture</label>
                <input
                  id="profilePicture"
                  name="profilePicture"
                  type="file"
                  onChange={handleFileChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
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
              </div>
            </div>

            <div className='flex space-x-3'>
              <button
                type="submit"
                className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
              >
                Register
              </button>
              <button
                type="submit"
                onClick={onBackClick}
                className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              >
                Back
              </button>
            </div>
          </form>
        </div>
    </div>
    </>
  );
}

export default Provider;
