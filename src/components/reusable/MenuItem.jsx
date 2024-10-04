import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectCurrentUser } from '../../app/UserInfo';

const MenuItem = ({r}) => {
    const user = useSelector(selectCurrentUser)
    return (
        <>
        { (r.isPrivate && (r.name !== 'Cart')) ? 
            (<NavLink
            to={`/${user.userId}/${r.menuPath}`}
            className={({ isActive }) =>
            isActive
                ? 'text-[#FF7A57] transition duration-300 ease-in-out'
                : 'hover:text-[#FF7A57] transition duration-300 ease-in-out'
            }
        >
            {r.name}
      </NavLink>)
      :
          (<NavLink
            to={r.menuPath}
            className={({ isActive }) =>
            isActive
                ? 'text-[#FF7A57] transition duration-300 ease-in-out'
                : 'hover:text-[#FF7A57] transition duration-300 ease-in-out'
            }
        >
            {r.name}
      </NavLink>)

        }
        </>
    
    )
}

export default MenuItem;
