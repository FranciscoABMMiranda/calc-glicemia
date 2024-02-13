import styled, { css } from "styled-components";

import * as media from "../../styles/custom-media.styles";

import Input from "../input/Input";
import { FracStyleProps } from "./Form.types";

export const StyledContainer = styled.section`
  margin: 0 1.2rem;
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  ${media.mobileMedia} {
    grid-template-columns: 1fr;
  }

  ${media.gteSmallMedia} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCalc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  ${media.gteSmallMedia} {
    flex-direction: row;
  }
`;

export const StyledFrac = styled.div<FracStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: 1.6rem;

  &:after,
  &:before {
    display: none;
    content: "";
    top: 50%;
    position: absolute;
    width: 8rem;
    height: 0.2rem;
    background: white;
    transform: rotate(45deg);
  }

  &:before {
    transform: rotate(-45deg);
  }

  ${({ isCancelled }) =>
    isCancelled &&
    css`
      &:after,
      &:before {
        display: block;
      }
    `}
`;

export const StyledDivider = styled.div`
  width: 100%;
  height: 0.2rem;
  background: white;
`;

export const StyledLine = styled.div`
  display: flex;
`;

export const StyledSpan = styled.span`
  font-size: 1.6rem;

  &:not(:first-child) {
    margin-left: 0.4rem;
  }
`;

export const StyledInput = styled(Input)`
  margin-bottom: 0.8rem;
`;

export const StyledResult = styled.div`
  margin-top: 0.8rem;
  padding: 0.4rem 1.2rem;
  border: 0.1rem solid white;
  border-radius: 0.8rem;

  font-size: 2.4rem;

  ${media.gteSmallMedia} {
    margin-top: 0;
    margin-left: 1.2rem;
  }
`;
