import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthData } from '../../auth/AuthWrapper';
import { nav } from './Navbar';
import CartNav from './CartNav';
import { setOpenCart } from '../../app/CartSlice.js';
import { selectCurrentUser } from '../../app/UserInfo.js';
import MenuItem from '../reusable/MenuItem.jsx';


export const Menu = () => {

    const { logout } = AuthData();
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    return (
            <div className='flex md:hidden space-x-4 items-center first-letter'>
                { nav.map((r, i) => {

                    if (!r.isPrivate && r.isMenu) {
                        return (
                            <MenuItem key={i} r={r} />
                        )
                    } else if (user.verified && r.isMenu) {
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

                { user.verified ?
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