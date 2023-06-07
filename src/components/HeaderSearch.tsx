'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { SearchContext } from 'context/Search';
import { useRouter } from 'next/navigation';
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useState
} from 'react';
import { classNames } from 'utils/classnames';

const HeaderSearch = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const { setSearchText } = useContext(SearchContext);

  const handleSearch = () => {
    setSearchText(text);
    router.push('/');
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
          className={classNames(
            'w-full h-10 pl-5 pr-0 py-2 rounded-l-lg focus:outline-none peer',
            'text-zinc-300 bg-white placeholder:text-zinc-300 focus:text-gray-800'
          )}
          placeholder="Pesquisar..."
          spellCheck="false"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleClick}
          className={classNames(
            'relative w-12 h-10 pr-px flex justify-center items-center rounded-r-lg',
            'text-zinc-300 bg-white focus:outline-none',
            'peer-focus:text-gray-800 hover:text-gray-800 active:text-gray-600'
          )}
        >
          <MagnifyingGlassIcon className="block h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
