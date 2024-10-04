import React from 'react'
import { FaPhoneVolume, FaUserTie } from "react-icons/fa6";
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { VscGlobe } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Information = ({ storeData }) => {

  // this is local data will replace it with the database 

  const Info = {
    owner: "Owner Name",
    email: storeData.store_email,
    phone: storeData.store_phone_number,
    location: storeData.store_location,
    media: storeData.social_media_accounts,
  }
  return (
      <div className="flex flex-col space-y-6 w-full my-10 px-8 sm:px-2">
        <div className="flex items-center justify-start">
          <h4 className="flex items-end gap-2 text-sm font-semibold w-1/4 md:w-1/2 ">
              <FaUserTie className='w-5 h-5' />
              <p>Store Owner :</p>
          </h4>
          <p className="text-left">{Info.owner}</p>
      </div>
        <div className="flex items-center justify-start sm:flex-col sm:items-start sm:gap-2">
          <h4 className="flex items-center gap-2 text-sm font-semibold w-1/4 md:w-1/2 ">
              <MdEmail className='w-5 h-5' />
              <p>Email :</p>
          </h4>
          <p className="text-left sm:ml-8">{Info.email}</p>
      </div>
        <div className="flex items-center justify-start">
          <h4 className="flex items-center gap-2 text-sm font-semibold w-1/4 md:w-1/2 ">
              <FaPhoneVolume className='w-5 h-5' />
              <p>Phone number :</p>
          </h4>
          <p className="text-left">{Info.phone}</p>
      </div>
        <div className="flex items-center justify-start">
          <h4 className="flex items-center gap-2 text-sm font-semibold w-1/4 md:w-1/2 ">
              <ImLocation2 className='w-5 h-5' />
              <p>Store Location :</p>
          </h4>
          <p className="text-left">{Info.location}</p>
      </div>
       {storeData?.social_media_accounts && storeData.social_media_accounts.trim() !== "" && 
        <div className="flex items-center justify-start space-x-8 md:flex-col md:items-start md:gap-2">
        <h4 className="flex items-center gap-2 text-sm font-semibold ">
            <VscGlobe className='w-5 h-5' />
            <p>Store Media Account</p>
        </h4>
        <Link to={Info.media} className="text-left hover:text-[#ff7a57] md:ml-8">{Info.media}</Link>
    </div>
    }
    </div>
  )
}

export default Information;
