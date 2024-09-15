import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { providerProfile } from './GadgetsNav';
import LargeScreen from './menuResponsive/LargeScreen';
import MediumScreens from './menuResponsive/MediumScreens';
import SmallScreens from './menuResponsive/SmallScreens';


const GadgetsMenu = ({isActive, setIsActive}) => {

    // State to control the dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const mainItems = providerProfile.slice(0, 5);
    const smallScreenItems = providerProfile.slice(0, 3);
    const mediumScreenItems = providerProfile.slice(0, 4);
    const smallScreenMoreItems = providerProfile.slice(3);
    const mediumScreenMoreItems = providerProfile.slice(4);
    const moreItems = providerProfile.slice(5);


    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown when clicking outside
    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    const MenuItem = ({r}) => {
        return (
            <div
                to={r.menuPath}
                className={`hover:text-[#FF7A57] transition duration-300 ease-in-out ${isActive === r.name ? 'text-[#FF7A57]' :'text-slate-900'}`}
             >
                <button onClick={() => setIsActive(r.name)}>
                    {r.name}
                </button>
          </div>
        )
    }
    
    return (
        <div className='container relative my-10 py-6 border-t-2 border-b-2'>
            <LargeScreen
                    MenuItem={MenuItem}
                    dropdownOpen={dropdownOpen}
                    closeDropdown={closeDropdown}
                    toggleDropdown={toggleDropdown}
                    mainItems={mainItems}
                    moreItems={moreItems} />

            <MediumScreens
                    MenuItem={MenuItem}
                    dropdownOpen={dropdownOpen}
                    closeDropdown={closeDropdown}
                    toggleDropdown={toggleDropdown}
                    mediumScreenItems={mediumScreenItems}
                    mediumScreenMoreItems={mediumScreenMoreItems} />

            <SmallScreens 
                    MenuItem={MenuItem}
                    dropdownOpen={dropdownOpen}
                    closeDropdown={closeDropdown}
                    toggleDropdown={toggleDropdown}
                    smallScreenItems={smallScreenItems}
                    smallScreenMoreItems={smallScreenMoreItems} />
        </div>
    )
}

export default GadgetsMenu;
