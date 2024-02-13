import type React from "react";

import { StyledContainer, StyledInput, StyledLabel } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({ label, ...remainingProps }) => {
  return (
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...remainingProps} />
    </StyledContainer>
  );
};

export default Input;
