import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import customer from '../../assets/customer.png';
import Brand from '../../components/structure/brand';
import toast from 'react-hot-toast';
import PageLoading from '../../components/reusable/PageLoading';
import { setUser } from '../../app/UserInfo';

const RegisterPage = ({ onBackClick }) => {
  const [formData, setFormData] = useState({
    type: '',
    gender: '',
    username: '',
    email: '',
    phone_number: '',
    location: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone_number) newErrors.phone_number = 'Phone number is required';
    if (!formData.location) newErrors.location = 'Please select a location';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      const data = new FormData();
      data.append('type', formData.type);
      data.append('gender', formData.gender);
      data.append('username', formData.username);
      data.append('email', formData.email);
      data.append('phone_number', formData.phone_number);
      data.append('location', formData.location);
      data.append('password', formData.password);

      setLoading(true); // Start loading

      try {
        const response = await axios.post('/api/v1/signup', data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
          },
        })
        setLoading(false); // end loading
        dispatch(setUser(response.data.data))
        console.log('Form submitted successfully:', response.data.message);
        toast.success(`${response.data.message}`);
        navigate('/verification');

      } catch (error) {
        setLoading(false); // end loading
        toast.error(`Error submitting form:, ${error.response?.data || error.message}`);
        console.error('Error submitting form:', error.response?.data || error.message);
      }
    }
  };

  return (
    <>
      {loading && <PageLoading />}
      <div className='text-center my-10 lg:my-6 md:my-4 sm:my-2'>
        <Brand />
      </div>
      <div className='flex mx-auto mb-20 w-[70%] rounded shadow-lg sm:w-full sm:shadow-none sm:items-start'>
        <div className='flex-none mr-10 lg:mr-0 md:hidden w-1/2 -ml-1'>
          <img src={customer} alt="customer" className='inset-0 w-full h-full object-cover' />
        </div>
        <div className="min-h-screen flex items-center justify-center w-1/2 py-8 lg:w-full lg:py-4 sm:min-h-full md:p-5 sm:px-6 lg:px-4">
          <div className="max-w-md w-full space-y-8 pr-7 lg:pr-0 lg:py-2">
            <div>
              <h2 className="text-center text-3xl font-bold text-gray-700">Welcome to Our Tech<span className='text-[#ff7a57]'>Store</span></h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/sign" className="font-medium text-indigo-600 hover:text-indigo-500">
                  sign in
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">

                {/* Account Type Field */}
                <div>
                  <label htmlFor="type" className="sr-only">Account Type</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  >
                    <option value="">Select Account type</option>
                    <option value="customer">Customer</option>
                    <option value="provider">Provider</option>
                  </select>
                  {formData.type === 'customer' && (
                    <p className="text-gray-600 text-sm mt-1">
                      This option allows you to browse stores and products.
                    </p>
                  )}
                  {formData.type === 'provider' && (
                    <p className="text-gray-600 text-sm mt-1">
                      This option allows you to create your own store and post products.
                    </p>
                  )}
                  {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                </div>

                {/* Username Field */}
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
                    className="appearance-none relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                {/* Gender Field */}
                <div>
                  <label htmlFor="gender" className="sr-only">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>

                {/* Email Field */}
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
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone_number" className="sr-only">Phone Number</label>
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Phone Number"
                  />
                  {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
                </div>

                {/* Location Field */}
                <div>
                  <label htmlFor="location" className="sr-only">Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  >
                    <option value="">Select Location</option>
                    <option value="White Nile State">White Nile State</option>
                    <option value="Port Sudan">Port Sudan</option>
                    <option value="kasala">kasala</option>
                    <option value="Atbara">Atbara</option>
                    <option value="Shendy">Shendy</option>
                  </select>
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>

                {/* Password Field */}
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
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-1.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className='flex space-x-3'>
                <button
                  type="button"
                  onClick={onBackClick}
                  className="group relative w-full flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
