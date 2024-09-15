import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import TimeLine from './TimeLine';
import GadgetsMenu from './GadgetsMenu';
import NotOwnerHeader from './NotOwnerHeader';
import { RenderGadgets } from './RenderGadgets';

const Profile = () => {
  const POwner = false;
  const [isActive, setIsActive] = useState('Computers');
  return (
    <div>
      { !POwner && <NotOwnerHeader />}
      <TimeLine StoreName={'Store Name'}
                bio={'we sell awesome Products'} />
      <GadgetsMenu 
                setIsActive={setIsActive}
                isActive={isActive} />
      <RenderGadgets isActive={isActive} />
    </div>
  )
}

export default Profile;
