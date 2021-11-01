import useSWR from "swr";

import type {SWRConfiguration, SWRResponse} from "swr";

import discoverMovies from "./discover-movies";

import type {TmdbApiDiscoverMoviesResponse} from "./discover-movies";

type Result = SWRResponse<TmdbApiDiscoverMoviesResponse, Error>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const discoverMoviesFetcher = (cacheKey: string) => discoverMovies();

const useTmdbApiDiscoverMovies = (
  configuration?: SWRConfiguration<TmdbApiDiscoverMoviesResponse>
): Result =>
  useSWR("tmdbApi.discoverMovies", discoverMoviesFetcher, configuration);

export default useTmdbApiDiscoverMovies;

export type {Result as UseTmdbApiDiscoverMoviesResult};
