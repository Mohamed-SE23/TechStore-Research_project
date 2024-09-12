import React from 'react'

const Checkout = ({ totalAmount }) => {
  return (
    <div className='fixed bottom-0 bg-white w-full p-5 grid items-center'>
      <div className='flex items-center justify-between'>
        <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
        <h1 className='text-sm rounded bg-theme-cart px-1 py-0.5 text-slate-100'>${totalAmount}</h1>
      </div>
      <div className='grid items-center gap-2'>
        <p className='text-center text-sm font-medium'>Taxes and Shipping Will Calculated At Shipping</p>
        <button 
            type='button'
            className='bg-theme-cart text-white rounded w-full py-1 active:scale-90'>
            Check Out
        </button>
      </div>
    </div>
  )
}

export default Checkout;
