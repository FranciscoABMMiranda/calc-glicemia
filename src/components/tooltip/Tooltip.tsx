import type React from "react";
import { useState } from "react";

import { StyledContainer, StyledButton, StyledSection } from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

const Tooltip: React.FC<TooltipProps> = ({
  description,
  ...remainingProps
}) => {
  const [enable, setEnable] = useState(false);

  const handleClick = () => setEnable((prev) => !prev);
  return (
    <StyledContainer {...remainingProps}>
      <StyledButton type="button" onClick={handleClick}>
        i
      </StyledButton>
      {enable && <StyledSection>{description}</StyledSection>}
    </StyledContainer>
  );
};

export default Tooltip;
