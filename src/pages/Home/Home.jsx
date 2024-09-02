import React from 'react'
import Hero from '../../components/reusable/Hero';
import Aims from './Aims';
import Benefits from './Benefits';
import Features from './Features';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Aims />
      <Benefits />
      <Features />
      <Footer />
    </>
  )
}

export default Home;
