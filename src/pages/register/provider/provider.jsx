import React, { useState } from 'react';
import Brand from '../../../components/structure/brand';
import ProviderRegistration from './ProviderRegistration';

const Provider = ({onBackClick}) => {
  return (
    <>
      <div className='text-center mt-10 mb-2 sm:mb-0'>
        <Brand />
      </div>
      <ProviderRegistration onBackClick={onBackClick} />
    </>
  );
}

export default Provider;



// <div>
// <label htmlFor="profilePhoto" className="sr-only">Profile Picture</label>
// <input
//   id="profilePhoto"
//   name="profilePhoto"
//   type="file"
//   onChange={handleFileChange}
//   className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
// />
// </div>