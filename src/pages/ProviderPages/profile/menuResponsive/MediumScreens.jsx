import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MediumScreens = ({ MenuItem, dropdownOpen, closeDropdown, toggleDropdown, mediumScreenItems, mediumScreenMoreItems }) => {
  return (

      <div className="hidden md:flex md:justify-center md:items-center md:space-x-8 sm:hidden">

            {/* ****************** Render 4 items in medium screens ******************** */}
                {mediumScreenItems.map((r, i) => (
                    <MenuItem key={i} r={r} />
                ))}

             {/* Render "More" dropdown if there are more items in medium screens */}
            {mediumScreenMoreItems.length > 0 && (
                <div className=" relative flex justify-end">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center space-x-1 hover:text-[#FF7A57] focus:text-[#FF7A57] active:text-[#FF7A57] transition duration-300 ease-in-out"
                    >
                        <p>More</p><span className='font-bold text-lg'>{ dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-10 mt-2 p-6 w-60 space-y-4 bg-white rounded-lg shadow-xl z-10">
                            {mediumScreenMoreItems.map((r, i) => (
                                <div key={i} onClick={closeDropdown}>
                                    <MenuItem r={r} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>

  )
}

export default MediumScreens;
