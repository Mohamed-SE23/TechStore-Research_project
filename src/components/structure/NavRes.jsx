import { Link } from 'react-router-dom';
import { AuthData } from '../../auth/AuthWrapper';
import { nav } from './Navbar';

export const Menu = () => {

    const { user, logout } = AuthData();

    const MenuItem = ({r}) => {
        return (
            <div className=' hover:text-[#FF7A57] focus:text-[#FF7A57] active:text-[#FF7A57] transition duration-300 ease-in-out'>
                <Link to={r.path}>{r.name}</Link>
            </div>
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