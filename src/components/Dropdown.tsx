import { Transition } from '@headlessui/react';
import { ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { classNames } from 'utils/classnames';

const Dropdown = ({
  showDropdown,
  recomendations,
  handleSearchClick,
  handleRecomendationClick
}: {
  showDropdown: boolean;
  recomendations: string[];
  handleSearchClick: (e: MouseEvent<HTMLButtonElement>) => void;
  handleRecomendationClick: (recomendation: string) => void;
}) => {
  return (
    <Transition show={showDropdown} className="w-full flex flex-col pt-1">
      {recomendations.length > 0 &&
        recomendations.map((recomendation) => (
          <button
            key={recomendation}
            onClick={() => handleRecomendationClick(recomendation)}
            className={classNames(
              'w-full flex justify-start items-center px-4 py-px focus:outline-none',
              'text-gray-800 bg-transparent',
              'hover:text-white hover:bg-gray-800'
            )}
          >
            <ClockIcon className="w-4 h-4 mr-2" />
            {recomendation}
          </button>
        ))}
      {recomendations.length > 0 &&
        recomendations.map((recomendation) => (
          <button
            key={recomendation}
            onClick={() => handleRecomendationClick(recomendation)}
            className={classNames(
              'w-full flex justify-start items-center px-4 py-px focus:outline-none',
              'text-gray-800 bg-transparent',
              'hover:text-white hover:bg-gray-800'
            )}
          >
            <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
            {recomendation}
          </button>
        ))}
      <div className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 py-2">
        <button
          onClick={handleSearchClick}
          className={classNames(
            'w-24 h-9 pr-px flex justify-center items-center rounded-lg',
            'text-white bg-gray-800 focus:outline-none',
            'peer-focus:text-gray-800 hover:bg-gray-600'
          )}
        >
          Pesquisar
        </button>
      </div>
    </Transition>
  );
};

export default Dropdown;
