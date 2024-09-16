import React, { useState } from 'react';
import ProfileSettings from './ProfileSettings';
import EmailSettings from './EmailSettings';
import PasswordSettings from './PasswordSettings';
import PersonalDetails from './PersonalDetails';

const ProviderSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'personal':
        return <PersonalDetails />;
      case 'email':
        return <EmailSettings />;
      case 'password':
        return <PasswordSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 md:flex-col">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r p-6 md:w-full md:flex md:flex-col md:justify-center md:items-center">
        <h2 className="text-xl font-bold mb-8">Account Settings</h2>
        <ul className='md:flex md:space-x-4 md:items-center'>
          <li
            onClick={() => setActiveTab('profile')}
            className={`cursor-pointer mb-4 ${activeTab === 'profile' ? 'font-bold text-[#ff7a57]' : ''}`}
          >
            Store
          </li>
          <li
            onClick={() => setActiveTab('personal')}
            className={`cursor-pointer mb-4 ${activeTab === 'personal' ? 'font-bold text-[#ff7a57]' : ''}`}
          >
            Personal
          </li>
          <li
            onClick={() => setActiveTab('email')}
            className={`cursor-pointer mb-4 ${activeTab === 'email' ? 'font-bold text-[#ff7a57]' : ''}`}
          >
            Email
          </li>
          <li
            onClick={() => setActiveTab('password')}
            className={`cursor-pointer mb-4 ${activeTab === 'password' ? 'font-bold text-[#ff7a57]' : ''}`}
          >
            Password
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-3/4 p-10 md:w-full">{renderContent()}</div>
    </div>
  );
};

export default ProviderSettings;
