'use client';
import logo from 'assets/logo.svg';
import { Search } from 'lucide-react';
import Image from 'next/image';
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
        <div className="container h-full flex mx-auto justify-between">
          <div className="relative h-full flex justify-center items-center">
            <Image
              src={logo}
              alt="Apollo"
              width={40}
              height={40}
              className="flex justify-center items-center object-contain"
            />
          </div>
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
                <Search size={18} />
              </button>
            </div>
          </div>
          <div className="relative flex"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
