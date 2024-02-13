import styled from "styled-components";

export const StyledForm = styled.form``;

export const StyledCalc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;

export const StyledFrac = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 1rem;

  &::after {
    content: "";
    top: 50%;
    position: absolute;
    width: 100%;
    height: 2px;
    background: white;
  }
`;

export const StyledLine = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  font-size: 1.1rem;

  &:not(:first-child) {
    margin-left: 0.4rem;
  }
`;
