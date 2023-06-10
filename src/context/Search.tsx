'use client';
import { ReactNode, createContext, useState } from 'react';
import {
  FilterFieldKeysType,
  FilterTableKeysType,
  SearchContextType
} from 'types/search';

const initialTablesState = {
  '18': false,
  '19': false,
  '20': false,
  '22': false,
  demaisTerminologias: false
};

const initialFieldsState = {
  termo: false,
  laboratorio: false,
  modelo: false,
  fabricante: false,
  codigo_anvisa: false,
  nome_tecnico: false,
  apresentacao: false
};

const initialContext = {
  searchText: '',
  setSearchText: () => {
    throw new Error('setSearchTerm was called without being initialized');
  },
  filterTables: initialTablesState,
  setFilterTables: () => {
    throw new Error('setFilterTables was called without being initialized');
  },
  filterFields: initialFieldsState,
  setFilterFields: () => {
    throw new Error('setFilterFields was called without being initialized');
  }
};

export const SearchContext = createContext<SearchContextType>(initialContext);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState(initialContext.searchText);
  const [filterTables, setFilterTables] =
    useState<Record<FilterTableKeysType, boolean>>(initialTablesState);
  const [filterFields, setFilterFields] =
    useState<Record<FilterFieldKeysType, boolean>>(initialFieldsState);

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
        filterTables,
        setFilterTables,
        filterFields,
        setFilterFields
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
