'use server';
import { notFound } from 'next/navigation';
import { getError } from 'utils/error';

export async function getTerms(url: string) {
  const response = await fetch(url, { next: { revalidate: 0 } });

  if (!response.ok) throw new Error(getError(response.status));

  const data = await response.json();
  return data;
}

export async function getTerm(url: string) {
  const response = await fetch(url, { next: { revalidate: 600 } });

  if (!response.ok) notFound();

  const data = await response.json();
  return data;
}
