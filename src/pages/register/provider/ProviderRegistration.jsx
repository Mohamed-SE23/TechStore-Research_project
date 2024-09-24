import React, { useEffect, useState } from 'react';
import ProviderFormStepOne from './ProviderFormStepOne';
import ProviderFormStepTwo from './ProviderFormStepTwo';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../app/UserInfo';
import { useNavigate } from 'react-router-dom';

const ProviderRegistration = ({onBackClick}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  
  // Check the step state in localStorage when the component mounts
  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      setCurrentStep(Number(savedStep)); // Convert to a number from string
    } else if (user.verified) {
      setCurrentStep(2);
      localStorage.setItem('currentStep', 2); // Save the step in localStorage
    }
  }, [user.verified]);

  // Handle the next step and save it in localStorage
  const handleNextClick = () => {
    if (user.verified) {
      setCurrentStep(2);
      localStorage.setItem('currentStep', 2); // Save the step to persist after reload
    } else {
      navigate('/verifyAccount')
    }
  };

  const handleBackClick = () => {
    setCurrentStep(1);
    localStorage.setItem('currentStep', 1); // Save the step to persist after reload
  };

  return (
    <div className="flex items-center justify-center px-4 sm:my-0 md:p-5 sm:px-6 lg:px-8">
      {currentStep === 1 ? (
        <ProviderFormStepOne
          onNextClick={handleNextClick}
          onBackClick={onBackClick}
        />
      ) : (
        <ProviderFormStepTwo
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
};

export default ProviderRegistration;
