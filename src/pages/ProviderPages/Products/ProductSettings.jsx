import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';
import { IoMdSearch } from "react-icons/io";
import { selectCurrentUser } from "../../../app/UserInfo";
import { selectStoreData } from "../../../app/storeDataSlice";
import PageLoading from "../../../components/reusable/PageLoading";
import toast from "react-hot-toast";

const ProductSettings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const storeData = useSelector(selectStoreData);
  const products = storeData?.products || [];
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   // try {
  //   //   const response = await axios.get('/api/products'); // Replace with your API endpoint
  //   //   setProducts(response.data);
  //   // } catch (error) {
  //   //   console.error('Error fetching products:', error);
  //   // }
  // };

  // navigate to create product page
  const handleCreate = () => {
    navigate(`/${user.userId}/productSettings/create`);
  };

  // navigate to create product page
  const handleEdit = (id) => {
    navigate(`/${user.userId}/productSettings/edit/${id}`);
  };

    // handle Delete function
    const handleDelete = async (id) => {
      const userConfirmed = window.confirm(
        "Are you sure you want to delete this item?"
      );
  
      if (userConfirmed) {
        try {
          setLoading(true);
          const token = user.token;
          const data = new FormData();
          data.append('product_id', id);
          console.log(id)
          // Perform delete operation
          const response = await axios.delete(`/api/v1/products/delete-product`, {
            headers: {
              Authorization: `Bearer ${token}`, // Add the token to the headers
            },
            data: data, // Send the data as part of the request body
          });

          setLoading(false);
          toast.success("product deleted successfully")
          console.log(response)
          // Optionally, you can trigger a state update to remove the deleted product from the UI
          console.log("Item deleted");
          // Optionally, refresh or update products state here if necessary
        } catch (error) {
          setLoading(false);
          console.error("Error deleting the product:", error);
        }
      } else {
        console.log("Deletion canceled");
      }
    };

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <>
    {loading && <PageLoading />}
    <div className="p-8">
      {/* Header */}
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Products</h1>
      </div>
      {/* Products Table */}
      {products.length <= 0 ? (
        <div className="w-full flex-col space-y-3 text-center mt-20 text-xl font-semibold text-gray-500">
          <p>There is No products yet{" "}</p>
          <button
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
          >
            Create Product
          </button>
        </div>
      ) : (
      <div>
      <div className="flex justify-between items-center sm:flex-col sm:space-y-4 mb-4">
        <div className="flex space-x-2 xsm:flex-col xsm:items-center xsm:space-y-2 xsm:space-x-0">
          <button
            onClick={handleCreate}
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
          >
            Create Product
          </button>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 border border-r-0 rounded-l focus:outline-none"
          />
          <button
            className={`flex items-center justify-center border px-2 py-1 active:outline-none rounded-r ${
              !searchTerm
                ? "text-gray-300"
                : "text-[#ff7a57] border-[#ff7a57] hover:text-white hover:bg-[#ff7a57]"
            }`}
            onClick={handleSearch}
          >
            <IoMdSearch className="w-6 h-6" />
          </button>
        </div>
      </div>

        <div className="overflow-x-auto mt-10">
          <table className="min-w-full  bg-white">
            <thead className="text-gray-800 border-b-2">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  ID
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Name
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Brand
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Category
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Price
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Delivery
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Image
                </th>
                <th className="text-left py-3 px-4 uppercase font-bold text-sm">
                  Created At
                </th>
                <th className="text-left py-3 uppercase font-bold text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4">{product.id}</td>
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">{product.brand}</td>
                  <td className="py-3 px-4">{product.category}</td>
                  <td className="py-3 px-4">{product.price}</td>
                  <td className="py-3 px-4">
                    {product.deliveryStatus ? "Yes" : "No"}
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src={product.image_1}
                      alt={product.name}
                      className="h-16 w-auto rounded object-cover"
                    />
                  </td>
                  <td className="py-3 px-4">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-0 lg:flex-col md:justify-center md:items-center lg:space-y-2">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2 lg:px-6 md:w-full md:mr-0"
                      >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="btn-primary">
                    Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ProductSettings;
