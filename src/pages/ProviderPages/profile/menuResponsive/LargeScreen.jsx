import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const LargeScreen = ({ MenuItem, dropdownOpen, closeDropdown, toggleDropdown, mainItems, moreItems }) => {
  return (
      <div className='flex justify-center space-x-8 md:hidden'>
            {/* Render first 5 Items in large screens and extra large  */}
                { mainItems.map((r, i) => {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                })}

            {/* Render "More" dropdown if there are more items */}
            {moreItems.length > 0 && (
                <div className=" relative flex justify-end">
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center space-x-1 hover:text-[#FF7A57] focus:text-[#FF7A57] active:text-[#FF7A57] transition duration-300 ease-in-out"
                    >
                        <p>More</p><span className='font-bold text-lg'>{ dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute top-10 mt-2 p-6 w-60 space-y-4 bg-white rounded-lg shadow-xl z-10">
                            {moreItems.map((r, i) => (
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

export default LargeScreen;
