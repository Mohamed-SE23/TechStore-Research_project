import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TimeLine from './TimeLine';
import NotOwnerHeader from './NotOwnerHeader';
import RenderProfileContent from './RenderProfileContent';
import { selectProductOwner, setProductOwner } from '../../../app/UserInfo';

const Profile = () => {
  const dispatch = useDispatch();
  const POwner = useSelector(selectProductOwner);

  dispatch(setProductOwner(true))

  return (
    <div className='bg-gray-100'>
      { !POwner && <NotOwnerHeader />}
      <TimeLine StoreName={'Store Name'}
                bio={'we sell awesome Products'} />
      <RenderProfileContent />
    </div>
  )
}

export default Profile;
