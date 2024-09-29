import React from 'react'
import LoadingImg from '../../assets/Loading.svg'

const Loading = () => {
  return (
    <div className='relative flex justify-center items-center h-screen -mt-20'>
      <img src={LoadingImg} alt="Loading..." className='w-20 h-20 rounded-full' />
      <h1 className='text-lg text-slate-800 font-bold absolute flex items-center justify-center'>T<span className='text-[#ff7a57]'>S</span></h1>
    </div>
  )
}

export default Loading;
