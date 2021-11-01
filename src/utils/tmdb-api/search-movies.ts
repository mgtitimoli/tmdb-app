import getJson from "./get-json";

import type {PaginatedTmdbApiResponse} from "./tmdb-api-response";
import type {TmdbApiMovieListItem} from "./tmdb-api-schema";

type Params = {
  include_adult?: boolean;
  language?: string;
  page?: number;
  primary_release_year?: number;
  query: string;
  region?: string;
  year?: number;
};

type Response = PaginatedTmdbApiResponse<TmdbApiMovieListItem>;

const searchMovies = (params: Params) =>
  getJson<Response>("/search/movie", params);

export default searchMovies;

export type {
  Params as TmdbApiSearchMoviesParams,
  Response as TmdbApiSearchMoviesResponse
};
