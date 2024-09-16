import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import laptop from '../../../assets/laptop.jpg';
import { IoMdSearch } from "react-icons/io";

const ProductSettings = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const user = {name: "proUserName"}

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // try {
    //   const response = await axios.get('/api/products'); // Replace with your API endpoint
    //   setProducts(response.data);
    // } catch (error) {
    //   console.error('Error fetching products:', error);
    // }
  };

  // navigate to create product page 
  const handleCreate = () => {
    navigate(`/${user.name}/productSettings/create`);
  }

  // navigate to create product page 
  const handleEdit = () => {
    navigate(`/${user.name}/productSettings/edit`);
  }

  // handle Delete function
  const handleDelete = () => {
    const userConfirmed = window.confirm("Are you sure you want to delete this item?");
    
    if (userConfirmed) {
      // Perform delete operation
      console.log("Item deleted");
    } else {
      console.log("Deletion canceled");
    }
  };

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className='text-center my-10'>
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      <div className="flex justify-between items-center sm:flex-col sm:space-y-4 mb-4">
        <div className="flex space-x-2">
          <button 
              onClick={handleCreate}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">Create Product</button>
          <button className="btn-secondary px-1 py-1 rounded font-semibold" onClick={fetchProducts}>Refresh</button>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <button
            className={`flex items-center justify-center border px-2 py-1 active:outline-none rounded ${!searchTerm ? 'text-gray-300' : 'text-[#ff7a57] border-[#ff7a57] hover:text-white hover:bg-[#ff7a57]'}`}
            onClick={handleSearch}
          >
            <IoMdSearch className='w-6 h-6' />
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full  bg-white">
          <thead className="text-gray-800 border-b-2">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">ID</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Name</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Brand</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Category</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Price</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Delivery</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Image</th>
              <th className="text-left py-3 px-4 uppercase font-bold text-sm">Created At</th>
              <th className="text-left py-3 uppercase font-bold text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* this will be remove when database is ready */}
            <tr className="hover:bg-gray-100 border-b-2">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">ProBook</td>
                  <td className="py-3 px-4">hp</td>
                  <td className="py-3 px-4">laptop</td>
                  <td className="py-3 px-4">885</td>
                  <td className="py-3 px-4">yes</td>
                  <td className="py-3 px-4">
                    <img src={laptop} alt="name" className="h-16 w-auto rounded object-cover" />
                  </td>
                  <td className="py-3 px-4">2024 / 8 / 29</td>
                  <td className="py-3 px-0 lg:flex-col md:justify-center md:items-center lg:space-y-2">
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2 lg:px-6 md:w-full md:mr-0">Edit</button>
                    <button 
                        onClick={handleDelete}
                        className="btn-primary">Delete</button>
                  </td>
                </tr>
            <tr className="hover:bg-gray-100 border-b-2">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">ProBook</td>
                  <td className="py-3 px-4">hp</td>
                  <td className="py-3 px-4">laptop</td>
                  <td className="py-3 px-4">885</td>
                  <td className="py-3 px-4">yes</td>
                  <td className="py-3 px-4">
                    <img src={laptop} alt="name" className="h-16 w-16 rounded object-cover" />
                  </td>
                  <td className="py-3 px-4">2024 / 8 / 29</td>
                  <td className="py-3 px-0 md:flex md:flex-col md:space-y-2">
                    <button 
                        onClick={handleEdit}
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button className="btn-primary">Delete</button>
                  </td>
                </tr>
            <tr className="hover:bg-gray-100 border-b-2">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">ProBook</td>
                  <td className="py-3 px-4">hp</td>
                  <td className="py-3 px-4">laptop</td>
                  <td className="py-3 px-4">885</td>
                  <td className="py-3 px-4">No</td>
                  <td className="py-3 px-4">
                    <img src={laptop} alt="name" className="h-16 w-16 rounded object-cover" />
                  </td>
                  <td className="py-3 px-4">2024 / 8 / 29</td>
                  <td className="py-3 px-0 md:flex md:flex-col md:space-y-2">
                    <button 
                        onClick={handleEdit}
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button className="btn-primary">Delete</button>
                  </td>
                </tr>
            {/* {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-3 px-4">{product.id}</td>
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">{product.brand}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">{product.price}</td>
                <td className="py-3 px-4">{product.delivery ? "Yes" : "No"}</td>
                <td className="py-3 px-4">
                  <img src={product.image} alt={product.name} className="h-16 w-auto rounded object-cover" />
                </td>
                <td className="py-3 px-4">{new Date(product.createdAt).toLocaleDateString()}</td>
                <td className="py-3 px-0 lg:flex-col md:justify-center md:items-center lg:space-y-2">
                  <button 
                  onClick={handleEdit}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2 lg:px-6 md:w-full md:mr-0">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSettings;
