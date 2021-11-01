import styled from "styled-components";

import type {ReactNode} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  label: string;
};

const MovieInfoLabel = styled.span`
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: 500;
  margin-right: 6px;
`;

const Container = styled.div`
  align-items: baseline;
  display: flex;

  &:not(:first-child) {
    margin-top: 6px;
  }
`;

const MovieInfoItem = ({children, className, label}: Props) => (
  <Container {...{className}}>
    <MovieInfoLabel>{label}:</MovieInfoLabel>
    {children}
  </Container>
);

export default MovieInfoItem;
