import useSWR from "swr";

import type {SWRConfiguration, SWRResponse} from "swr";

import searchMovies from "./search-movies";

import type {
  TmdbApiSearchMoviesParams,
  TmdbApiSearchMoviesResponse
} from "./search-movies";

type Params = Omit<TmdbApiSearchMoviesParams, "query"> & {
  query?: TmdbApiSearchMoviesParams["query"];
};

type Result = SWRResponse<TmdbApiSearchMoviesResponse, Error>;

const searchMoviesFetcher = (
  cacheKey: string,
  params: TmdbApiSearchMoviesParams
) => searchMovies(params);

const useTmdbApiSearchMovies = (
  params: Params,
  configuration?: SWRConfiguration<TmdbApiSearchMoviesResponse>
) =>
  useSWR(
    params.query ? ["tmdbApi.searchMovies", params] : null,
    searchMoviesFetcher,
    configuration
  );

export default useTmdbApiSearchMovies;

export type {Result as UseTmdbApiSearchMoviesResult};
