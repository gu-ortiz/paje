'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { SearchContext } from 'context/Search';
import { useContext } from 'react';
import { FilterFieldKeysType, FilterTableKeysType } from 'types/search';
import { getTableLabel, getTermLabel } from 'utils/tuss';
import FilterCheckbox from './FilterCheckbox';

const Filter = () => {
  const { filterTables, setFilterTables, filterFields, setFilterFields } =
    useContext(SearchContext);

  const handleTablesChange = (filterName: FilterTableKeysType) => {
    setFilterTables({
      ...filterTables,
      [filterName]: !filterTables[filterName]
    });
  };

  const handleFieldsChange = (filterName: FilterFieldKeysType) => {
    setFilterFields({
      ...filterFields,
      [filterName]: !filterFields[filterName]
    });
  };

  return (
    <div className="w-full h-fit flex flex-col gap-3">
      <div className="w-full flex flex-col gap-2">
        <span className="text-gray-800 text-xs font-bold">Tabelas</span>
        {Object.keys(filterTables).map((table, i) => (
          <FilterCheckbox
            key={i}
            label={getTableLabel(table)}
            checked={filterTables[table as FilterTableKeysType]}
            onChange={() => handleTablesChange(table as FilterTableKeysType)}
          />
        ))}
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Panel className="w-full flex flex-col gap-2">
              <span className="text-gray-800 text-xs font-bold">Campos</span>
              {Object.keys(filterFields).map((field, i) => (
                <FilterCheckbox
                  key={i}
                  label={getTermLabel(field)}
                  checked={filterFields[field as FilterFieldKeysType]}
                  onChange={() =>
                    handleFieldsChange(field as FilterFieldKeysType)
                  }
                />
              ))}
            </Disclosure.Panel>
            <Disclosure.Button className="w-full flex justify-center items-center bg-transparent px-4 py-2 focus:outline-none">
              <ChevronDownIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-gray-800 active:text-gray-600 flex-shrink-0`}
              />
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Filter;
