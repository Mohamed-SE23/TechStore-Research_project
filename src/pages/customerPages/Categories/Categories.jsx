import React from 'react'
import Hero from '../../../components/reusable/Hero';
import Title from '../../../components/reusable/title';
import SearchField from '../../../components/reusable/Search';
import Laptops from './Products/Laptops';

const Categories = () => {
  return (
    <div>
      <Hero />
        <Title name={'Categories'} />
        <SearchField placeholder={'Search for category...'} />
        <Laptops />
    </div>
  )
}

export default Categories;
