import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthData } from '../../auth/AuthWrapper';
import { nav } from './Navbar';

export const Hamburger = () => {
    const { user, logout } = AuthData();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const MenuItem = ({r}) => {
        return (
            <div className='hover:bg-gray-700 hover:text-slate-100 rounded px-3 py-1'><Link to={r.path}>{r.name}</Link></div>
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
                    { nav.map((r, i) => {

                        if (!r.isPrivate && r.isMenu) {
                            return (
                                <MenuItem key={i} r={r} />
                            )
                        } else if (user.isAuthenticated && r.isMenu) {
                            return (
                                <MenuItem key={i} r={r} />
                            )
                        } else return false
                    })}

                    { user.isAuthenticated ?
                    <div className='btn-primary'>
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