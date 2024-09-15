import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline"; // Import clipboard icon
import {
  setConfirmItem,
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../../app/CartSlice";

const CartItem = ({
  item: {
    id,
    img,
    title,
    description,
    price,
    cartQuantity,
    store,
    location,
    owner,
    whatsappNum,
    confirmed,
  },
}) => {
  const dispatch = useDispatch();

  const [copied, setCopied] = useState(false); // State to track if the number was copied

  // Increase the quantity
  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        img,
        title,
        description,
        price,
        cartQuantity,
        store,
        location,
        owner,
        whatsappNum,
        confirmed,
      })
    );
  };

  // Decrease the quantity
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        img,
        title,
        description,
        price,
        cartQuantity,
        store,
        location,
        owner,
        whatsappNum,
        confirmed,
      })
    );
  };

  // Remove Item from cart
  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        img,
        title,
        description,
        price,
        cartQuantity,
        store,
        location,
        owner,
        whatsappNum,
        confirmed,
      })
    );
  };

  // Function to copy WhatsApp number
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true); // Set the copied state to true
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  // show Owner Contact Number

  const handleConfirmInfo = () => {
    dispatch(
      setConfirmItem({
        id,
        img,
        title,
        description,
        price,
        cartQuantity,
        store,
        location,
        owner,
        whatsappNum,
        confirmed,
      })
    );
  };

  return (
    <div className="border-b w-full mb-5">
      <div className="flex items-center justify-between space-x-1 w-full px-5 pb-5">
        <div className="flex items-center gap-5">
          <div className="relative hover:scale-105 transition-all duration-75 ease-in-out grid items-center">
            <img
              src={img}
              alt={`img/cart-img/${id}`}
              className="w-36 h-auto object-fill rounded lg:w:28"
            />
            <div className="absolute right-1 top-1 bg-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-semibold text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{description}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                onClick={onDecreaseItemQTY}
                className="bg-theme-cart rounded flex items-center justify-center w-6 h-6 lg:w-5 lg:h-5 active:scale-90"
              >
                <MinusIcon className="w-5 h-5 text-white stroke-[2] lg:w-4 lg:h-4" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium flex items-center justify-center w-7 h-6 lg:text-xs lg:w-6 lg:h-5">
                {cartQuantity}
              </div>
              <button
                type="button"
                onClick={onIncreaseItemQTY}
                className="bg-theme-cart rounded flex items-center justify-center w-6 h-6 lg:w-5 lg:h-5 active:scale-90"
              >
                <PlusIcon className="w-5 h-5 text-white stroke-[2] lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-8 lg:gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg font-medium text-slate-900 lg:text-base">
              ${price * cartQuantity}
            </h1>
          </div>
          <div className="grid items-center justify-center">
            <button
              onClick={onRemoveItem}
              type="button"
              className="grid items-center justify-items-center bg-theme-cart p-1 rounded active:scale-90 lg:p-0.5"
            >
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 w-full px-5 pb-5">
        <div>
          <div className="flex items-center justify-start">
            <h3 className="text-sm font-semibold w-1/3">Store : </h3>
            <p className="text-left">{store}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start">
            <h3 className="text-sm font-semibold w-1/3">Location : </h3>
            <p className="text-left">{location}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start">
            <h3 className="text-sm font-semibold w-1/3">The Owner : </h3>
            <p className="text-left">{owner}</p>
          </div>
        </div>
        <div>
          {confirmed && (
            <div className="flex items-center justify-start">
              <h3 className="text-sm font-semibold w-1/3">Whatsapp : </h3>
              <div className="flex items-center text-left">
                <p className="text-left">{whatsappNum}</p>
                <button
                  onClick={() => copyToClipboard(whatsappNum)}
                  className="flex items-center ml-2 p-1 rounded bg-gray-200 hover:bg-gray-300 active:scale-90 transition"
                >
                  {copied ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-xs text-green-500 ml-1">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <ClipboardIcon className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
        { confirmed ? 
        <div className="bg-gray-200 text-center text-slate-500 flex justify-center rounded w-full py-1">
          <p>Now Contact the Owner</p>
        </div>
        :
        <div className="bg-theme-cart text-center flex justify-center text-white rounded w-full py-1 active:scale-90">
          <button type="button" onClick={handleConfirmInfo}>
            Confirm to Contact the Owner
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default CartItem;
