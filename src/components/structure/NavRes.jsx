import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthData } from '../../auth/AuthWrapper';
import { nav } from './Navbar';
import CartNav from './CartNav';
import { selectCartItems, setOpenCart } from '../../app/CartSlice.js';


export const Menu = () => {

    const { user, logout } = AuthData();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }


    const MenuItem = ({r}) => {
        return (
            <NavLink
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
            <div className='flex md:hidden space-x-4 items-center first-letter'>
                { nav.map((r, i) => {

                    if (!r.isPrivate && r.isMenu) {
                        return (
                            <MenuItem key={i} r={r} />
                        )
                    } else if (user.isAuthenticated && r.isMenu) {
                        if (r.name === 'Cart') {
                            return (
                                <CartNav 
                                key={i}
                                onCartToggle={onCartToggle}/>
                            )}
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
                <div className='flex space-x-4 items-center'>
                    <div className='btn-secondary'>
                        <Link to={'/sign'}>Sign in</Link>
                    </div>
                    <div className='btn-primary'>
                        <Link to={'/register'}>Register</Link>
                    </div>
                </div>
                }
            </div>
    )
}