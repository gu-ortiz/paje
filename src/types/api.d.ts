import { TermType } from './term';

export type ResponseTermsType = {
  previous: string | null;
  next: string | null;
  results: TermType[];
};

export type ResponseRecommendationsType = {
  previous: string | null;
  next: string | null;
  results: string[];
};

export type InternalResponseListType = {
  status: number;
  statusText: string;
  error: boolean;
  body: ResponseTermsType;
};

export type InternalResponseTermType = {
  status: number;
  statusText: string;
  error: boolean;
  body: TermType;
};

export type InternalResponseRecommendationsType = {
  status: number;
  statusText: string;
  error: boolean;
  body: ResponseRecommendationsType;
};
