import styled, {css} from "styled-components";
import {
  Star as StarIcon,
  StarOutline as StarOutlineIcon
} from "@styled-icons/material";

import {UnstyledButton, UnstyledUl} from "@/components/unstyled";

type Props = {
  className?: string;
  movieRating?: number;
  onMovieRatingChange?: (movieRating?: number) => unknown;
  starIconSize: number;
};

const iconCss = css`
  color: rgb(255, 255, 255);
`;

const StyledStarOutlineIcon = styled(StarOutlineIcon)`
  ${iconCss}
`;

const renderStarOutlineIcon = ({starIconSize}: Props) => (
  <StyledStarOutlineIcon size={starIconSize} />
);

const StarFilledIcon = styled(StarIcon)`
  ${iconCss}
`;

const renderStarFilledIcon = ({starIconSize}: Props) => (
  <StarFilledIcon size={starIconSize} />
);

const renderStarIcon = (props: Props, starIndex: number) =>
  props.movieRating && starIndex <= props.movieRating - 1
    ? renderStarFilledIcon(props)
    : renderStarOutlineIcon(props);

const onMovieRatingChangeUsing = (
  {movieRating, onMovieRatingChange}: Props,
  starIndex: number
) =>
  onMovieRatingChange?.(
    movieRating && starIndex === movieRating - 1 ? undefined : starIndex + 1
  );

const renderStarIconWithButton = (props: Props, starIndex: number) => (
  <UnstyledButton onClick={() => onMovieRatingChangeUsing(props, starIndex)}>
    {renderStarIcon(props, starIndex)}
  </UnstyledButton>
);

const renderStarIconWithButtonIfNeeded = (props: Props, starIndex: number) =>
  props.onMovieRatingChange
    ? renderStarIconWithButton(props, starIndex)
    : renderStarIcon(props, starIndex);

const StarIconContainer = styled.li`
  margin-left: 4px;
`;

const renderStarIconUsing = (props: Props) => (_: unknown, starIndex: number) =>
  (
    <StarIconContainer key={starIndex}>
      {renderStarIconWithButtonIfNeeded(props, starIndex)}
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
