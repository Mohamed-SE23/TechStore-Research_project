import React from 'react'
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../../app/CartSlice';

const ProductsCard = ({ id, img, title, description, price }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = {id, img, title, description, price}

    dispatch(setAddItemToCart(item))
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={`img/item-img/${id}`} />
      </div>
      
      {/* Product Info */}
      <div className="mt-4 px-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>

      {/* Price and Button */}
      <div className="p-6 flex justify-between items-center">
        <p className="text-lg font-bold text-gray-900">${price}</p>
        <button
              onClick={onAddToCart} 
              className="text-white px-3 py-1 text-sm font-medium rounded bg-[#FF7A57] hover:bg-[#ff633c] active:bg-[#ff633c] focus:outline-none focus:ring focus:ring-orange-300 cursor-pointer transition-colors duration-300 ease-in-out">
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductsCard;
