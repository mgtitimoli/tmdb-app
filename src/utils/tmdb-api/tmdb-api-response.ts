/* eslint-disable @typescript-eslint/naming-convention */

type PaginatedTmdbApiResponse<TTmdbApiResult> = {
  page: number;
  results: TTmdbApiResult[];
  total_pages: number;
  total_results: number;
};

export type {PaginatedTmdbApiResponse};
