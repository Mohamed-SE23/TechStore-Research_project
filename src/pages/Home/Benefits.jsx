import React from 'react'
import benefits from '../../assets/benefits.png'

const Benefits = () => {
  return (
    <div className='container flex flex-col items-center mb-10'>
      <h1 className='text-3xl text-[#333] text-center font-bold w-[50%] mb-16 mt-10 lg:text-2xl md:mt-0 md:text-lg sm:text-md sm:w-full'>
        Connect You With The Closest <span className='text-[#FF7A57]'>Store</span> To You
        </h1>
      <img src={benefits} alt="map/image" />
    </div>
  )
}

export default Benefits;
