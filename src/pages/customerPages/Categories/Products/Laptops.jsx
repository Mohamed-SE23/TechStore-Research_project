import React from 'react'
import ProductsCard from '../../../../components/reusable/ProductsCard';
import laptop from '../../../../assets/laptop.jpg';

const Laptops = () => {
  return (
    <div className='container mb-20'>
      <div className='text-center my-20'>
        <h1 className='text-2xl font-bold text-slate-800'>Laptops</h1>
      </div>
      <div className='flex items-start justify-center'>
        <div className='grid grid-cols-4 gap-8 justify-center items-center mx-auto lg:gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <ProductsCard 
                  id={'0x01'}
                  img={laptop}
                  title={"hp ProBook"}
                  description={"new HB ProBook laptop with awesome features"}
                  price={'568'}
                  store={'store Name'}
                  location={'WNS'}
                  owner={'owner Name'}
                  whatsappNum={'1234567890'}
            />
          <ProductsCard 
                  id={'0x02'}
                  img={laptop}
                  title={"hp ProBook"}
                  description={"new HB ProBook laptop with awesome features"}
                  price={'568'}
                  store={'store Name'}
                  location={'WNS'}
                  owner={'owner Name'}
                  whatsappNum={'1234567890'}
            />
          <ProductsCard 
                  id={'0x03'}
                  img={laptop}
                  title={"hp ProBook"}
                  description={"new HB ProBook laptop with awesome features"}
                  price={'568'}
                  store={'store Name'}
                  location={'WNS'}
                  owner={'owner Name'}
                  whatsappNum={'1234567890'}
            />
          <ProductsCard 
                  id={'0x04'}
                  img={laptop}
                  title={"hp ProBook"}
                  description={"new HB ProBook laptop with awesome features"}
                  price={'568'}
                  store={'store Name'}
                  location={'WNS'}
                  owner={'owner Name'}
                  whatsappNum={'1234567890'}
            />
          <ProductsCard 
                  id={'0x05'}
                  img={laptop}
                  title={"hp ProBook"}
                  description={"new HB ProBook laptop with awesome features"}
                  price={'568'}
                  store={'store Name'}
                  location={'WNS'}
                  owner={'owner Name'}
                  whatsappNum={'1234567890'}
            />
        </div>
      </div>
    </div>
  )
}

export default Laptops;
