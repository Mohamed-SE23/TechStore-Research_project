import React from 'react';

const SkeletonLoading = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 ease-in-out animate-pulse">
      {/* Image Section Skeleton */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Store Information Skeleton */}
      <div className='flex items-center justify-between px-3 mt-2'>
        <div className='flex items-center gap-0.5 '>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div> 
          <span className='w-16 h-3 bg-gray-300 rounded ml-1'></span>
        </div>
        <div>
        </div>
        <div className='flex items-center gap-0.5'>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span className='w-16 h-3 bg-gray-300 rounded'></span>
        </div>
      </div>

      {/* Product Info Skeleton */}
      <div className="mt-4 px-3">
        <div className="w-40 h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-12 mt-2 bg-gray-300 rounded"></div>
      </div>

      {/* Price and Button Skeleton */}
      <div className="p-6 flex justify-between items-center">
        <div className="w-16 h-6 bg-gray-300 rounded"></div>
        <div className="w-24 h-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
