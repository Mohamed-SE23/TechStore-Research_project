import React from 'react'

const StoresLoading = () => {
  return (
    <div className='flex items-start justify-center'>
    <div className='grid grid-cols-4 items-center justify-center w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-8 mb-20'>
    {Array(8) // Create an array with 6 items to simulate 6 skeleton loaders
        .fill(null)
        .map((_, index) => (
            <div 
                key={index} 
                className='max-w-[14rem] w-full flex flex-col items-center justify-center mx-10 rounded shadow-lg bg-white transition-shadow duration-300 ease-in-out animate-pulse'>
            <div className='relative flex justify-center w-full'>
              <div className='rounded-t h-28 w-full bg-gray-300'></div>
              <div className='absolute w-28 h-28 rounded-full object-cover border-2 -bottom-16 bg-gray-300'></div>
            </div>
            <div className='mt-[4.5rem] flex flex-col gap-2 justify-center items-center w-full px-4'>
              <div className='text-center w-24 h-6 rounded bg-gray-300'></div>
              <div className='text-center w-44 h-12 rounded bg-gray-300'></div>
            </div>
            <div className='my-4'>
              <div className='mb-2 w-24 h-7 rounded-full bg-gray-300 '>
              </div>
            </div>
          </div>
        ))}
 
    </div>
    </div>
  )
}

export default StoresLoading;
