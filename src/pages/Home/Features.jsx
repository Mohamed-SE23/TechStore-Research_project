import React from 'react'

import { landingapi } from '../../data/data';

import cover1 from "../../assets/cover1.png";
import cover2 from "../../assets/cover2.png";



const Features = () => {

  const Ufeatures = landingapi.features.users;
  const Bfeatures = landingapi.features.business;
  return (
      <div className='mt-36'>
        <div className='relative'>
          <h1 className='w-[60%] m-auto text-center text-4xl text-[#333] font-bold
                         md:text-2xl md:w-[50%] sm:text-lg'>
            <span className='text-[#ff7a57]'>Features</span> That Makes TechStore Different!
          </h1>
          <img src={cover1} alt="flowers" className='absolute right-0 -top-8 -z-10 md:w-3/12 md:h-3/12 md:-top-5' />
        </div>

          <div className='container'>
            <h1 className='mx-auto my-12 text-center text-2xl text-[#333] font-bold
                           md:text-xl sm:text-lg'>
              Users <span className='text-[#ff7a57]'>Features</span>
            </h1>
            <div className='md:flex-col md:space-y-16'>
              { Ufeatures.map((item, i) => {
                return (
                  <div 
                        key={i}
                        className='flex flex-row-reverse items-center gap-14 w-[65%] mb-16 p-8 shadow-lg rounded [&:nth-child(2)]:ml-auto
                                  lg:gap-4 md:flex-col md:m-auto md:w-[85%]'>
                    <img src={item.img} alt={item.title} className='h-[120px] w-auto lg:h-[160px]' />
                    <div>
                      <h1 className='text-[#575757] mb-2 text-xl font-semibold
                                      lg:text-lg'>
                        {item.title}
                      </h1>
                      <p className='text-[#575757] md:text-sm'>{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='mt-32 mb-20'>
            <div className='relative'>
              <h1 className='mx-auto my-12 text-center text-2xl text-[#333] font-bold'>Business Owners <span className='text-[#ff7a57]'>Features</span></h1>
              <img src={cover2} alt="flowers" className='absolute left-0 -top-8 -z-10 w-2/12 h-auto md: top-0' />
            </div>
            <div className='flex flex-col items-center justify-center w-[90%] mx-auto mt-20 md:flex-col md:space-y-16'>
              { Bfeatures.map((item, i) => {
                return (
                  <div 
                        key={i}
                        className='flex flex-row-reverse items-center gap-14 w-[65%] mb-16 p-8 shadow-md border border-[#ff7a57] rounded
                                 lg:gap-4 md:flex-col md:m-auto md:w-[85%]'>
                    <img src={item.img} alt={item.title} className='h-[120px] w-auto' />
                    <div>
                      <h1 className='text-[#575757] mb-2 text-xl font-semibold lg:text-lg'>{item.title}</h1>
                      <p  className='text-[#575757] md:text-sm'>{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
      </div>
  )
}

export default Features;
