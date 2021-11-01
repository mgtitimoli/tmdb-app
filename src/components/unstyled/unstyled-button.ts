import styled from "styled-components";

const UnstyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  :focus {
    outline: none;
  }
`;

export default UnstyledButton;
