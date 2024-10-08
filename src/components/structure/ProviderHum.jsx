import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthData } from '../../auth/AuthWrapper';
import { providerNav } from './Navbar';
import { selectCurrentUser } from '../../app/UserInfo';
import MenuItem from '../reusable/MenuItem';

export const ProviderHum = () => {
    const { logout } = AuthData();
    const user = useSelector(selectCurrentUser)

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col items-end absolute top-5 right-8'>
            <div className="hidden md:flex">
                <button onClick={toggleMenu} className="text-[#333333] focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
            </div>
            <div className={` ${isOpen ? 'block' : 'hidden'}`}>
                <div className='hidden bg-white shadow-lg px-8 pb-5 md:flex md:flex-col space-y-2 items-center md:text-sm sm:text-xs'>
                    { providerNav.map((r, i) => {

                        if (!r.isPrivate && r.isMenu && !user.verified) {
                            return (
                                <MenuItem 
                                    key={i} 
                                    onClick={toggleMenu}
                                    r={r} />
                            )
                        } else if (r.isPrivate && r.isMenu && user.verified) {
                            return (
                                <MenuItem 
                                    key={i} 
                                    onClick={toggleMenu}
                                    r={r} />
                            )
                        } else return false
                    })}

                    { user.verified ?
                    <div
                        onClick={toggleMenu}
                        className='btn-primary'>
                        <Link to={'#'} onClick={logout}>Log out</Link>
                    </div>
                    :
                    <div className='flex flex-col space-y-2 items-center'>
                        <div className='btn-secondary'>
                            <Link to={'/sign'}>Sign in</Link>
                        </div>
                        <div className='btn-primary'>
                            <Link to={'/register'}>Register</Link>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>

    )
}