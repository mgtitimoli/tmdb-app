import styled from "styled-components";
import {DoubleBounce} from "styled-spinkit";

const StyledDoubleBounce = styled(DoubleBounce)`
  margin: 0;
`;

const Container = styled.div`
  align-items: center;
  background-color: rgb(20, 20, 20);
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const PageLoader = () => (
  <Container>
    <StyledDoubleBounce color="#ffffff" size={80} />
  </Container>
);

export default PageLoader;
