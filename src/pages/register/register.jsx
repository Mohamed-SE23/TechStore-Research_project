import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Provider from "./provider/provider";
import CustomerRegister from "./customer";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [accountType, setAccountType] = useState(""); // Track account type

  const navigate = useNavigate();

  // Fetch account type from localStorage on component mount
  useEffect(() => {
    const savedAccountType = localStorage.getItem("accountType");
    if (savedAccountType) {
      setAccountType(savedAccountType); // Set the accountType from localStorage
    }
  }, []);

  // navigate to home page function 
  const handleCancelation = () => {
    navigate('/');
  }

  // targeting selected option
  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // sign selected option to account type and store in localStorage
  const handleNextClick = () => {
    setAccountType(selectedOption);
    localStorage.setItem("accountType", selectedOption); // Save to localStorage
  };

  // back click function
  const handleBackClick = () => {
    setAccountType(""); // Reset the account type to show the selection form
    localStorage.removeItem("accountType"); // Remove from localStorage when user goes back
  };

  
  
  return (
    <>
      {/* Selection Form */}
      {!accountType && (
        <div className="flex flex-col justify-center items-center border border-[#ff7a57] mt-[8%] px-8 py-12 mx-[30%] lg:mx-[%25] rounded md:mx-[20%] sm:mx-auto sm:border-none">
          <h1 className="text-2xl text-gray-800 text-center font-bold mb-10  
                          md:text-xl">
            Tech<span className="text-[#ff7a57]">Store</span> Account registration
          </h1>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl font-bold mb-4 lg:text-xl sm:text-sm">
              Select Account Type
            </h2>
            <div>
              <div className="flex flex-col gap-4">
                <label className="flex items-center">
                  <input
                      type="radio"
                      name="account"
                      value="customer"
                      checked={selectedOption === "customer"}
                      onChange={handleSelectionChange}
                      className="mr-2"
                  />
                  <span className="text-gray-700">Create <span className="text-[#ff7a75] font-semibold">customer</span> account</span>
                  </label>

                  <label className="flex items-center">
                  <input
                      type="radio"
                      name="account"
                      value="provider"
                      checked={selectedOption === "provider"}
                      onChange={handleSelectionChange}
                      className="mr-2"
                  />
                  <span className="text-gray-700">Create <span className="text-[#ff7a57] font-semibold">provider</span> account</span>
                  </label>
              </div>
              <div className="flex space-x-4 mt-8">
                <button
                    onClick={handleCancelation}
                    className="group relative w-full flex justify-center lg:mb-5 py-1 px-4 border border-transparent text-sm font-medium bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none"
                >
                    Cancel
                </button>
                <button
                    onClick={handleNextClick}
                    className={`group relative w-full flex justify-center lg:mb-5 py-1 px-4 border 
                                text-sm font-medium rounded focus:outline-none
                                ${selectedOption === "" ? ' text-gray-300 border-2 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600 border-transparent'}`}
                >
                    Next
                </button>
              </div>
            </div>

            </div>
          </div>
        )}

      {/* Conditional Rendering of Registration Forms */}
      {accountType === "provider" && <Provider onBackClick={handleBackClick} />}
      {accountType === "customer" && <CustomerRegister onBackClick={handleBackClick} />}
    </>
  );
};

export default Register;
