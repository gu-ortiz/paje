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
  selected: SelectOptionType;
  setSelected: (value: SelectOptionType) => void;
}) => {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm text-gray-800">{label}</label>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div
            className={classNames(
              'relative w-full flex rounded-lg cursor-default overflow-hidden focus:outline-none',
              'bg-white border border-gray-800 shadow-md sm:text-sm'
            )}
          >
            <Combobox.Input
              className={classNames(
                'w-full h-10 pl-5 pr-0 py-2 rounded-l-lg focus:outline-none',
                'text-gray-800 bg-white placeholder:text-zinc-300'
              )}
              displayValue={(option: SelectOptionType) => option.value}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button
              className={classNames(
                'relative w-12 h-10 pr-px flex justify-center items-center rounded-r-lg',
                'text-gray-800 bg-white focus:outline-none',
                'hover:text-gray-700 active:text-zinc-300'
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
                'absolute z-10 w-full max-h-60 mt-1 rounded-md overflow-auto',
                'text-base bg-white shadow-lg sm:text-sm focus:outline-none'
              )}
            >
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-zinc-300">
                  Nada encontrado.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.id}
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
                        {selected ? (
                          <span
                            className={classNames(
                              'absolute inset-y-0 left-0 flex items-center pl-3',
                              active ? 'text-white' : 'text-gray-800'
                            )}
                          >
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
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
