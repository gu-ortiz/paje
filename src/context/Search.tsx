'use client';
import { ReactNode, createContext, useState } from 'react';
import { FilterKeysType, SearchContextType } from 'types/search';

const initialFilterTables = {
  '18': false,
  '19': false,
  '20': false,
  '22': false,
  demaisTerminologias: false
};

const initialContext = {
  searchText: '',
  setSearchText: () => {
    throw new Error('setSearchTerm was called without being initialized');
  },
  filterTables: initialFilterTables,
  setFilterTables: () => {
    throw new Error('setFilterTables was called without being initialized');
  }
};

export const SearchContext = createContext<SearchContextType>(initialContext);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState(initialContext.searchText);
  const [filterTables, setFilterTables] =
    useState<Record<FilterKeysType, boolean>>(initialFilterTables);

  return (
    <SearchContext.Provider
      value={{ searchText, setSearchText, filterTables, setFilterTables }}
    >
      {children}
    </SearchContext.Provider>
  );
};
