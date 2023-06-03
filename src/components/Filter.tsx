'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { SearchContext } from 'context/Search';
import { useContext } from 'react';
import { FilterKeysType } from 'types/search';
import FilterCheckbox from './FilterCheckbox';

const Filter = () => {
  const { filterTables, setFilterTables } = useContext(SearchContext);

  const handleCheckboxChange = (filterName: FilterKeysType) => {
    setFilterTables({
      ...filterTables,
      [filterName]: !filterTables[filterName]
    });
  };

  return (
    <div className="w-full h-fit flex flex-col gap-3 bg-transparent">
      <FilterCheckbox
        label="Diárias e Taxas"
        checked={filterTables['18']}
        onChange={() => handleCheckboxChange('18')}
      />
      <FilterCheckbox
        label="Materiais e OPME"
        checked={filterTables['19']}
        onChange={() => handleCheckboxChange('19')}
      />
      <FilterCheckbox
        label="Medicamentos"
        checked={filterTables['20']}
        onChange={() => handleCheckboxChange('20')}
      />
      <FilterCheckbox
        label="Procedimentos"
        checked={filterTables['22']}
        onChange={() => handleCheckboxChange('22')}
      />
      <FilterCheckbox
        label="Demais terminologias"
        checked={filterTables.demaisTerminologias}
        onChange={() => handleCheckboxChange('demaisTerminologias')}
      />
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Panel className="px-4 py-2 text-sm text-gray-800">
              oi
            </Disclosure.Panel>
            <Disclosure.Button className="w-full flex justify-center items-center rounded-lg bg-white px-4 py-2 text-center text-sm text-gray-800 focus:outline-none">
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
