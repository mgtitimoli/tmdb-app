import {getMoviePosterUrl} from "@/utils/tmdb-api";

import noMoviePosterUrl from "./no-movie-poster.svg";

type Props = {
  className?: string;
  moviePosterPath?: string;
};

const getMoviePosterUrlFrom = (moviePosterPath?: string) =>
  moviePosterPath ? getMoviePosterUrl(moviePosterPath) : noMoviePosterUrl;

const MoviePoster = ({className, moviePosterPath}: Props) => (
  <img
    {...{className}}
    alt="Movie Poster"
    src={getMoviePosterUrlFrom(moviePosterPath)}
  />
);

export default MoviePoster;
