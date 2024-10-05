import React from 'react'
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../../app/CartSlice';
import { GoLocation } from 'react-icons/go';
import { HashtagIcon } from '@heroicons/react/24/solid';
import { truncate } from 'lodash';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ id, img, title, description, price, store, user, location, btnTxt, whatsappNum, confirmed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddToCart = () => {
    const item = {id, img, title, description, price, store, owner, location, whatsappNum, confirmed}

    dispatch(setAddItemToCart(item))
  }

  const handleNavigate = () => {
    navigate(`/${user.userId}/productSettings/edit/${id}`)
  }

  return (
    <div className="max-w-xs min-h-fit rounded overflow-hidden shadow-lg bg-white transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt={`img/item-img/${id}`} />
      </div>

      {/* store information */}
      <div className='flex items-center justify-between px-3 mt-2'>
        {location && 
        <div className='flex items-center gap-0.5 '>
        <GoLocation className='w-3 h-3' /> <span className='text-xs'>{location}</span>
      </div>
      }
        <div className='flex items-center text-blue-500 gap-0.5'>
          <HashtagIcon className='w-3 h-3' />
          <span className='text-xs'>{store}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 px-3">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-base mt-2">{truncate(description, {length: 55})}</p>
      </div>

      {/* Price and Button */}
      <div className="py-6 px-4 flex justify-between items-center">
        <p className="text-lg font-bold text-gray-900">${price}</p>
        {btnTxt === "Edit" ? 
        <button
        onClick={handleNavigate} 
        className="text-white px-1.5 py-0.5 text-xs font-medium rounded bg-[#FF7A57] hover:bg-[#ff633c] active:scale-95 focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out">
        {btnTxt}
      </button>
        :
        <button
        onClick={onAddToCart} 
        className="text-white px-1.5 py-0.5 text-xs font-medium rounded bg-[#FF7A57] hover:bg-[#ff633c] active:scale-95 focus:outline-none cursor-pointer transition-colors duration-300 ease-in-out">
        Add To Cart
      </button>}
      </div>
    </div>
  )
}

export default ProductsCard;
