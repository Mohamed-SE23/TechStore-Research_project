import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectCurrentUser } from '../../../app/UserInfo';
import PageLoading from '../../../components/reusable/PageLoading'
import toast from 'react-hot-toast';

const PersonalDetails = () => {

  const [loading, setLoading] = useState(false);
  const user = useSelector(selectCurrentUser);

  const [personal, setPersonal] = useState({
    username: user.username,  // Example of pre-filled data
    phoneNumber: user.phone_number,
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setPersonal({
      ...personal,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic

    const token = user.token;
    const data = new FormData();
    data.append('username', personal.username);
    data.append('phone_number', personal.phoneNumber);

    try {
      setLoading(true);

      const response = await axios.put('/api/v1/account-update', data, {
        headers: {
          'Authorization': `Bearer ${token}`,  // Add the token here
        },
      });

      setLoading(false)
      toast.success('Information updated successful!');
      console.log(response);
    } catch (err) {
      setLoading(false)
      toast.error('Failed to update information');
      console.log(err)
    }
    console.log('Profile updated:', personal);
  };

  return (
    <>{loading && <PageLoading />}
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={personal.username}
            onChange={handleChange}
            required
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
          />
        </div>
        {/* Phone */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="phone number"
            value={personal.phoneNumber}
            onChange={handleChange}
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-[#ff7a57] text-white rounded hover:bg-[#f86642]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default PersonalDetails;
