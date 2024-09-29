import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../app/UserInfo";
import axios from "axios";
import PageLoading from "../../components/reusable/PageLoading";
import toast from "react-hot-toast";

const VerificationPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  // Function to start the countdown
  const startCountdown = (duration) => {
    const endTime = Date.now() + duration * 1000; // Calculate the end time in milliseconds
    localStorage.setItem("resendCountdown", endTime); // Store the end time in localStorage
    setIsButtonDisabled(true); // Disable the button
    updateRemainingTime(endTime); // Start countdown
  };

  // Function to update the remaining time
  const updateRemainingTime = (endTime) => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const secondsLeft = Math.round((endTime - currentTime) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(intervalId);
        setIsButtonDisabled(false); // Re-enable the button
        setTimeRemaining(0);
        localStorage.removeItem("resendCountdown"); // Clear localStorage after countdown finishes
      } else {
        setTimeRemaining(secondsLeft);
      }
    }, 1000); // Update every second
  };

  // Check if there's a countdown in progress when the component mounts
  useEffect(() => {
    const storedEndTime = localStorage.getItem("resendCountdown");
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime, 10);
      const currentTime = Date.now();
      const secondsLeft = Math.round((endTime - currentTime) / 1000);

      if (secondsLeft > 0) {
        setIsButtonDisabled(true);
        setTimeRemaining(secondsLeft);
        updateRemainingTime(endTime);
      } else {
        localStorage.removeItem("resendCountdown");
      }
    }
  }, []);

  const onResendClick = async () => {
    if (!user?.email) {
      toast.error("User email not found");
      return;
    }

    const emailData = { email: user.email }; // JSON object to send to the backend
    console.log(emailData);

    try {
      setLoading(true);

      const response = await axios.post("/api/v1/resend-confirmation", emailData, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setLoading(false); // end loading
      // console.log('Form submitted successfully:', response.data.message);
      toast.success(`${response.data.message}`);
    } catch (error) {
      setLoading(false); // end loading
      toast.error(
        `Error submitting form:, ${error.message}`
      );
      console.log(
        "Error submitting form:",
        error.message
      );
    }
  };

  // Triggered when the resend button is clicked
  const handleResendClick = () => {
    onResendClick(); // Custom resend action (API call or other logic)
    startCountdown(10); // Start the countdown for 10 minutes (600 seconds)
  };

  // Handle email verification after user confirms
  const handleVerification = () => {
    navigate("/sign"); // Navigate to some route after verification
  };

  // Format time into minutes:seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <>
      {loading && <PageLoading />}
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md -mt-20 w-full text-center">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6 md:text-xl sm:text-lg">
            Tech<span className="text-[#ff7a57]">Store</span> Account
            Verification
          </h1>

          {/* Information Text */}
          <p className="text-gray-700 mb-6">
            We sent a link to your email. Click on it to verify your account.
          </p>

          {/* Resend Section */}
          <div className="mt-4">
            <p className="text-gray-600 mb-2">I didn't receive a link?</p>
            <button
              onClick={handleResendClick}
              disabled={isButtonDisabled}
              className={`py-2 px-4 font-semibold rounded focus:outline-none
              ${
                isButtonDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {isButtonDisabled
                ? `Resend in ${formatTime(timeRemaining)}`
                : "Resend"}
            </button>
          </div>

          {/* Email Verified Section */}
          <div className="mt-6">
            <p className="text-gray-600 mb-2">
              Yes, I received the email and I clicked the link
            </p>
            <button
              onClick={handleVerification}
              className="py-1 px-4 font-semibold rounded bg-theme-cart text-white active:scale-90 focus:outline-none"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
