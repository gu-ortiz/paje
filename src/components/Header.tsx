'use client';
import { Search } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full h-20">
      <div className="w-full h-full flex justify-center items-center border-b border-gray-200 shadow-sm">
        <div className="container flex mx-auto justify-center">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Pesquisar termos..."
              value={searchQuery}
              onChange={(e) => handleSearch(e)}
              className="w-full h-10 py-2 pl-5 pr-12 leading-tight text-gray-300 bg-white border border-gray-300 rounded-full shadow-sm focus:text-gray-700 focus:border-blue-500 focus:outline-none placeholder:text-gray-300"
            />
            <div className="absolute inset-y-0 right-1 w-12 h-full flex justify-center items-center">
              <Search className="text-gray-300" size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
