import styled from "styled-components";

import type {ReactNode} from "react";

type Props = {
  children: ReactNode;
  pageTitle: string;
};

const Title = styled.h1`
  color: rgb(255, 255, 255);
  font-size: 48px;
  margin: 0;
  padding: 24px 0;
  text-align: center;
`;

const renderTitle = ({pageTitle}: Props) => <Title>{pageTitle}</Title>;

const mobileBreakpoint = 780;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: ${mobileBreakpoint}px;
`;

const Container = styled.div`
  background-color: rgb(20, 20, 20);
  min-height: 100vh;
  padding: 0 12px;
`;

const PageLayout = (props: Props) => (
  <Container>
    <InnerContainer>
      {renderTitle(props)}
      {props.children}
    </InnerContainer>
  </Container>
);

export default Object.assign(PageLayout, {
  desktopBreakpoint: mobileBreakpoint + 1,
  mobileBreakpoint
});
