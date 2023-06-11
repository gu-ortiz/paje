export type SearchContextType = {
  searchText: string;
  setSearchText: (value: string) => void;
  filterTables: Record<FilterTableKeysType, boolean>;
  setFilterTables: (value: Record<FilterTableKeysType, boolean>) => void;
  filterFields: Record<FilterFieldKeysType, boolean>;
  setFilterFields: (value: Record<FilterFieldKeysType, boolean>) => void;
};

export type FilterTableKeysType =
  | '18'
  | '19'
  | '20'
  | '22'
  | 'demaisTerminologias';

export type FilterFieldKeysType =
  | 'codigo_tuss'
  | 'termo'
  | 'laboratorio'
  | 'modelo'
  | 'fabricante'
  | 'codigo_anvisa'
  | 'nome_tecnico'
  | 'apresentacao';

export type SelectOptionType = {
  id: number;
  value: string;
};
