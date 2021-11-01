import useSWR from "swr";

import type {SWRConfiguration, SWRResponse} from "swr";

import getMovieDetails from "./get-movie-details";

import type {TmdbApiGetMovieDetailsResponse} from "./get-movie-details";

type Result = SWRResponse<TmdbApiGetMovieDetailsResponse, Error>;

const getMovieDetailsFetcher = (cacheKey: string, movieId: number) =>
  getMovieDetails(movieId);

const useTmdbApiGetMovieDetails = (
  movieId: number,
  configuration?: SWRConfiguration<TmdbApiGetMovieDetailsResponse>
) =>
  useSWR(
    ["tmdbApi.getMovieDetails", movieId],
    getMovieDetailsFetcher,
    configuration
  );

export default useTmdbApiGetMovieDetails;

export type {Result as UseTmdbApiGetMovieDetailsResult};
