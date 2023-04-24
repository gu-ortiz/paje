'use client';
import { FormEvent, useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="container mx-auto">
        <form onSubmit={handleSearch} className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Pesquisar termos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300 border-2 border-blue-500 rounded-full"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
