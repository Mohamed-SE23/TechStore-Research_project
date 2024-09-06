import React, { useState } from 'react';

const EmailSettings = () => {
  const [email, setEmail] = useState({
    currentEmail: 'current_email@example.com',
    newEmail: '',
  });

  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
    console.log('Email updated:', email);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Change Email</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Current Email */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:space-y-2">
          <label className="block text-sm font-semibold md:ml-1">Current Email</label>
          <input
            type="email"
            value={email.currentEmail}
            disabled
            className="w-[70%] px-4 py-2 border rounded-md md:w-full bg-gray-100"
          />
        </div>

        {/* New Email */}
        <div className="flex justify-between items-center md:flex-col md:items-start md:space-y-2">
          <label className="block text-sm font-semibold md:ml-1">New Email</label>
          <input
            type="email"
            name="newEmail"
            value={email.newEmail}
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

export default EmailSettings;
