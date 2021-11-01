import prettyMs from "pretty-ms";
import styled from "styled-components";

import MovieRatingField from "@/components/movie-rating-field";

import type {TmdbApiMovieDetails, TmdbApiMovieGenre} from "@/utils/tmdb-api";

import MovieInfoItem from "./movie-info-item";
import MovieInfoText from "./movie-info-text";

type Props = {
  className?: string;
  movieDetails: TmdbApiMovieDetails;
};

const getMovieRating = (movieDetails: TmdbApiMovieDetails) =>
  Math.floor(movieDetails.vote_average / 2);

const MovieRatingItem = styled(MovieInfoItem)`
  align-items: center;
`;

const renderMovieRating = ({movieDetails}: Props) => (
  <MovieRatingItem label="Rating">
    <MovieRatingField
      movieRating={getMovieRating(movieDetails)}
      starIconSize={24}
    />
  </MovieRatingItem>
);

const getMovieGenreName = (movieGenre: TmdbApiMovieGenre) => movieGenre.name;

const formatMovieGenres = (movieDetails: TmdbApiMovieDetails) =>
  movieDetails.genres.map(getMovieGenreName).join(", ");

const renderMovieGenres = ({movieDetails}: Props) => (
  <MovieInfoItem label="Genres">
    <MovieInfoText>{formatMovieGenres(movieDetails)}</MovieInfoText>
  </MovieInfoItem>
);

const formatMovieRuntime = (movieRuntime: number) =>
  prettyMs(movieRuntime * 1000 * 60);

const renderMovieRuntime = (movieRuntime: number) => (
  <MovieInfoItem label="Runtime">
    <MovieInfoText>{formatMovieRuntime(movieRuntime)}</MovieInfoText>
  </MovieInfoItem>
);

const renderMovieRuntimeIfNeeded = ({movieDetails}: Props) =>
  movieDetails.runtime !== null &&
  movieDetails.runtime !== 0 &&
  renderMovieRuntime(movieDetails.runtime);

const renderMovieReleaseDate = (movieReleaseDate: string) => (
  <MovieInfoItem label="Release date">
    <MovieInfoText>{movieReleaseDate}</MovieInfoText>
  </MovieInfoItem>
);

const renderMovieReleaseDateIfNeeded = ({movieDetails}: Props) =>
  movieDetails.release_date &&
  renderMovieReleaseDate(movieDetails.release_date);

const MovieInfo = (props: Props) => (
  <div className={props.className}>
    {renderMovieReleaseDateIfNeeded(props)}
    {renderMovieRuntimeIfNeeded(props)}
    {renderMovieGenres(props)}
    {renderMovieRating(props)}
  </div>
);

export default MovieInfo;
