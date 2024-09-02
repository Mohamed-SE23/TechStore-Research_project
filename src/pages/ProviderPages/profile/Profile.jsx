import React from 'react'
import { Outlet } from 'react-router-dom';
import TimeLine from './TimeLine';
import GadgetsMenu from './GadgetsMenu';

const Profile = () => {
  return (
    <div>
      <TimeLine StoreName={'Store Name'} />
      <GadgetsMenu />
      <Outlet />
    </div>
  )
}

export default Profile;
