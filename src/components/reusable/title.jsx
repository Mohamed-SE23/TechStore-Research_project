import React from 'react'

const Title = ({name}) => {
  return (
    <div className='container mt-20 mb-14 relative w-full border-t h-auto border-[#FF7A57]'>
        <div className='absolute -top-6 left-1/2 transform -translate-x-1/2
                bg-white text-center text-4xl px-8 font-bold text-gray-700
                    lg:text-2xl lg:-top-5 md:text-xl sm:text-sm sm:-top-4'>
        <h1>{name}</h1>
        </div>
    </div>
  )
}

export default Title;
