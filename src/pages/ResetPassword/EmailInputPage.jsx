import React, { useState } from 'react';
import axios from 'axios';
import PageLoading from '../../components/reusable/PageLoading';
import toast from 'react-hot-toast';

const EmailInputStep = ({ email, setEmail, nextStep }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setLoading(true);
      const emailData = {email: email}
      const response = await axios.post("/api/v1/opt", emailData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      setLoading(false);
      toast.success(`${response.data.message}`);
      nextStep(); // Move to OTP step if successful
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
      console.log(err)
    }
  };

  return (
    <>
    {loading && <PageLoading />}
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
      <p className="text-center text-gray-600 mb-4">Enter your email to receive the reset code</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            placeholder='enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block p-2  w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button type="submit" className="w-full bg-theme-cart text-white py-2 rounded-md active:scale-90">Next</button>
      </form>
    </div>
    </>
  );
};

export default EmailInputStep;
