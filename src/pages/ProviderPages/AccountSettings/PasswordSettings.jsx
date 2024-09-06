import React, { useState } from 'react';

const PasswordSettings = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }
    // Submit logic
    console.log('Password updated:', passwords);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Old Password */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={handleChange}
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
          />
        </div>

        {/* New Password */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:items-start">
          <label className="block text-sm font-semibold md:ml-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            className="w-[70%] px-4 py-2 border rounded-md md:w-full"
          />
        </div>

        {/* Confirm New Password */}
        <div className="flex justify-between items-center md:flex-col md:space-y-2 md:items-start">
          <label className="block text-sm font-semibold md:ml-1">Confirm Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={passwords.confirmNewPassword}
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

export default PasswordSettings;
