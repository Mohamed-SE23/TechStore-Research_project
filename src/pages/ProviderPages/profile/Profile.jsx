import React, { useState } from 'react'
import TimeLine from './TimeLine';
import GadgetsMenu from './GadgetsMenu';
import NotOwnerHeader from './NotOwnerHeader';
import { RenderGadgets } from './RenderGadgets';
import RenderProfileContent from './RenderProfileContent';

const Profile = () => {
  const POwner = true;

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
