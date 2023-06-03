'use client';
import { ReactNode, createContext, useState } from 'react';
import { SearchContextType } from 'types/context';

export const SearchContext = createContext<SearchContextType>({
  searchText: '',
  setSearchText: () => {
    throw new Error('setSearchTerm was called without being initialized');
  }
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
