import React, { useState } from 'react';

const ProviderFormStepTwo = ({ formData, handleFileChange, onBackClick, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.profilePhoto) newErrors.profilePhoto = 'Please choose a profile picture';
    if (!formData.coverPhoto) newErrors.coverPhoto = 'Please choose a cover picture';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validate()) {
      // must send the data to the server
      console.log(formData)
    }
  };

  return (
    <div className="max-w-md shadow-lg space-y-8 p-8 sm:shadow-none">
      <h2 className="text-center text-2xl font-bold text-gray-700 md:text-xl sm:text-lg">Upload Your Photos</h2>
      <form className="mt-8 space-y-6 sm:mt-0" onSubmit={onSubmit}>
        <div className="rounded-md shadow-sm space-y-4 sm:shadow-none">
          <div>
            <label htmlFor="profilePhoto" className="text-gray-600 font-semibold">Picture from outside the store:</label>
            <input
              id="profilePhoto"
              name="profilePhoto"
              type="file"
              onChange={handleFileChange}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            {errors.profilePhoto && <p className="text-red-500 text-sm mt-1">{errors.profilePhoto}</p>}
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
            {errors.coverPhoto && <p className="text-red-500 text-sm mt-1">{errors.coverPhoto}</p>}
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
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProviderFormStepTwo;
