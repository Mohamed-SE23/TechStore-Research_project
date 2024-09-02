import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchField = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className='mx-[30%] mb-20 justify-center'>
        <form onSubmit={handleSubmit} className="flex items-center border-2 rounded-full p-1">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-full outline-none border-none"
                placeholder={placeholder}
            />
            <button type="submit" className={searchTerm.trim() === '' ? "p-2 mr-1" : "p-2 mr-1 bg-indigo-500 hover:bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}>
                <FaSearch className={searchTerm.trim() === '' ? 'text-gray-400' : 'text-white'} />
            </button>
        </form>
    </div>
  );
};

export default SearchField;
