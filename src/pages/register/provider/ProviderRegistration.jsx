import React, { useState } from 'react';
import ProviderFormStepOne from './ProviderFormStepOne';
import ProviderFormStepTwo from './ProviderFormStepTwo';

const ProviderRegistration = ({onBackClick}) => {
  const [formData, setFormData] = useState({
    type: 'provider',
    username: '',
    email: '',
    phone: '',
    storeName: '',
    bio: '',
    storeLocation: '',
    operationTime: '',
    storeMediaAccount: '',
    profilePhoto: null,
    coverPhoto: null,
    password: '',
    confirmPassword: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleNextClick = () => {
    setCurrentStep(2);
  };

  const handleBackClick = () => {
    setCurrentStep(1);
  };

  return (
    <div className="flex items-center justify-center px-4 sm:my-0 md:p-5 sm:px-6 lg:px-8">
      {currentStep === 1 ? (
        <ProviderFormStepOne
          formData={formData}
          handleChange={handleChange}
          onNextClick={handleNextClick}
          onBackClick={onBackClick}
        />
      ) : (
        <ProviderFormStepTwo
          formData={formData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default ProviderRegistration;
