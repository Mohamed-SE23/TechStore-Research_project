import React, { useState, useEffect } from "react";
import Hero from "../../../components/reusable/Hero";
import Title from "../../../components/reusable/title";
import SearchField from "../../../components/reusable/Search";
import Laptops from "./Products/Laptops";
import SkeletonLoading from "../../../components/reusable/SkeletonLoading";
import toast from "react-hot-toast";
import Computers from "./Products/Computers";
import Gaming from "./Products/Gaming";
import HeadPhones from "./Products/HeadPhones";
import Audio from "./Products/Audio";
import Office from "./Products/Office";
import UsbDesks from "./Products/UsbDesks";
import TechAccessories from "./Products/TechAccessories";
import Cameras from "./Products/Cameras";

const Categories = () => {
  const [searching, setSearching] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/v1/products/get-products");

      setLoading(false);
      console.log(response.data.categories);
      setCategories(response.data.categories);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("an error occurred while fetching products");
    }
  };

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // mock API delay
    fetchCategories();
  }, []);

  return (
    <div>
      <Hero />
      <Title name={"Categories"} />
      <SearchField
        setLoading={setLoading}
        loading={loading}
        setSearching={setSearching}
        placeholder={"Search for category..."}
      />
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 items-center justify-center w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-8 mb-20">
            {Array(8) // Create an array with 6 items to simulate 6 skeleton loaders
              .fill(null)
              .map((_, index) => (
                <SkeletonLoading key={index} /> // Render 6 SkeletonLoader components
              ))}
          </div>
        </div>
      ) : (
        <div>
          <Laptops categories={categories} />
          <Computers categories={categories} />
          <Gaming categories={categories} />
          <Cameras categories={categories} />
          <HeadPhones categories={categories} />
          <Audio categories={categories} />
          <Office categories={categories} />
          <UsbDesks categories={categories} />
          <TechAccessories categories={categories} />
        </div>
      )}
    </div>
  );
};

export default Categories;
