'use client';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SearchContext } from 'context/Search';
import { useRouter } from 'next/navigation';
import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState
} from 'react';
import { getRecommendations } from 'utils/api';
import { classNames } from 'utils/classnames';
import { getFieldsParam, getQueryParam, getTablesParam } from 'utils/url';
import Dropdown from './Dropdown';

const HeaderSearch = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [recomendations, setRecomendations] = useState<string[]>([
    'Mevatyl',
    'Movielens'
  ]);
  const { setSearchText, filterFields, filterTables } =
    useContext(SearchContext);
  const showDropdown = !!text;

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

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSearch();
  };

  const handleRecomendationClick = (recomendation: string) => {
    setText(recomendation);
    handleSearch();
  };

  const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setText('');
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
              showDropdown ? 'border-b' : 'border-b-0'
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
              onChange={handleChange}
              onKeyDown={handleKeyDown}
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
          <Dropdown
            showDropdown={showDropdown}
            recomendations={recomendations}
            handleSearchClick={handleSearchClick}
            handleRecomendationClick={handleRecomendationClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
