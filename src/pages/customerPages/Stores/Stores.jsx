import React from 'react'
import Hero from '../../../components/reusable/Hero';
import Title from '../../../components/reusable/title';
import SearchField from '../../../components/reusable/Search';

const Stores = () => {
  return (
    <div>
      <Hero />
      <Title name={'Stores'} />
      <SearchField placeholder={'Search for Stores...'} />
    </div>
  )
}

export default Stores;
