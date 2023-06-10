'use client';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  deleteSearch,
  getPreviousSearches,
  saveSearch
} from 'cache/localStorage';
import { SearchContext } from 'context/Search';
import { useRouter } from 'next/navigation';
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { getRecommendations } from 'utils/api';
import { classNames } from 'utils/classnames';
import { getFieldsParam, getQueryParam, getTablesParam } from 'utils/url';
import Dropdown from './Dropdown';

const HeaderSearch = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('');
  const [recomendations, setRecomendations] = useState<string[]>([]);
  const [previousSearches, setPreviousSearches] = useState<string[]>(
    getPreviousSearches('')
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setSearchText, filterFields, filterTables } =
    useContext(SearchContext);

  const handleSearch = () => {
    saveSearch(text);
    setSearchText(text);
    setPreviousSearches(getPreviousSearches(text));
    router.push('/');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setPreviousSearches(getPreviousSearches(e.target.value));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
      handleSearch();
    }
  };

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSearch();
    setDropdownOpen(false);
  };

  const handleRecomendationClick = (recomendation: string) => {
    setText(recomendation);
    handleSearch();
    setDropdownOpen(false);
  };

  const handleDeletePreviousSearch = (recomendation: string) => {
    if (previousSearches.length > 0 && recomendations.length > 0)
      setPreviousSearches(deleteSearch(recomendation));
  };

  const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setText('');
    inputRef.current && inputRef.current.focus();
  };

  const handleInputFocus = () => {
    setDropdownOpen(true);
  };

  const handleInputBlur = () => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(document.activeElement)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (text.length > 2) {
      const fetchData = async () => {
        const response = await getRecommendations(
          `${process.env.NEXT_PUBLIC_API_URL}/autocomplete/?${getTablesParam(
            filterTables
          )}${getFieldsParam(filterFields)}${getQueryParam(text)}`
        );

        setRecomendations(response.body.results);
      };

      fetchData();
    }
  }, [text, filterFields, filterTables]);

  return (
    <div className="w-full sm:w-2/3 h-full flex justify-center items-center">
      <div className="relative w-full h-10 flex flex-col items-start">
        <div className="absolute w-full flex flex-col rounded-lg bg-white shadow-md">
          <div
            className={classNames(
              'w-full flex bg-transparent border-zinc-300',
              dropdownOpen ? 'border-b' : 'border-b-0'
            )}
          >
            <input
              type="text"
              className={classNames(
                'w-full h-10 pl-5 pr-0 py-2 rounded-l-lg focus:outline-none peer',
                'text-zinc-300 bg-transparent placeholder:text-zinc-300 focus:text-gray-800'
              )}
              placeholder="Pesquisar..."
              spellCheck="false"
              value={text}
              ref={inputRef}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button
              onClick={handleClear}
              disabled={!text}
              className={classNames(
                'relative w-12 h-10 pr-px flex justify-center items-center rounded-r-lg',
                'text-zinc-300 bg-transparent hover:text-gray-800 focus:outline-none',
                'peer-focus:text-gray-800 active:text-gray-600'
              )}
            >
              {text ? (
                <XMarkIcon className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <MagnifyingGlassIcon
                  className="block h-5 w-5"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div ref={dropdownRef}>
            <Dropdown
              showDropdown={dropdownOpen}
              recomendations={recomendations}
              previousSearches={previousSearches}
              handleSearchClick={handleSearchClick}
              handleRecomendationClick={handleRecomendationClick}
              handleDeletePreviousSearch={handleDeletePreviousSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
