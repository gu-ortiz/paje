import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { SelectOptionType } from 'types/search';
import { classNames } from 'utils/classnames';

const FilterSelect = ({
  label,
  options,
  selected,
  setSelected
}: {
  label: string;
  options: SelectOptionType[];
  selected: SelectOptionType[];
  setSelected: (value: SelectOptionType[]) => void;
}) => {
  const [query, setQuery] = useState('');

  const terms = query
    .split(',')
    .map((term) => term.toLowerCase().replace(/\s+/g, ''));

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          terms.some((term) =>
            option.value.toLowerCase().replace(/\s+/g, '').includes(term)
          )
        );

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm text-gray-800">{label}</label>
      <Combobox
        multiple
        value={selected}
        onChange={(options: SelectOptionType[]) => {
          setSelected(options.slice(-1));
        }}
        by={(a, b) => a.id === b.id}
      >
        <div className="relative">
          <div
            className={classNames(
              'relative w-full h-9 flex rounded-lg cursor-default overflow-hidden focus:outline-none',
              'bg-white border border-gray-800 shadow-md sm:text-sm'
            )}
          >
            <Combobox.Input
              type="text"
              className={classNames(
                'w-full h-full pl-5 pr-0 py-2 rounded-l-lg focus:outline-none peer',
                'text-zinc-300 bg-white focus:text-gray-800 placeholder:text-zinc-300'
              )}
              placeholder="Selecionar"
              spellCheck="false"
              displayValue={(options: SelectOptionType[]) =>
                options.map((option) => option.value).join('')
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button
              className={classNames(
                'relative w-12 h-full pr-px flex justify-center items-center rounded-r-lg',
                'text-zinc-300 bg-white focus:outline-none',
                'peer-focus:text-gray-800 hover:text-gray-800 active:text-gray-600'
              )}
            >
              <ChevronUpDownIcon className="block h-5 w-5" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className={classNames(
                'absolute w-[calc(100%-2px)] max-h-60 z-10 mt-1 mx-px origin-top-right rounded-md overflow-y-auto',
                'text-base bg-white shadow-md sm:text-sm focus:outline-none',
                'sm:scrollbar-thin sm:scrollbar-thumb-gray-800 sm:scrollbar-thumb-rounded-md sm:scrollbar-track-transparent'
              )}
            >
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-zinc-300">
                  Nada encontrado.
                </div>
              ) : (
                filteredOptions.map((option, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative flex pl-9 pr-4 py-2 text-sm cursor-pointer select-none ${
                        active ? 'bg-gray-800 text-white' : 'text-gray-800'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.value}
                        </span>
                        {selected && (
                          <span
                            className={classNames(
                              'absolute inset-y-0 left-0 flex items-center pl-3',
                              active ? 'text-white' : 'text-gray-800'
                            )}
                          >
                            <CheckIcon
                              className="block h-4 w-4"
                              aria-hidden="true"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default FilterSelect;
