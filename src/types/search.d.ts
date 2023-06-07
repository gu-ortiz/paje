export type SearchContextType = {
  searchText: string;
  setSearchText: (value: string) => void;
  filterTables: Record<FilterKeysType, boolean>;
  setFilterTables: (value: Record<FilterKeysType, boolean>) => void;
  filterLaboratory: SelectOptionType[];
  setFilterLaboratory: (value: SelectOptionType[]) => void;
};

export type FilterKeysType = '18' | '19' | '20' | '22' | 'demaisTerminologias';

export type SelectOptionType = {
  id: number;
  value: string;
};
