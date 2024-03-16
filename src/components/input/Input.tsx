import type React from "react";
import Tooltip from "../tooltip/Tooltip";

import { StyledContainer, StyledInput, StyledLabel } from "./Input.styles";
import { InputProps } from "./Input.types";

const Input: React.FC<InputProps> = ({
  label,
  description,
  ...remainingProps
}) => {
  console.log({ description });
  return (
    <StyledContainer>
      {label && (
        <StyledLabel>
          {label}
          {description && <Tooltip description={description} />}
        </StyledLabel>
      )}

      <StyledInput {...remainingProps} />
    </StyledContainer>
  );
};

export default Input;
