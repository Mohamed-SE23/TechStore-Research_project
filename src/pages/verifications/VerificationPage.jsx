import React, { useState, useEffect } from "react";

const VerificationPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Function to start the countdown
  const startCountdown = () => {
    setIsButtonDisabled(true); // Disable the button
    setTimeRemaining(300); // 10 minutes in seconds

    const intervalId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === 1) {
          clearInterval(intervalId);
          setIsButtonDisabled(false); // Re-enable the button after 10 minutes
        }
        return prev - 1;
      });
    }, 1000); // Update every second
  };

  const onResendClick = () => {
    console.log("Resend link")
  }
  // Triggered when the resend button is clicked
  const handleResendClick = () => {
    onResendClick(); // Custom resend action (API call or other logic)
    startCountdown(); // Start the countdown
  };

  // Format time into minutes:seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md -mt-20 w-full text-center">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 md:text-xl sm:text-lg">
          Tech<span className="text-[#ff7a57]">Store</span> Account Verification
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
              ${isButtonDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          >
            {isButtonDisabled ? `Resend in ${formatTime(timeRemaining)}` : "Resend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
