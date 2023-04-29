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
    <div className="relative w-full sm:w-2/3 h-full flex justify-center items-center">
      <div className="w-full flex group rounded-lg">
        <input
          type="text"
          className="w-full h-10 pl-5 pr-0 py-2 rounded-l-lg text-zinc-300  bg-zinc-50 placeholder:text-zinc-300 focus:outline-none focus:text-gray-800"
          placeholder="Pesquisar termos..."
          spellCheck="false"
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
        />
        <button className="relative w-12 h-10 pr-px flex justify-center items-center rounded-r-lg text-zinc-300 bg-zinc-50 active:hover:text-zinc-300 sm:hover:text-gray-800">
          <MagnifyingGlassIcon className="block h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
