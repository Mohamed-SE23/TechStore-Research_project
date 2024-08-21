import React from 'react'
import heroImg from '../../assets/hero.png'
import hero2 from '../../assets/hero2.png'

const Hero = () => {
  return (
    <div className='container relative h-[80%] flex justify-between p-8'>
      <div className='mt-[10%] md:mt-[7%] sm:mt-0'>
        <h1 className='text-4xl text-[#333333] md:text-2xl sm:text-xl font-bold'>
            TechStore
        </h1>
        <p className='text-md md:text-sm sm:text-xs text-gray-600 mt-1' >
            we've got everything to stay ahead.
           shop now and experience innovations
           at your fingerprints.
        </p>
      </div>
        <div>
            <img src={heroImg} alt='landingPage'
            className='w-full h-auto' />
        </div>
        <div className='absolute bottom-5 left-7'>
            <img src={hero2} className='w-11/12 h-11/12 lg:w-9/12 lg:h-9/12 md:w-7/12 md:h-7/12 sm:w-3/12 sm:h-3/12' />
        </div>
    </div>
  )
}

export default Hero;
