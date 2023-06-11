'use server';
import { notFound } from 'next/navigation';
import {
  InternalResponseListType,
  InternalResponseRecommendationsType,
  InternalResponseTermType,
  ResponseRecommendationsType
} from 'types/api';

export async function getTerm(url: string): Promise<InternalResponseTermType> {
  const response = await fetch(url, { next: { revalidate: 0 } });

  if (response.status === 404) notFound();

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        id: 0,
        codigo_tuss: '',
        termo: '',
        tabela: 0,
        dt_inicio_vigencia: '',
        dt_fim_vigencia: '',
        dt_implantacao: '',
        extra_fields: null,
        anvisa_fields: null
      }
    };

  return {
    status: response.status,
    statusText: response.statusText,
    error: false,
    body: await response.json()
  };
}

export async function getTerms(url: string): Promise<InternalResponseListType> {
  const response = await fetch(url, { next: { revalidate: 0 } });

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        next: null,
        previous: null,
        results: []
      }
    };

  return {
    status: response.status,
    statusText: response.statusText,
    error: false,
    body: await response.json()
  };
}

export async function getRecommendations(
  url: string
): Promise<InternalResponseRecommendationsType> {
  const response = await fetch(url, { next: { revalidate: 0 } });

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        next: null,
        previous: null,
        results: []
      }
    };

  const data: ResponseRecommendationsType = await response.json();

  // data.results = data.results
  //   .filter(
  //     (item, index, self) =>
  //       index === self.findIndex((t) => t.match === item.match)
  //   )
  //   .slice(0, 10);

  return {
    status: response.status,
    statusText: response.statusText,
    error: false,
    body: data
  };
}
