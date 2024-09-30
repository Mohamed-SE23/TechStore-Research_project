import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserType } from '../app/UserInfo';

const NotFound = () => {
  const user = useSelector(selectUserType);
  const navigate = useNavigate();

  // go to previous page
  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className='flex flex-col justify-center space-y-4 mx-[25%] mt-32 lg:mx-[20%] md:mx-[15%] sm:mx-[10%]'>
      <h1 className='text-xl font-semibold'>
        Oops! The page you're looking for doesn't exist.
      </h1>
      <p>
        It seems you've taken a wrong turn. Don't worry, it happens to the best of us! Use the navigation to get back on track, or head back to {user?.type === 'customer' ? 
        <span className='text-blue-600 hover:text-blue-400'><Link to={'/'}>the home page</Link></span> 
        : 
        <span>
          <button onClick={() => handleBack} className='text-blue-600 hover:text-blue-400'>
            previous page
          </button>
        </span>
        }
      </p>
    </div>
  )
}

export default NotFound;
