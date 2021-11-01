import styled from "styled-components";

import {UnstyledButton, UnstyledUl} from "@/components/unstyled";

import type {TmdbApiMovieListItem} from "@/utils/tmdb-api/tmdb-api-schema";

import MovieCard from "./movie-card";

type Props = {
  className?: string;
  movieListItems: TmdbApiMovieListItem[];
  onMovieListItemSelect: (movieListItem: TmdbApiMovieListItem) => unknown;
};

const MovieCardButton = styled(UnstyledButton)`
  text-align: left;
`;

const MovieCardContainer = styled.li`
  padding: 12px 0;

  &:not(:first-child) {
    border-top: 1px solid rgb(229, 229, 299);
  }
`;

const renderMovieCardUsing =
  ({onMovieListItemSelect}: Props) =>
  (movieListItem: TmdbApiMovieListItem) =>
    (
      <MovieCardContainer key={movieListItem.id}>
        <MovieCardButton onClick={() => onMovieListItemSelect(movieListItem)}>
          <MovieCard {...{movieListItem}} />
        </MovieCardButton>
      </MovieCardContainer>
    );

const MovieList = (props: Props) => (
  <UnstyledUl className={props.className}>
    {props.movieListItems.map(renderMovieCardUsing(props))}
  </UnstyledUl>
);

export default MovieList;
