import React from 'react'
import { useSelector } from 'react-redux';
import { selectStoreData } from '../../../../app/storeDataSlice';
import ProductsCard from '../../../../components/reusable/ProductsCard';
import { selectCurrentUser } from '../../../../app/UserInfo';

const Laptops = () => {
  const storeData = useSelector(selectStoreData);
  const products = storeData.products;
  const user = useSelector(selectCurrentUser);
  return (
    <div className=' mb-10 flex flex-col '>
      <h1 className='text-center text-xl font-bold my-14'>Laptops</h1>
    <div className='px-8 grid grid-cols-3 items-center justify-center w-full gap-4 md:grid-cols-2 sm:grid-cols-1'>
      {products?.map((product, i) => {
        if (product.category === 'laptops'){
          return <ProductsCard
                          key={i}
                          id={product.id}
                          img={product.image_1} 
                          title={product.name} 
                          description={product.description}
                          price={product.price}
                          store={product.brand}
                          user={user}
                          btnTxt={"Edit"}


          />
        }
      })}
    </div>
    </div>
  )
}

export default Laptops;
