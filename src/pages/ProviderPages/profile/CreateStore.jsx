import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { selectCurrentUser } from '../../../app/UserInfo';
import PageLoading from '../../../components/reusable/PageLoading';


const CreateStore = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const user = useSelector(selectCurrentUser);

  const [formData, setFormData] = useState({
    storeName: '',
    bio: '',
    storeLocation: '',
    email: '',               // New email field
    phone_number: '',         // New phone number field
    operationTime: { opening: '', closing: '' }, // Updated field for operation time
    storeMediaAccount: '',
    profilePhoto: null,
    coverPhoto: null,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleOperationTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      operationTime: { ...formData.operationTime, [name]: value } 
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.storeName) newErrors.storeName = 'Store Name is required';
    if (!formData.email) newErrors.email = 'Email is required';  // Email validation
    if (!formData.phone_number) newErrors.phone_number = 'Phone number is required'; // Phone number validation
    if (!formData.storeLocation) newErrors.storeLocation = 'Store Location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      data.append('store_name', formData.storeName);
      data.append('store_location', formData.storeLocation);
      data.append('store_email', formData.email);
      data.append('store_phone_number', formData.phone_number);
      data.append('operation_times', JSON.stringify(formData.operationTime)); // Convert object to string
      data.append('social_media_accounts', formData.storeMediaAccount);
      data.append('store_bio', formData.bio);

          // Append file uploads
    if (formData.profilePhoto) {
      data.append('inner_image', formData.profilePhoto);
    }
    if (formData.coverPhoto) {
      data.append('outer_image', formData.coverPhoto);
    }

      console.log("Store Information: ", formData);

      setLoading(true); // Start loading

      try {
        const token = user.token;

        const response = await axios.post('/api/v1/stores/create-store', data, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,  // Add the token here
          },
        })

        setLoading(false);
        toast.success(`${response.data.message}`);

      } catch(error) {

        setLoading(false);
        console.log(error);
      }
    }
  };

  return (
    <>
    {loading && <PageLoading />}
    <div className='flex items-center justify-center mt-20'>
    <div className="max-w-md shadow-lg space-y-8 p-6 sm:p-0 sm:shadow-none">
      <h2 className="text-center text-xl font-bold text-gray-700 md:text-lg">Create Your <span className='text-[#ff7a57]'>Store</span></h2>
      <form className="mt-8 space-y-6 sm:mt-0" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4 sm:shadow-none">
          
          {/* Store Name Field */}
          <div>
            <label htmlFor="storeName" className="sr-only">Store Name</label>
            <input
              id="storeName"
              name="storeName"
              type="text"
              required
              value={formData.storeName}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Store Name"
            />
            {errors.storeName && <p className="text-red-500 text-sm mt-1">{errors.storeName}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Store Email"
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
              required
              value={formData.phone_number}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            />
            {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
          </div>
          
          {/* Store Location Field */}
          <div>
            <label htmlFor="storeLocation" className="sr-only">Store Location</label>
            <select
              id="storeLocation"
              name="storeLocation"
              value={formData.storeLocation}
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
            {errors.storeLocation && <p className="text-red-500 text-sm mt-1">{errors.storeLocation}</p>}
          </div>
          <div>
            <label htmlFor="bio" className="sr-only">Bio (optional)</label>
            <input
              id="bio"
              name="bio"
              type="text"
              value={formData.bio}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Bio (tell us about your store)"
            />
          </div>

          <div>
            <label htmlFor="storeMediaAccount" className="sr-only">Store social media account (if any)</label>
            <input
              id="storeMediaAccount"
              name="storeMediaAccount"
              type="text"
              value={formData.storeMediaAccount}
              onChange={handleChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Store social media account (if any)"
            />
          </div>
                 {/* Operation Time Field */}
          <div>
            <label className="text-gray-600 font-semibold">Operation Time:</label>
            <div className="space-y-2 my-3">
              <div className="flex items-center space-x-4">
                <label htmlFor="opening" className="text-gray-700 font-semibold">Opening:</label>
                <input
                  type="time"
                  name="opening"
                  value={formData.operationTime.opening}
                  onChange={handleOperationTimeChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Opening Time"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="closing" className="text-gray-700 font-semibold pr-2">Closing:</label>
                <input
                  type="time"
                  name="closing"
                  value={formData.operationTime.closing}
                  onChange={handleOperationTimeChange}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Closing Time"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="profilePhoto" className="text-gray-600 font-semibold">Picture from outside the store:</label>
            <input
              id="profilePhoto"
              name="profilePhoto"
              type="file"
              onChange={handleFileChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="coverPhoto" className="text-gray-600 font-semibold">Picture from inside the store:</label>
            <input
              id="coverPhoto"
              name="coverPhoto"
              type="file"
              onChange={handleFileChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
          
          <div className="flex space-x-3">
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
            >
              Create Store
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default CreateStore;
