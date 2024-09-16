import React, { useState } from 'react';

const ProviderFormStepTwo = ({ onBackClick, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    storeName: '',
    bio: '',
    storeLocation: '',
    operationTime: '',
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


  const validate = () => {
    const newErrors = {};
    if (!formData.storeName) newErrors.storeName = 'Store Name is required';
    if (!formData.storeLocation) newErrors.storeLocation = 'Store Location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
      // must send the data to the server
      console.log("store Information: " , formData)
    }
  };

  return (
    <div className="max-w-md shadow-lg space-y-8 p-6 sm:p-0 sm:shadow-none">
      <h2 className="text-center text-xl font-bold text-gray-700 md:text-lg">Your <span className='text-[#ff7a57]'>Store</span> Info</h2>
      <form className="mt-8 space-y-6 sm:mt-0" onSubmit={onSubmit}>
        <div className="rounded-md shadow-sm space-y-4 sm:shadow-none">
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
            {errors.storeLocation && <p className="text-red-500 text-sm mt-1">{errors.storeLocation}</p>}
          </div>
          <div>
            <label htmlFor="storeName" className="sr-only">Bio (optional)</label>
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
            <label htmlFor="storeName" className="sr-only">Store social media account (if any)</label>
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
              type="button"
              onClick={onBackClick}
              className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
            >
              Back
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProviderFormStepTwo;
