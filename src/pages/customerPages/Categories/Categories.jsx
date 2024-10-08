import React, { useState, useEffect } from 'react'
import Hero from '../../../components/reusable/Hero';
import Title from '../../../components/reusable/title';
import SearchField from '../../../components/reusable/Search';
import Laptops from './Products/Laptops';
import SkeletonLoading from "../../../components/reusable/SkeletonLoading";
import toast from 'react-hot-toast';


const Categories = () => {
  const [searching, setSearching] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [categories, setCategories] = useState();

  const fetchCategories = async () => {

    try {
      setLoading(true);
      
      const response = await axios.get('/api/v1/products/get-products');

      setLoading(false);
      console.log(response.data.categories);
      setCategories(response.data.categories);

    } catch(error) {
      setLoading(false);
      console.log(error);
      toast.error("an error occurred while fetching products")
    }
  }

    // Simulate data fetching
    useEffect(() => {
      setTimeout(() => setLoading(false), 5000); // mock API delay
    }, []);
  

  return (
    <div>
      <Hero />
        <Title name={'Categories'} />
        <SearchField 
                  setLoading={setLoading}
                  loading={loading}
                  setSearching={setSearching}
                  placeholder={'Search for category...'} 
                  />
        {loading ?
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-4 items-center justify-center w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-8 mb-20">
            {Array(8) // Create an array with 6 items to simulate 6 skeleton loaders
            .fill(null)
            .map((_, index) => (
              <SkeletonLoading key={index} /> // Render 6 SkeletonLoader components
            ))}
          </div>
        </div>
        :
        <Laptops categories={categories}/>
        }
    </div>
  )
}

export default Categories;
