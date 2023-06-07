'use client';
import { ReactNode, createContext, useState } from 'react';
import {
  FilterKeysType,
  SearchContextType,
  SelectOptionType
} from 'types/search';

const initialCheckboxState = {
  '18': false,
  '19': false,
  '20': false,
  '22': false,
  demaisTerminologias: false
};

const initialSelectState: SelectOptionType[] = [];

const initialContext = {
  searchText: '',
  setSearchText: () => {
    throw new Error('setSearchTerm was called without being initialized');
  },
  filterTables: initialCheckboxState,
  setFilterTables: () => {
    throw new Error('setFilterTables was called without being initialized');
  },
  filterLaboratory: initialSelectState,
  setFilterLaboratory: () => {
    throw new Error('setFilterLaboratory was called without being initialized');
  }
};

export const SearchContext = createContext<SearchContextType>(initialContext);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState(initialContext.searchText);
  const [filterTables, setFilterTables] =
    useState<Record<FilterKeysType, boolean>>(initialCheckboxState);
  const [filterLaboratory, setFilterLaboratory] = useState(initialSelectState);

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        filterTables,
        setFilterTables,
        filterLaboratory,
        setFilterLaboratory
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
