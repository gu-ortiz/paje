import { FilterFieldKeysType, FilterTableKeysType } from 'types/search';

export function isValidURL(url: string) {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

export function getQueryParam(query: string) {
  return query ? `&query=${query}` : '';
}

export function getFieldsParam(
  filterFields: Record<FilterFieldKeysType, boolean>
) {
  const activeFilters = Object.entries(filterFields)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const fields = activeFilters.join(',');

  return fields ? `&fields=${fields}` : '';
}

export function getTablesParam(
  filterTables: Record<FilterTableKeysType, boolean>
) {
  const activeFilters = Object.entries(filterTables)
    .filter(([, value]) => value)
    .map(([key]) => key);

  const tables = activeFilters.join(',');

  return tables ? `&tabelas=${tables}` : '';
}
