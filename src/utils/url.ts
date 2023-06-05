import { FilterKeysType } from 'types/search';

export function isValidURL(url: string) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

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
