import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthData } from '../../auth/AuthWrapper';
import { nav } from './Navbar';
import CartNav from './CartNav';
import { setOpenCart } from '../../app/CartSlice.js';

export const Hamburger = () => {
    const { user, logout } = AuthData();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    // toggle hamburger menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // toggle cart menu
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }));
    };

    const MenuItem = ({ r, onClick }) => {
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
        );
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
                    {nav.map((r) => {
                        if (!r.isPrivate && r.isMenu) {
                            return (
                                <MenuItem 
                                    onClick={toggleMenu} 
                                    key={r.path}  // Ensure key is set to r.path (unique)
                                    r={r} 
                                />
                            );
                        } else if (user.isAuthenticated && r.isMenu) {
                            if (r.name === 'Cart') {
                                return (
                                    <div onClick={toggleMenu} key="cart-nav"> {/* Key for the wrapper */}
                                        <CartNav 
                                            onCartToggle={onCartToggle} 
                                        />
                                    </div>
                                );
                            }
                            return (
                                <MenuItem 
                                    onClick={toggleMenu} 
                                    key={r.path}  // Ensure key is set to r.path (unique)
                                    r={r} 
                                />
                            );
                        } else return null;  // If false, return null explicitly
                    })}

                    {user.isAuthenticated ? (
                        <div 
                            onClick={toggleMenu} 
                            className='btn-primary'
                            key="logout"> {/* Add a key for the logout button */}
                            <Link to={'#'} onClick={logout}>Log out</Link>
                        </div>
                    ) : (
                        <div className='flex flex-col space-y-2 items-center'>
                            <div className='btn-secondary' key="sign-in"> {/* Key for sign in */}
                                <Link to={'/sign'}>Sign in</Link>
                            </div>
                            <div className='btn-primary' key="register"> {/* Key for register */}
                                <Link to={'/register'}>Register</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
