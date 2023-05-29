'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';

const HeaderSearch = () => {
  const [text, setText] = useState('');

  const handleSearch = () => {
    if (!text) return;
    console.log(text);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      handleSearch();
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="relative w-full sm:w-2/3 h-full flex justify-center items-center">
      <div className="w-full flex rounded-lg">
        <input
          type="text"
          className="w-full h-10 pl-5 pr-0 py-2 rounded-l-lg text-zinc-300 bg-white placeholder:text-zinc-300 focus:outline-none focus:text-gray-800"
          placeholder="Pesquisar termos..."
          spellCheck="false"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleClick}
          disabled={!text}
          className="relative w-12 h-10 pr-px flex justify-center items-center rounded-r-lg text-zinc-300 bg-white active:hover:text-zinc-300 focus:outline-none hover:text-gray-800 disabled:hover:text-zinc-300"
        >
          <MagnifyingGlassIcon className="block h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
