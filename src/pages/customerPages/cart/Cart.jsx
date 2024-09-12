import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems,
         selectCartState,
         selectTotalAmount,
         setClearCartItems,
         setCloseCart, 
         setGetTotals } from '../../../app/CartSlice.js';
import CartCount from './CartCount';
import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import Checkout from './Checkout.jsx';

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  
  // Close Cart page
  const onCartToggle = () => {
      dispatch(setCloseCart({
          cartState: false
      }))
  }

  // clear all cart items

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  }

  // Calculate total amount of cart items
  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])

  return (
    <div className={`fixed top-0 right-0 blur-effect-theme w-full h-screen opacity-100 z-50
                    ${ifCartState ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-[100%]'}`}>
      <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
        {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : 
            <div>
              <div className='flex flex-col items-start justify-start gap-y-7 overflow-y-scroll scroll-smooth scroll-hidden mt-4  h-[65vh] lg:gap-y-5'>
                {cartItems?.map((item, i) => {
                  return <CartItem key={i} item={item} />
                })}
              </div>
              <div>
                <Checkout totalAmount={totalAmount} />
              </div>
            </div>
              }
      </div>
    </div>
  )
}

export default Cart;
