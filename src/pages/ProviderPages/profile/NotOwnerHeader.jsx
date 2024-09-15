import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const NotOwnerHeader = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  return (
    <div className='flex items-center justify-end h-14 px-4 bg-white w-full'>
      <button
        type='button'
        onClick={handleBack}  // Attach the handleBack function to onClick
      >
        <ArrowRightIcon className='w-auto h-6 hover:text-[#ff7a57] md:h-5' />
      </button>
    </div>
  );
}

export default NotOwnerHeader;
