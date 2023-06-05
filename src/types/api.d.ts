import { TermType } from './term';

export type ResponseType = {
  previous: string | null;
  next: string | null;
  results: TermType[];
};

export type ResponseListType = {
  status: number;
  statusText: string;
  error: boolean;
  body: ResponseType;
};

export type ResponseTermType = {
  status: number;
  statusText: string;
  error: boolean;
  body: TermType;
};
