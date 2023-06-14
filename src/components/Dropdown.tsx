import { Transition } from '@headlessui/react';
import {
  ClockIcon,
  MagnifyingGlassIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { RecommendationType } from 'types/tuss';
import { classNames } from 'utils/classnames';

const Dropdown = ({
  showDropdown,
  disabledSearch,
  recomendations,
  previousSearches,
  handleSearchClick,
  handleRecomendationClick,
  handleDeletePreviousSearch
}: {
  showDropdown: boolean;
  disabledSearch: boolean;
  recomendations: RecommendationType[];
  previousSearches: string[];
  handleSearchClick: (e: MouseEvent<HTMLButtonElement>) => void;
  handleRecomendationClick: (recomendation: string) => void;
  handleDeletePreviousSearch: (recomendation: string) => void;
}) => {
  return (
    <Transition
      show={showDropdown}
      className="w-full max-h-[90vh] flex flex-col pt-1 overflow-auto sm:scrollbar-thin sm:scrollbar-thumb-gray-800 sm:scrollbar-track-transparent"
    >
      {previousSearches.length > 0 &&
        previousSearches.map((search) => (
          <div
            key={search}
            className={classNames(
              'w-full flex justify-start items-center px-4 py-px',
              'text-gray-800 bg-transparent',
              'hover:text-white hover:bg-gray-800'
            )}
          >
            <button
              onClick={() => handleRecomendationClick(search)}
              className="w-full flex flex-grow justify-start items-center focus:outline-none"
            >
              <ClockIcon className="block w-4 h-4 mr-2" />
              <span className="flex-1 text-left">{search}</span>
            </button>
            <button
              onClick={() => handleDeletePreviousSearch(search)}
              className="flex flex-grow justify-start items-center text-white focus:outline-none"
            >
              <XMarkIcon className="block w-4 h-4" />
            </button>
          </div>
        ))}
      {recomendations.length > 0 &&
        recomendations.map((recomendation) => (
          <button
            key={recomendation.id}
            onClick={() => handleRecomendationClick(recomendation.match)}
            className={classNames(
              'w-full flex justify-start items-center px-4 py-px focus:outline-none',
              'text-gray-800 bg-transparent',
              'hover:text-white hover:bg-gray-800'
            )}
          >
            <MagnifyingGlassIcon className="block w-4 h-4 mr-2" />
            <span className="flex-1 text-left">{recomendation.match}</span>
          </button>
        ))}
      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-2">
        <button
          onClick={handleSearchClick}
          disabled={disabledSearch}
          className={classNames(
            'w-24 h-9 pr-px flex justify-center items-center rounded-md',
            'text-white bg-gray-800 focus:outline-none',
            'peer-focus:text-gray-800 hover:bg-gray-600',
            'disabled:bg-zinc-300'
          )}
        >
          Pesquisar
        </button>
      </div>
    </Transition>
  );
};

export default Dropdown;
