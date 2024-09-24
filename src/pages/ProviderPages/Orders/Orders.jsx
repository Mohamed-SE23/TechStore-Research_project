import React, { useState, useEffect } from 'react';
import OrderItem from './OrderList';
import laptop from '../../../assets/laptop.jpg'

// Mock function to get orders from API (replace with actual API call)
const fetchOrders = async () => {
  return [
    {
      id: 1,
      productName: 'Gaming Laptop',
  description: 'product description ',
      img: laptop,    
      buyerName: 'John Doe',
      buyerEmail: 'john@example.com',
      quantity: 1,
      status: 'Pending',
      total: 1200,
    },
    {
      id: 2,
      productName: 'Headphones',
      description: 'product description ',
      img: laptop,
      buyerName: 'Jane Smith',
      buyerEmail: 'jane@example.com',
      quantity: 2,
      status: 'Shipped',
      total: 300,
    },
    // More orders here...
  ];
};


const OrdersList = ({ orders, OrderItem }) => {
  if (!orders.length) {
    return <p>No orders available.</p>
  }

  return (
    <div className='grid grid-cols-3 items-center gap-4 md:grid-cols-2 sm:grid-cols-1'>
      {orders?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};


// OrdersPage component - Dependency inversion principle (fetchOrders can be passed from an external API)
const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the provider's orders from the API
    fetchOrders().then(data => setOrders(data));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <OrdersList 
                OrderItem={OrderItem}
                orders={orders} />
    </div>
  );
};

export default OrdersPage;
