import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";

const Register = () => {
  const navigate = useNavigate();

  // navigate to home page function 
  const handleCancelation = () => {
    navigate('/');
  }


  return (
    <>
      {/* Account Registration page */}
          <RegisterPage 
                onBackClick={handleCancelation} /> 
    </>
  );
};

export default Register;
