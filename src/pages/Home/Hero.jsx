import React from 'react'
import heroImg from '../../assets/hero.png'
import hero2 from '../../assets/hero2.png'

const Hero = () => {
  return (
    <div className='w-11/12 m-auto relative h-[80%] flex justify-between p-8'>
      <div className='mt-[10%] lg:mt-[6%] md:mt-[4%] sm:mt-0'>
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
        <div className='absolute bottom-5 left-7 -z-10'>
            <img src={hero2} className='w-10/12 h-10/12 lg:w-8/12 lg:h-8/12 md:w-6/12 md:h-6/12 sm:w-3/12 sm:h-3/12 xsm:hidden' />
        </div>
    </div>
  )
}

export default Hero;
