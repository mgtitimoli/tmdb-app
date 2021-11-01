import styled from "styled-components";

import MoviePoster from "@/components/movie-poster/movie-poster";

import type {TmdbApiMovieListItem} from "@/utils/tmdb-api/tmdb-api-schema";

type Props = {
  movieListItem: TmdbApiMovieListItem;
};

const MovieOverview = styled.p`
  color: rgb(229, 229, 229);
  font-size: 20px;
`;

const MovieTitle = styled.h2`
  color: rgb(229, 229, 229);
  font-size: 32px;
  margin: 0;
`;

const RightContainer = styled.div`
  margin-left: 12px;
`;

const renderRight = ({movieListItem}: Props) => (
  <RightContainer>
    <MovieTitle>{movieListItem.title}</MovieTitle>
    <MovieOverview>{movieListItem.overview}</MovieOverview>
  </RightContainer>
);

const StyledMoviePoster = styled(MoviePoster)`
  height: 100%;
  max-width: 30%;
`;

const renderImage = ({movieListItem}: Props) => (
  <StyledMoviePoster moviePosterPath={movieListItem.poster_path || undefined} />
);

const Container = styled.article`
  display: flex;
`;

const MovieCard = (props: Props) => (
  <Container>
    {renderImage(props)}
    {renderRight(props)}
  </Container>
);

export default MovieCard;
