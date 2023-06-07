'use server';
import { notFound } from 'next/navigation';
import { ResponseListType, ResponseTermType, ResponseType } from 'types/api';

export async function getTerm(url: string): Promise<ResponseTermType> {
  const response = await fetch(url, { next: { revalidate: 600 } });

  if (response.status === 404) notFound();

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        codigo_tuss: '',
        termo: '',
        tabela: 0,
        dt_inicio_vigencia: '',
        dt_fim_vigencia: '',
        dt_implantacao: '',
        extra_fields: null,
        anvisa: null
      }
    };

  const data: ResponseType = await response.json();

  return {
    status: response.status,
    statusText: response.statusText,
    error: false,
    body: data.results[0]
  };
}

export async function getTerms(url: string): Promise<ResponseListType> {
  const response = await fetch(url, { next: { revalidate: 600 } });

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
