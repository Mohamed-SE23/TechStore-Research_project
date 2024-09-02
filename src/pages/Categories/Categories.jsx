import React from 'react'
import Hero from '../../components/reusable/Hero';
import Title from '../../components/reusable/title';
import SearchField from '../../components/reusable/Search';

const Categories = () => {
  return (
    <div>
      <Hero />
      <Title name={'Categories'} />
      <SearchField placeholder={'Search for category...'} />
    </div>
  )
}

export default Categories;
