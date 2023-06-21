'use server';
import {
  ResponseAnvisaType,
  ResponseRecommendationsType,
  ResponseTablesType,
  ResponseTermType,
  ResponseTermsType
} from 'types/api';

export async function getTerm(url: string): Promise<ResponseTermType> {
  const response = await fetch(url, { next: { revalidate: 600 } });

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
        extra_fields: null
      }
    };

  return {
    status: response.status,
    statusText: response.statusText,
    error: false,
    body: await response.json()
  };
}

export async function getAnvisa(url: string): Promise<ResponseAnvisaType> {
  const response = await fetch(url, { next: { revalidate: 600 } });

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {}
    };

  return {
    status: response.status,
    statusText: response.statusText,
    error: false,
    body: await response.json()
  };
}

export async function getTerms(url: string): Promise<ResponseTermsType> {
  const response = await fetch(url, { next: { revalidate: 600 } });

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        count: 0,
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
): Promise<ResponseRecommendationsType> {
  const response = await fetch(url, { next: { revalidate: 60 } });

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        count: 0,
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

export async function getTables(url: string): Promise<ResponseTablesType> {
  const response = await fetch(url, { next: { revalidate: 600 } });

  if (!response.ok)
    return {
      status: response.status,
      statusText: response.statusText,
      error: true,
      body: {
        count: 0,
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
