import styled from "styled-components";

import * as media from "../../styles/custom-media.styles";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: lightgreen;
  padding: 0;
`;

export const StyledSection = styled.section`
  width: 14rem;
  border-radius: 1rem;
  position: absolute;
  left: -7rem;
  bottom: 100%;
  padding: 1rem;
  z-index: 1;
  border-radius: 1rem;
  background-color: grey;

  ${media.mobileMedia} {
    left: 2.4rem;
    bottom: 0;
  }
`;
