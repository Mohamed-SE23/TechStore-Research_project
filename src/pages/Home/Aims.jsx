import React from 'react'
import { landingapi } from '../../data/data';

const Aims = () => {

    const aimItem = landingapi.aims;
  return (
    <div className='container my-20 relative w-full border-t h-auto border-[#FF7A57]'>
      <div className='absolute -top-6 left-1/2 transform -translate-x-1/2
                 bg-white text-center text-4xl px-8 font-bold text-[#757575]
                     lg:text-2xl lg:-top-5 md:text-xl sm:text-sm sm:-top-4'>
        <h1>Our <span className='colorb'>Visions</span> & <span className='colorb'>Goals</span></h1>
      </div>

      <div className='flex justify-between gap-16 h-auto items-start mt-52 [&>*:nth-child(2n)]:mt-[-6rem]
                      xl:gap-10 lg:flex-col lg:space-y-8 lg:mt-20'>
        { aimItem.map((aim, i) => {
            return (

                <div className='flex flex-col items-center space-y-4 p-8 h-full shadow-md
                                lg:flex-row lg:items-center lg:space-x-8 sm:flex-col sm:space-x-0'>

                    <img className='w-auto h-[122px]' key={i} src={aim.img} alt={aim.title} />

                    <div className=''>
                        <h1 className='text-xl font-bold text-center text-[#333] mb-5 lg:text-start md:text-md sm:text-center sm:text-sm'>
                            {aim.title}
                        </h1>
                        <p className='text-[#757575] h-11/12 sm:text-sm md:text-md'>{aim.description}</p>
                    </div>
                </div>  
            )
        })
        }
      </div>
    </div>
  )
}

export default Aims;
