import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStoreData } from '../../../app/storeDataSlice';
import { selectCurrentUser } from '../../../app/UserInfo';
import toast from 'react-hot-toast';
import PageLoading from '../../../components/reusable/PageLoading';

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    description: '',
    delivery: false,
    image: null,
  });
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const storeData = useSelector(selectStoreData);
  const storeId = storeData.store_id;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default submit event

    const data = new FormData();
    data.append('store_id', storeId)
    data.append('name',  product.name)
    data.append('brand', product.brand)
    data.append('category', product.category)
    data.append('description', product.description)
    data.append('price', product.price)
    data.append('status', product.delivery)
    data.append('location', storeData.store_location)
    data.append('image_1', product.image)
    console.log('the backend data is : ', data)

    try {
      setLoading(true);
      const token = user.token;
      console.log(token)
      const response = await axios.post('/api/v1/products/add-product', data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Authorization': `Bearer ${token}`,  // Add the token here
        },
      });

      setLoading(false)
      toast.success('Product Created successful!');
      console.log(response);
    } catch (err) {
      setLoading(false)
      toast.error('Failed to create product');
      console.log(err)
    }
    // Implement the submit logic (e.g., send data to backend)
    console.log('Product submitted:', product);
  };

  const handleCancel = () => {
    navigate(`/${user.userId}/productSettings`);
  };

  return (
    <>
    {loading && <PageLoading />}  {/* loading page   */}

    <div className="mx-[20%] my-10 p-8 rounded border lg:mx-[15%] md:mx-[10%] sm:mx-0 sm:border-none">
      <h1 className="text-3xl font-bold mb-10 text-center">Create Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='flex justify-between items-center'>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Product name'
            value={product.name}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
    
        <div className='flex justify-between items-center'>
          <label htmlFor="brand" className="block text-sm font-semibold text-gray-700">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="brand"
            value={product.brand}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div className='flex justify-between items-center'>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option className='text-gray-400' 
                    value="">Select a category</option>
            <option value="laptops">Laptops</option>
            <option value="computers">Computers</option>
            <option value="audio">Audio</option>
            <option value="gaming">Gaming</option>
            <option value="office">Office</option>
            <option value="USB desks">USB Desks</option>
            <option value="tech accessory">Tech Accessory</option>
            <option value="head phones">Head Phones</option>
            <option value="Photography">Photography</option>
          </select>
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="price" className="block text-sm font-semibold text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={product.price}
            onChange={handleChange}
            required
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Product description"
            value={product.description}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-[69%] px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>


        <div className='flex justify-between items-center'>
          <label htmlFor="delivery" className="block text-sm font-semibold text-gray-700">Delivery</label>
          <div className='flex justify-start space-x-2 items-center mt-1 w-[69%] sm:text-xs'>
            <input
              type="checkbox"
              id="delivery"
              name="delivery"
              checked={product.delivery}
              onChange={handleChange}
              className="block w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <p>I have delivery for this product</p>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <label htmlFor="image" className="block text-sm font-semibold text-gray-700">Image</label>
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
            Create
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
    </>
  );
};

export default CreateProduct;
