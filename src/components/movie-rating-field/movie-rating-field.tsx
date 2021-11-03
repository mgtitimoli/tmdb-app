import styled from "styled-components";

import {UnstyledUl} from "@/components/unstyled";

import StarIcon from "./star-icon";

type Props = {
  className?: string;
  movieRating?: number;
  onMovieRatingChange?: (movieRating?: number) => unknown;
  starIconSize: number;
};

const onMovieRatingChangeUsing =
  ({movieRating, onMovieRatingChange}: Props, starIndex: number) =>
  () =>
    onMovieRatingChange?.(
      movieRating && starIndex === movieRating - 1 ? undefined : starIndex + 1
    );

const isStarIconFilled = ({movieRating}: Props, starIndex: number) =>
  movieRating !== undefined && starIndex <= movieRating - 1;

const StarIconContainer = styled.li`
  margin-left: 4px;
`;

const renderStarIconUsing = (props: Props) => (_: unknown, starIndex: number) =>
  (
    <StarIconContainer key={starIndex}>
      <StarIcon
        isFilled={isStarIconFilled(props, starIndex)}
        onClick={
          props.onMovieRatingChange &&
          onMovieRatingChangeUsing(props, starIndex)
        }
        size={props.starIconSize}
      />
    </StarIconContainer>
  );

const maxStars = 5;

const renderAllStarIconButtons = (props: Props) =>
  Array.from({length: maxStars}).map(renderStarIconUsing(props));

const Container = styled(UnstyledUl)`
  display: flex;
  justify-content: space-between;
  padding-right: 4px;
`;

const MovieRatingField = (props: Props) => (
  <Container className={props.className}>
    {renderAllStarIconButtons(props)}
  </Container>
);

export default MovieRatingField;
