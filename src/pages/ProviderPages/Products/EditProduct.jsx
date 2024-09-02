import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setProduct({
      ...product,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the submit logic (e.g., send data to backend)
    console.log('Product submitted:', product);
  };

  const handleCancel = () => {
    navigate('/productSettings');
  };

  return (
    <div className="mx-[20%] my-10 p-8 rounded border lg:mx-[15%] md:mx-[10%] sm:mx-0 sm:border-none ">
      <h1 className="text-3xl font-bold mb-10 text-center">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='flex justify-between items-center'>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
    
        <div className='flex justify-between items-center'>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div className='flex justify-between items-center'>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a category</option>
            <option value="laptop">Laptop</option>
            <option value="phone">Phone</option>
            <option value="tablet">Tablet</option>
            <option value="accessory">Accessory</option>
          </select>
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-[69%] text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 w-1/3 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 w-1/3 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
