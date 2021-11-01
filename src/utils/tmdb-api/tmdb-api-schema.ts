import type {TmdbApiMovieStatus} from "./tmdb-api-movie-status";

/* eslint-disable @typescript-eslint/naming-convention */

type TmdbApiLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type TmdbApiCompany = {
  description: string;
  headquarters: string;
  homepage: string;
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
  parent_company: null | TmdbApiCompany;
};

type TmdbApiMovieDetailsCountry = {
  iso_3166_1: string;
  name: string;
};

type TmdbApiMovieDetailsCompany = Pick<
  TmdbApiCompany,
  "id" | "logo_path" | "name" | "origin_country"
>;

type TmdbApiMovieGenre = {
  id: number;
  name: string;
};

type TmdbApiCollectionPart = {
  adult: boolean;
  backdrop_path: null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TmdbApiCollection = {
  backdrop_path: string;
  id: number;
  name: string;
  overview: string;
  parts: TmdbApiCollectionPart[];
  poster_path: string | null;
};

type TmdbApiMovieDetailsCollection = Pick<
  TmdbApiCollection,
  "backdrop_path" | "id" | "name" | "poster_path"
>;

type TmdbApiMovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | TmdbApiMovieDetailsCollection;
  budget: number;
  genres: TmdbApiMovieGenre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: TmdbApiMovieDetailsCompany[];
  production_countries: TmdbApiMovieDetailsCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: TmdbApiLanguage[];
  status: TmdbApiMovieStatus;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TmdbApiMovieListItem = Pick<
  TmdbApiMovieDetails,
  | "adult"
  | "backdrop_path"
  | "id"
  | "original_language"
  | "original_title"
  | "overview"
  | "popularity"
  | "poster_path"
  | "release_date"
  | "title"
  | "video"
  | "vote_average"
  | "vote_count"
> & {
  genre_ids: number[];
};

/* eslint-enable */

export type {TmdbApiMovieDetails, TmdbApiMovieGenre, TmdbApiMovieListItem};
