export const getPreviousSearches = (input: string) => {
  const searches = localStorage.getItem('searches');

  let searchesArray = searches ? JSON.parse(searches) : [];

  searchesArray = searchesArray.filter((search: string) =>
    search.toLowerCase().startsWith(input.toLowerCase())
  );

  return searchesArray.slice(0, 5);
};

export const saveSearch = (searchText: string) => {
  const searches = localStorage.getItem('searches');

  let searchesArray = searches ? JSON.parse(searches) : [];

  if (!searchText) return searchesArray;

  searchesArray.unshift(searchText);

  searchesArray = [...new Set(searchesArray)];

  searchesArray = searchesArray.slice(0, 20);

  localStorage.setItem('searches', JSON.stringify(searchesArray));

  return searchesArray;
};

export function deleteSearch(searchTerm: string) {
  const searches = localStorage.getItem('searches');

  const searchesArray = searches ? JSON.parse(searches) : [];

  const updatedSearches = searchesArray.filter(
    (search: string) => search !== searchTerm
  );

  localStorage.setItem('searches', JSON.stringify(updatedSearches));

  return updatedSearches;
}
