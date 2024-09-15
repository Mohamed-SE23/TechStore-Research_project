import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchField = ({ setSearching, placeholder, loading, setLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      setSearching(searchTerm);
      setLoading(true);
    }
  };

  return (
    <div className='mx-[20%] mb-20 justify-center sm:mx-[%10]'>
        <form onSubmit={handleSubmit} className="flex items-center border-2 rounded-full p-1">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full px-4 py-1 rounded-full outline-none border-none"
                placeholder={placeholder}
                disabled={loading}
            />
            <button 
                    type="submit" 
                    disabled={loading}
                    className={searchTerm.trim() === '' ? "p-2" : "p-2 bg-indigo-500 hover:bg-indigo-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}>
                <FaSearch className={searchTerm.trim() === '' ? 'text-gray-400' : 'text-white'} />
            </button>
        </form>
    </div>
  );
};

export default SearchField;
