import React from 'react'
import { useDispatch } from 'react-redux';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/20/solid';
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from '../../../app/CartSlice';

const CartItem = (
  { item: {id, img, title, description, price, cartQuantity},
}) => {
  const dispatch =  useDispatch();
  
  // Increase the quantity
  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({id, img, title, description, price, cartQuantity}))
  }

  // Decrease the quantity
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({id, img, title, description, price, cartQuantity}))
  }

  // Remove Item from cart
  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({id, img, title, description, price, cartQuantity}));
  }
  
  return (
    <>
    <div className='flex items-center justify-between space-x-1 w-full px-5 border-b pb-5'>
      <div className='flex items-center gap-5'>
        <div className='relative hover:scale-105 transition-all duration-75 ease-in-out grid items-center'>
          <img src={img} alt={`img/cart-img/${id}`} className='w-36 h-auto object-fill rounded lg:w:28' />
          <div className='absolute right-1 top-1 bg-theme-effect bg-white/80 text-black text-xs px-1 rounded'>
            ${price}
          </div>
        </div>
        <div className='grid items-center gap-4'>
          <div className='grid items-center leading-none'>
            <h1 className='font-semibold text-lg text-slate-900 lg:text-sm'>{title}</h1>
            <p className='text-sm text-slate-800 lg:text-xs'>{description}</p>
          </div>
          <div className='flex items-center justify-around w-full'>
            <button type='button'
                    onClick={onDecreaseItemQTY}
                    className='bg-theme-cart rounded flex items-center justify-center w-6 h-6 lg:w-5 lg:h-5 active:scale-90'>
              <MinusIcon className='w-5 h-5 text-white stroke-[2] lg:w-4 lg:h-4' />
            </button>
            <div className='bg-theme-cart rounded text-white font-medium flex items-center justify-center w-7 h-6 lg:text-xs lg:w-6 lg:h-5'>
              {cartQuantity}
            </div>
            <button type='button'
                    onClick={onIncreaseItemQTY}
                    className='bg-theme-cart rounded flex items-center justify-center w-6 h-6 lg:w-5 lg:h-5 active:scale-90'>
              <PlusIcon className='w-5 h-5 text-white stroke-[2] lg:w-4 lg:h-4' />
            </button>
          </div>
        </div>
      </div>
      <div className='grid items-center gap-8 lg:gap-5'>
        <div className='grid items-center justify-center'>
          <h1 className='text-lg font-medium text-slate-900 lg:text-base'>${price * cartQuantity}</h1>
        </div>
        <div className='grid items-center justify-center'>
          <button 
                  onClick={onRemoveItem}
                  type='button'
                  className='grid items-center justify-items-center bg-theme-cart p-1 rounded active:scale-90 lg:p-0.5'>
            <TrashIcon className='w-5 h-5 text-white' />
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartItem;
