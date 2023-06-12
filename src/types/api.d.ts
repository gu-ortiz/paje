import { RecommendationType, TableType, TermType } from './term';

export type ApiResponseTermsType = {
  count: number;
  previous: string | null;
  next: string | null;
  results: TermType[];
};

export type ApiResponseRecommendationsType = {
  count: number;
  previous: string | null;
  next: string | null;
  results: RecommendationType[];
};

export type ApiResponseTablesType = {
  count: number;
  previous: string | null;
  next: string | null;
  results: TableType[];
};

export type ResponseTermType = {
  status: number;
  statusText: string;
  error: boolean;
  body: TermType;
};

export type ResponseTermsType = {
  status: number;
  statusText: string;
  error: boolean;
  body: ApiResponseTermsType;
};

export type ResponseRecommendationsType = {
  status: number;
  statusText: string;
  error: boolean;
  body: ApiResponseRecommendationsType;
};

export type ResponseTablesType = {
  status: number;
  statusText: string;
  error: boolean;
  body: ApiResponseTablesType;
};
