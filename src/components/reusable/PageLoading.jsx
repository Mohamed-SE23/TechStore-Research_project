import React from 'react'
import Loading from './Loading';

const PageLoading = () => {
  return (
    <>
    <div className='absolute top-0 bottom-0 h-[200vh] z-20 w-full bg-white opacity-50'>
    </div>
      <div className='opacity-1 absolute flex items-center justify-center w-full z-50 h-screen'>
         <Loading />
      </div>
      </>
  )
}

export default PageLoading;
