import React from 'react';
import coverTimeLine from '../../../assets/coverTimeLine.jpg';
import laptop from '../../../assets/laptop.jpg';
import { useNavigate } from 'react-router-dom';

const StoreCard = ({storeName, inner_image, outer_image, ownerId, bio}) => {
  const navigate = useNavigate();
  // Navigate to the store 
  const handleNavigate = () => {
    navigate(`/${ownerId}/profile`)
  }

  return (
    <div className='max-w-[14rem] w-full flex flex-col items-center justify-center bg-white mx-10 rounded shadow-lg'>
      <div className='relative flex justify-center w-full'>
        <img src={inner_image} alt="store-innerImage" className='rounded-t h-28 w-full object-cover' />
        <img src={outer_image} alt="store-innerImage" className='absolute w-28 h-28 rounded-full object-cover border-2 border-white -bottom-16' />
      </div>
      <div className='mt-20 flex flex-col gap-1 justify-center items-center w-full px-4'>
        <h3 className='font-semibold text-lg text-center break-words'>{storeName}</h3>
        <p className='text-center px-4 break-all'>{bio}</p>
      </div>
      <div className='my-4'>
        <button
            type='button'
            onClick={handleNavigate}
            className='py-0.5 px-6 mb-2 text-[#ff7a57] border-2 border-[#ff7a57] rounded-full hover:bg-[#ff7a57] hover:text-white '>
            review
        </button>
      </div>
    </div>
  )
}

export default StoreCard;
