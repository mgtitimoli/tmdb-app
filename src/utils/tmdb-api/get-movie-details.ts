import getJson from "./get-json";

import type {TmdbApiMovieDetails} from "./tmdb-api-schema";

type Response = TmdbApiMovieDetails;

const getMovieDetails = (movieId: number) =>
  getJson<Response>("/movie/" + movieId);

export default getMovieDetails;

export type {Response as TmdbApiGetMovieDetailsResponse};
