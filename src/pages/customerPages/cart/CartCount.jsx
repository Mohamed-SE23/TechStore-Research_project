import React from 'react'
import { useSelector } from 'react-redux';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ChevronDoubleLeftIcon } from '@heroicons/react/20/solid';
import { selectCartItems } from '../../../app/CartSlice';

const CartCount = ({ onCartToggle, onClearCartItems }) => {

  const cartItems = useSelector(selectCartItems);

  // Clear all cart items
  const handleClearItems = () => {
    const userConfirmed = window.confirm("Are you sure you want to Clear all items from the cart?");
        
    if (userConfirmed) {
      // Perform Clear operation
      onClearCartItems();
    } 
  }

  return (
    <div className='flex items-center justify-between h-14 bg-white px-4 sticky top-0 left-0 right-0'>
        <div className='flex items-center justify-between w-full'>
          <div 
              onClick={onCartToggle}
              className='flex items-center space-x-1 text-slate-900 hover:text-orange-500 cursor-pointer'>
            <ChevronDoubleLeftIcon 
                    className='w-5 h-5  stroke-[2]'
                    />
            <span className='text-sm'>Back</span>
          </div>
          <div className='grid items-center'>
            <h2 className='flex items-center font-medium'>Your Cart 
              <span className='bg-theme-cart text-white px-1 py-0.5 ml-2 text-xs font-normal  rounded'>
                {cartItems.length === 1 ? `(${cartItems.length} item)` : `(${cartItems.length} items)`} 
              </span>
            </h2>
          </div>
        </div>
        <div className='flex items-center justify-end w-3/5 sm:w-1/2'>
            {cartItems?.length !== 0 && 
                  <button 
                          type='button' 
                          onClick={handleClearItems}
                          className='bg-theme-cart rounded active:scale-90 hover:scale-90 p-0.5'>
                      <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
                  </button>
          }
        </div> 
    </div>
  )
}

export default CartCount;
