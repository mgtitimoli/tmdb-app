import styled from "styled-components";
import {useParams} from "react-router-dom";

import MoviePoster from "@/components/movie-poster";
import PageLayout from "@/components/page-layout";
import {ensureIsDefined} from "@/utils/validation";
import {useTmdbApiGetMovieDetails} from "@/utils/tmdb-api";

import type {TmdbApiMovieDetails} from "@/utils/tmdb-api";

import MovieInfo from "./components/movie-info";

type RouteParams = {
  movieId: string;
};

const MovieOverview = styled.p`
  color: rgb(229, 229, 229);
  font-size: 20px;
  margin: 18px 0 0;
`;

const renderMovieInfoAndOverview = (movieDetails: TmdbApiMovieDetails) => (
  <div>
    <MovieInfo {...{movieDetails}} />
    <MovieOverview>{movieDetails.overview}</MovieOverview>
  </div>
);

const StyledMoviePoster = styled(MoviePoster)`
  @media (max-width: ${PageLayout.mobileBreakpoint}px) {
    margin-bottom: 18px;
  }

  @media (min-width: ${PageLayout.desktopBreakpoint}px) {
    margin-right: 18px;
    max-width: 50%;
  }
`;

const renderMoviePoster = (movieDetails: TmdbApiMovieDetails) => (
  <StyledMoviePoster moviePosterPath={movieDetails.poster_path || undefined} />
);

const ContentContainer = styled.div`
  border-top: 1px solid rgb(229, 229, 229);
  display: flex;
  padding: 24px 0;

  @media (max-width: ${PageLayout.mobileBreakpoint}px) {
    flex-direction: column;
  }
`;

const render = (movieDetails: TmdbApiMovieDetails) => (
  <PageLayout pageTitle={movieDetails.title}>
    <ContentContainer>
      {renderMoviePoster(movieDetails)}
      {renderMovieInfoAndOverview(movieDetails)}
    </ContentContainer>
  </PageLayout>
);

const ensureMovieDetails = (movieDetails?: TmdbApiMovieDetails) =>
  ensureIsDefined(movieDetails, "Expected movieDetails to be defined");

const ShowMoviePage = () => {
  const routeParams = useParams<RouteParams>();

  const movieId = Number(routeParams.movieId);

  const movieDetailsResult = useTmdbApiGetMovieDetails(movieId, {
    suspense: true
  });

  return render(ensureMovieDetails(movieDetailsResult.data));
};

export default ShowMoviePage;
