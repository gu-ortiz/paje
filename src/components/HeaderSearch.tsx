'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useState } from 'react';

const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative w-1/2 h-full flex justify-center items-center">
      <div className="w-full flex group border-0 rounded-full">
        <input
          type="text"
          placeholder="Pesquisar termos..."
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
          className="w-full h-10 pl-5 pr-12 py-2 shadow-sm border rounded-l-full border-gray-300 text-gray-300  bg-white placeholder:text-gray-300 group-hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:text-gray-600"
        />
        <button className="relative w-12 h-10 pr-px flex justify-center items-center shadow-sm border border-l-0 rounded-r-full border-gray-300 text-gray-300 bg-white hover:border-blue-500 hover:text-blue-500 active:text-white active:bg-blue-500">
          <MagnifyingGlassIcon className="block h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
