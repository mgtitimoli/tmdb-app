import styled from "styled-components";
import {generatePath, useHistory} from "react-router";
import {useDebounce} from "usehooks-ts";
import {useMemo, useState} from "react";

import type {History} from "history";
import type {ReactStateTupleFrom} from "@mgtitimoli/react-state";

import MovieRatingField from "@/components/movie-rating-field";
import PageLayout from "@/components/page-layout";
import {routePaths} from "@/components/router/route-path";
import {UnstyledInput} from "@/components/unstyled";
import {
  useTmdbApiDiscoverMovies,
  useTmdbApiSearchMovies
} from "@/utils/tmdb-api";

import type {
  TmdbApiMovieListItem,
  UseTmdbApiDiscoverMoviesResult,
  UseTmdbApiSearchMoviesResult
} from "@/utils/tmdb-api";

import MovieList from "./components/movie-list";

type State = {
  filteredMovieRating?: number;
  moviesQuery?: string;
};

type StateTuple = ReactStateTupleFrom<State>;

const filterMovieListItems = (
  movieListItems: TmdbApiMovieListItem[],
  filteredMovieRating: number
) =>
  movieListItems.filter(
    movieListItem =>
      Math.floor(movieListItem.vote_average) === filteredMovieRating * 2
  );

const filterMovieListItemsIfNeeded = (
  {filteredMovieRating}: State,
  movieListItems: TmdbApiMovieListItem[]
) =>
  filteredMovieRating
    ? filterMovieListItems(movieListItems, filteredMovieRating)
    : movieListItems;

const getUnfilteredMovieListItems = (
  state: State,
  discoverMoviesResult: UseTmdbApiDiscoverMoviesResult,
  searchMoviesResult: UseTmdbApiSearchMoviesResult
) =>
  (state.moviesQuery
    ? searchMoviesResult.data?.results
    : discoverMoviesResult.data?.results) || [];

const getMovieListItems = (
  state: State,
  discoverMoviesResult: UseTmdbApiDiscoverMoviesResult,
  searchMoviesResult: UseTmdbApiSearchMoviesResult
) =>
  filterMovieListItemsIfNeeded(
    state,
    getUnfilteredMovieListItems(state, discoverMoviesResult, searchMoviesResult)
  );

const renderMovieList = (
  state: State,
  discoverMoviesResult: UseTmdbApiDiscoverMoviesResult,
  searchMoviesResult: UseTmdbApiSearchMoviesResult,
  history: History
) => (
  <MovieList
    movieListItems={getMovieListItems(
      state,
      discoverMoviesResult,
      searchMoviesResult
    )}
    onMovieListItemSelect={movieListItem =>
      history.push(
        generatePath(routePaths.showMovie, {movieId: movieListItem.id})
      )
    }
  />
);

const withState = {
  setMoviesQuery: (moviesQuery: string) => (state: State) => ({
    ...state,
    moviesQuery
  }),

  setFilteredRating: (filteredMovieRating?: number) => (state: State) => ({
    ...state,
    filteredMovieRating
  })
};

const StyledMovieRatingField = styled(MovieRatingField)`
  @media (max-width: ${PageLayout.mobileBreakpoint}px) {
    align-self: center;
    margin-top: 12px;
  }

  @media (min-width: ${PageLayout.desktopBreakpoint}px) {
    margin-left: 12px;
  }
`;

const SearchMoviesInput = styled(UnstyledInput)`
  flex: 1;
  font-size: 28px;
  padding: 6px 12px;
`;

const FiltersContainer = styled.div`
  border-color: rgb(229, 229, 229);
  border-style: solid;
  border-width: 1px 0 1px;
  display: flex;
  margin: 0 auto;
  padding: 24px 0;

  @media (max-width: ${PageLayout.mobileBreakpoint}px) {
    flex-direction: column;
  }
`;

const renderFilters = ([state, setState]: StateTuple) => (
  <FiltersContainer>
    <SearchMoviesInput
      onChange={event => setState(withState.setMoviesQuery(event.target.value))}
      placeholder="Search Movies"
    />
    <StyledMovieRatingField
      movieRating={state.filteredMovieRating}
      onMovieRatingChange={movieRating =>
        setState(withState.setFilteredRating(movieRating))
      }
      starIconSize={42}
    />
  </FiltersContainer>
);

const render = (
  stateTuple: StateTuple,
  discoverMoviesResult: UseTmdbApiDiscoverMoviesResult,
  searchMoviesResult: UseTmdbApiSearchMoviesResult,
  history: History
) => (
  <PageLayout pageTitle="DISCOVER MOVIES">
    {renderFilters(stateTuple)}
    {renderMovieList(
      stateTuple[0],
      discoverMoviesResult,
      searchMoviesResult,
      history
    )}
  </PageLayout>
);

const getSearchMoviesParams = (moviesQuery?: string) => ({
  query: moviesQuery
});

const noSearchMoviesParams = {
  query: undefined
};

const initialState: State = {
  moviesQuery: undefined
};

const DiscoverMoviesPage = () => {
  const [state, setState] = useState(initialState);

  const moviesQueryDebounced = useDebounce(state.moviesQuery, 500);

  // We are memoizing to stabilize useTmdbApiSearchMovies
  const searchMovieParams = useMemo(
    () => getSearchMoviesParams(moviesQueryDebounced),
    [moviesQueryDebounced]
  );

  const searchMoviesResult = useTmdbApiSearchMovies(
    searchMovieParams || noSearchMoviesParams
  );

  const discoverMoviesResult = useTmdbApiDiscoverMovies();

  const history = useHistory();

  return render(
    [state, setState],
    discoverMoviesResult,
    searchMoviesResult,
    history
  );
};

export default DiscoverMoviesPage;
