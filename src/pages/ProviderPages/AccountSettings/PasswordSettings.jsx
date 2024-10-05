import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectCurrentUser } from "../../../app/UserInfo";
import PageLoading from "../../../components/reusable/PageLoading";
import toast from "react-hot-toast";

const PasswordSettings = () => {
  const user = useSelector(selectCurrentUser);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  // validation
  const validate = () => {
    const newErrors = {};
    if (!passwords.oldPassword)
      newErrors.oldPassword = "Old Password is required";
    if (!passwords.newPassword)
      newErrors.newPassword = "New Password is required";
    if (!passwords.confirmNewPassword)
      newErrors.confirmNewPassword = "Confirm your new password";
    if (passwords.newPassword !== passwords.confirmNewPassword)
      newErrors.confirmNewPassword =
        "New Password and confirm new password must match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit logic
    if (validate()) {
      const token = user.token;
      const data = new FormData();
      data.append("oldPassword", passwords.oldPassword);
      data.append("newPassword", passwords.newPassword);

      try {
        setLoading(true);

        const response = await axios.put(
          "/api/v1/account-update-password",
          data,
          {
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`, // Add the token here
            },
          }
        );

        setLoading(false);
        toast.success("password updated successful!");
        console.log(response);
      } catch (err) {
        setLoading(false);
        toast.error("Failed to update password");
        console.log(err);
      }
      console.log("Password updated:", passwords);
    }
  };

  return (
    <>
      {loading && <PageLoading />}
      <div className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password */}
          <div className="flex justify-between items-center md:flex-col md:space-y-2 md:items-start">
            <label className="block text-sm font-semibold md:ml-1">
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              value={passwords.oldPassword}
              onChange={handleChange}
              required
              className="w-[70%] px-4 py-2 border rounded-md md:w-full"
            />
          </div>
          {errors.oldPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>
          )}

          {/* New Password */}
          <div className="flex justify-between items-center md:flex-col md:space-y-2 md:items-start">
            <label className="block text-sm font-semibold md:ml-1">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              className="w-[70%] px-4 py-2 border rounded-md md:w-full"
            />
          </div>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}

          {/* Confirm New Password */}
          <div className="flex justify-between items-center md:flex-col md:space-y-2 md:items-start">
            <label className="block text-sm font-semibold md:ml-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              value={passwords.confirmNewPassword}
              onChange={handleChange}
              className="w-[70%] px-4 py-2 border rounded-md md:w-full"
            />
          </div>
          {errors.confirmNewPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmNewPassword}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#ff7a57] text-white rounded hover:bg-[#f86642]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PasswordSettings;
