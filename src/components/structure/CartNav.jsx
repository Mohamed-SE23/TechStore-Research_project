import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../app/CartSlice';

const CartNav = ({onCartToggle}) => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div>
      <button 
         onClick={onCartToggle}
         type='button'
         className='border-none outline-none hover:text-[#ff7a57] mr-2 relative'>
        <div>Cart</div>
        <div className='absolute -top-1 -right-3 bg-theme-cart text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full'>
          {cartItems.length}  
          </div>
      </button>
    </div>
  )
}

export default CartNav;
