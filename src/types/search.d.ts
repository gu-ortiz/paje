export type SearchContextType = {
  searchText: string;
  setSearchText: (value: string) => void;
  filterTables: Record<FilterKeysType, boolean>;
  setFilterTables: (value: Record<FilterKeysType, boolean>) => void;
};

export type FilterKeysType = '18' | '19' | '20' | '22' | 'demaisTerminologias';
