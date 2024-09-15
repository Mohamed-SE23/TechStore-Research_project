import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthData } from '../../auth/AuthWrapper';
import { providerNav } from './Navbar';

export const ProviderHum = () => {
    const { user, logout } = AuthData();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const MenuItem = ({r, onClick}) => {
        return (
            <NavLink
                onClick={onClick}
                to={r.path}
                className={({ isActive }) =>
                isActive
                    ? 'text-[#FF7A57] transition duration-300 ease-in-out'
                    : 'hover:text-[#FF7A57] transition duration-300 ease-in-out'
                }
            >
                {r.name}
          </NavLink>
        )
    }

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

                        if (!r.isPrivate && r.isMenu && !user.isAuthenticated) {
                            return (
                                <MenuItem 
                                    key={i} 
                                    onClick={toggleMenu}
                                    r={r} />
                            )
                        } else if (r.isPrivate && r.isMenu && user.isAuthenticated) {
                            return (
                                <MenuItem 
                                    key={i} 
                                    onClick={toggleMenu}
                                    r={r} />
                            )
                        } else return false
                    })}

                    { user.isAuthenticated ?
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