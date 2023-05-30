import { getError } from 'utils/error';

export async function getTerms(url: string) {
  const response = await fetch(url);

  if (!response.ok) throw new Error(getError(response.status));

  const data = await response.json();
  return data.results;
}
