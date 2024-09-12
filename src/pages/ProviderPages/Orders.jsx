import React, { useState, useEffect } from 'react';

// Mock function to get orders from API (replace with actual API call)
const fetchOrders = async () => {
  return [
    {
      id: 1,
      productName: 'Gaming Laptop',
      buyerName: 'John Doe',
      buyerEmail: 'john@example.com',
      quantity: 1,
      status: 'Pending',
      total: 1200,
    },
    {
      id: 2,
      productName: 'Wireless Headphones',
      buyerName: 'Jane Smith',
      buyerEmail: 'jane@example.com',
      quantity: 2,
      status: 'Shipped',
      total: 300,
    },
    // More orders here...
  ];
};

// OrderItem component - Single responsibility principle (handling the order display)
const OrderItem = ({ order }) => {
  return (
    <div className="border rounded-md p-4 mb-4">
      <h2 className="text-lg font-bold">{order.productName}</h2>
      <p className="text-sm text-gray-600">Ordered by: {order.buyerName}</p>
      <p className="text-sm text-gray-600">Email: {order.buyerEmail}</p>
      <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
      <p className="text-sm text-gray-600">Status: {order.status}</p>
      <p className="text-sm text-gray-600">Total: ${order.total}</p>
    </div>
  );
};

// OrdersList component - Open/Closed principle (can extend without modifying for new functionalities)
const OrdersList = ({ orders }) => {
  if (!orders.length) {
    return <p>No orders available.</p>;
  }

  return (
    <div className="space-y-4">
      {orders.map(order => (
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
      <OrdersList orders={orders} />
    </div>
  );
};

export default OrdersPage;
