'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { SearchContext } from 'context/Search';
import { useContext } from 'react';
import { FilterKeysType } from 'types/search';
import { getTable } from 'utils/tuss';
import FilterCheckbox from './FilterCheckbox';
import FilterSelect from './FilterSelect';

const Filter = () => {
  const {
    filterTables,
    setFilterTables,
    filterLaboratory,
    setFilterLaboratory
  } = useContext(SearchContext);

  const handleCheckboxChange = (filterName: FilterKeysType) => {
    setFilterTables({
      ...filterTables,
      [filterName]: !filterTables[filterName]
    });
  };

  return (
    <div className="w-full h-fit flex flex-col gap-3 bg-transparent">
      {Object.keys(filterTables).map((table, i) => (
        <FilterCheckbox
          key={i}
          label={getTable(table)}
          checked={filterTables[table as FilterKeysType]}
          onChange={() => handleCheckboxChange(table as FilterKeysType)}
        />
      ))}
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Panel>
              <FilterSelect
                label="Laboratórios"
                selected={filterLaboratory}
                setSelected={setFilterLaboratory}
                options={[
                  {
                    id: 0,
                    value: 'Laboratório 1'
                  },
                  {
                    id: 1,
                    value: 'Laboratório 2'
                  },
                  {
                    id: 2,
                    value: 'Laboratório 3'
                  }
                ]}
              />
            </Disclosure.Panel>
            <Disclosure.Button className="w-full flex justify-center items-center bg-transparent px-4 py-2 focus:outline-none">
              <ChevronDownIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-gray-800 flex-shrink-0`}
              />
            </Disclosure.Button>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Filter;
