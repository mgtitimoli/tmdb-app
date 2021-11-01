import getJson from "./get-json";

import type {PaginatedTmdbApiResponse} from "./tmdb-api-response";
import type {TmdbApiMovieListItem} from "./tmdb-api-schema";

type Response = PaginatedTmdbApiResponse<TmdbApiMovieListItem>;

const discoverMovies = () => getJson<Response>("/discover/movie");

export default discoverMovies;

export type {Response as TmdbApiDiscoverMoviesResponse};
