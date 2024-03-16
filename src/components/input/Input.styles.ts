import styled from "styled-components";

export const StyledInput = styled.input`
  width: 16rem;
  font-size: 1.4rem;
  padding: 0.8rem;
  border: 0;
  border-radius: 0.4rem;

  &:focus {
    outline: none;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  width: 100%;
  font-size: 1.4rem;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;
