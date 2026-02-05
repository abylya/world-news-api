export interface I_news {
  id: number;
  title: string;
  text: string;
  image: string;
  publish_date: string;
  authors: string[];
  url: string;
  language?: string;
  source_country?: string;
  category?: string;
}

export interface I_apiParam {
  ["source-country"]?: string;
  ["max-news-per-cluster"]?: number;
  language?: string;
  ["news-sources"]?: string;
  text?: string;
  data?: string;
  categories?: string;
  number?: number;
  offset?: number;
  ["latest-publish-date"]?: string;
  ["earliest-publish-date"]?: string;
}

export interface I_apiRespons {
  top_news?: { news: I_news[] }[];
  news?: I_news[];
  language: string;
  country: string;
  offset?: number;
  number?: number;
}
export interface IApiResponsSearch {
  news: I_news[];
  numbe: number;
  offset: number;
}

export interface IUseFetchRespons<T> {
  data: T[] | undefined;
  isLoading: boolean;
  error: string;
}

export type GetAPiData<P, R> = (param?: P) => Promise<R>;
