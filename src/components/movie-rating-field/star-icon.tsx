import styled, {css} from "styled-components";
import {
  Star as StarFilledIcon,
  StarOutline as StarOutlineIcon
} from "@styled-icons/material";

import {UnstyledButton} from "@/components/unstyled";

type Props = {
  isFilled?: boolean;
  onClick?: () => unknown;
  size: number;
};

const iconCss = css`
  color: rgb(255, 255, 255);
`;

const StyledStarOutlineIcon = styled(StarOutlineIcon)`
  ${iconCss}
`;

const renderStarOutlineIcon = ({size}: Props) => (
  <StyledStarOutlineIcon {...{size}} />
);

const StyledStarFilledIcon = styled(StarFilledIcon)`
  ${iconCss}
`;

const renderStarFilledIcon = ({size}: Props) => (
  <StyledStarFilledIcon {...{size}} />
);

const renderIcon = (props: Props) =>
  props.isFilled ? renderStarFilledIcon(props) : renderStarOutlineIcon(props);

const renderWithButton = (props: Props) => (
  <UnstyledButton onClick={props.onClick}>{renderIcon(props)}</UnstyledButton>
);

const StarIcon = (props: Props) =>
  props.onClick ? renderWithButton(props) : renderIcon(props);

export default StarIcon;
