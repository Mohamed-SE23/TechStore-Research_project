import React from 'react'

// OrderItem component - Single responsibility principle (handling the order display)
const OrderItem = ({ order }) => {
    return (
        <div className='flex-col gap-4 items-center border rounded-md p-4'>
          <div className='flex items-start gap-4 mb-3'>
            <div>
              <img src={order.img} alt="product-img"  className='h-32 w-auto object-cover rounded lg:h-28 md:h-26'/>
            </div>
            <div>
             <h2 className="text-lg font-bold">{order.productName}</h2>
             <p>{order.description}</p>
            </div>
          </div>
          <div className='flex-col items-start space-y-2 xsm:flex-col xsm:items-start xsm:gap-2'>
            <div>
                <p className="text-sm text-gray-600">Ordered by: {order.buyerName}</p>
                <p className="text-sm text-gray-600">Email: {order.buyerEmail}</p>
                <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                <p className="text-sm text-gray-600">Status: {order.status}</p>
                <p className="text-sm text-gray-600">Total: ${order.total}</p>
            </div>
            <div>
                <button className='bg-theme-cart text-white px-2 py-1 rounded active:scale-90'>
                    confirmed
                </button>
            </div>
          </div>
        </div>
    );
  };

export default OrderItem;
