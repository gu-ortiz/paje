import { FilterKeysType } from 'types/search';

export function getSearchParam(query: string) {
  return query ? `&query=${query}` : '';
}

export function getTablesParam(filterTables: Record<FilterKeysType, boolean>) {
  const activeFilters = Object.entries(filterTables)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const tables = activeFilters.join(',');

  return tables ? `&tabela=${tables}` : '';
}
