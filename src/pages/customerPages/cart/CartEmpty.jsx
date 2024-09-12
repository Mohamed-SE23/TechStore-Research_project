import React from 'react'
import emptybag from '../../../assets/emptybag.png'
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

const CartEmpty = ({ onCartToggle }) => {

  return (
    <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
      <img 
            src={emptybag} 
            alt="emptybag/png"
            className='w-40 h-auto object-fill transition-all duration-300 hover:scale-110 lg:w-36 sm:w-28 ' 
       />
       <button 
            type='button'
            onClick={onCartToggle}
            className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500
                       flex items-center justify-center text-slate-900 py-2 px-5 gap-3 text-sm font-semibold active:scale-110'
            >
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span>
                Back to TechStore
            </span>
       </button>
    </div>
  )
}

export default CartEmpty;
