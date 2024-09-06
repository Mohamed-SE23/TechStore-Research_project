import React, { useState } from 'react';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    username: 'current_username',  // Example of pre-filled data
    bio: 'This is a sample bio.',
    location: 'Atbara',
    phone: '123-456-7890',
    profilePhoto: null,
    coverPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfile({
      ...profile,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
    console.log('Profile updated:', profile);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={profile.username}
            onChange={handleChange}
            required
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
          />
        </div>

        {/* Bio */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
            placeholder="Tell us a little about yourself"
          />
        </div>

        {/* Location */}

        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Location</label>
          <select
            id="location"
            name="location"
            value={profile.location}
            onChange={handleChange}
            required
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
          >
              <option value="White Nile state">White Nile state</option>
              <option value="Atbara">Atbara</option>
              <option value="Port Sudan">Port Sudan</option>
              <option value="Kasala">Kasala</option>
              <option value="Shendy">Shendy</option>
          </select>
        </div>

        {/* Phone */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:w-full md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            value={profile.phone}
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
  );
};

export default ProfileSettings;
