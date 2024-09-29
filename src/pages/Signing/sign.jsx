import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Brand from "../../components/structure/brand";
import {
  setCustomerOwner,
  setProductOwner,
  setUser,
  setUserType,
  setUserVerified,
} from "../../app/UserInfo";
import toast from "react-hot-toast";
import PageLoading from "../../components/reusable/PageLoading";

const SignInPage = () => {
  // dispatch
  const dispatch = useDispatch();

  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to hold errors
  const [errors, setErrors] = useState({});

  // set is loading
  const [loading, setLoading] = useState(false);

  // errors validations
  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Cancelations
  const navigate = useNavigate();
  const handleCancelation = () => {
    navigate("/");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true); // Start loading
      try {
        const response = await axios.post("/api/v1/signin", formData, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

        dispatch(setUser(response.data.data));
        dispatch(setUserVerified(true));
        dispatch(setCustomerOwner(false));
        dispatch(setProductOwner(true));
        setLoading(false); // Stop loading after success
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoading(false); // Stop loading after failure
        if (
          error.response.status === 500 &&
          error.response.data.message === undefined
        ) {
          toast.error(`Internal Server error`);
        } else {
          toast.error(`${error.response.data.message}`);
        }
      }
    }
  };

  return (
    <>
      {loading && <PageLoading />}
      <div className="flex flex-col gap-8 px-4 items-center justify-center sm:px-6">
        <div className="mt-10">
          <Brand />
        </div>

        {/* sign in header */}
        <div className="max-w-md w-full bg-white p-8 rounded-lg border border-[#ff7a57] sm:p-0x sm:border-none ">
          <h2 className="text-center text-3xl font-bold text-gray-700 mb-6">
            Sign In
          </h2>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up here
              </Link>
            </p>
          </div>

          {/* sign in form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* email section */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* password section */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}

              {/* Forgot password link */}
              <div className="mt-2 text-right">
                <Link
                  to="/reset-password"
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleCancelation}
                className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                disabled={loading} // Disable button when loading
              >
                Cancel
              </button>
              <button
                type="submit"
                className="group relative w-full flex justify-center lg:mb-5 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff7a57] hover:bg-[#ff6739] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff6739]"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
