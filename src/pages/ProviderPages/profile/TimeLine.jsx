import React from 'react'
import profile from '../../../assets/profile.jpg';
import coverTimeLine from '../../../assets/coverTimeLine.jpg';

const TimeLine = ({StoreName, bio}) => {
  return (
    <div className='mb-20'>
      <div className='relative h-96 flex justify-center sm:h-72'>
        <img src={coverTimeLine} alt="cover photo" className='object-cover w-full h-full' />
        <div className='absolute -bottom-8'>
            <img src={profile} alt="profile photo" className='w-44 h-44 rounded-full border-4 border-white 
                                                              lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-32 sm:h-32 ' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-4 mt-16 md:mt-14 sm:mt-12'>
        <h1 className='text-3xl text-gray-900 font-bold md:text-2xl sm:text-xl'>
            {StoreName}
        </h1>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default TimeLine;
