import { useState } from "react";

import {
  StyledContainer,
  StyledCalc,
  StyledForm,
  StyledFrac,
  StyledInput,
  StyledLine,
  StyledSpan,
  StyledDivider,
  StyledResult,
} from "./Form.styles";
import { ValueType } from "./Form.types";

const MIN_CURR_GLI = 120;

const isAnyNull = (arr: ValueType[]) => arr.some((item) => item === null);

function calulateInsuline(
  fsi: ValueType,
  uhc: ValueType,
  targetGli: ValueType,
  currGli: ValueType,
  hcFood: ValueType
) {
  if (
    isAnyNull(Object.values<ValueType>(arguments)) ||
    fsi === 0 ||
    uhc === 0
  ) {
    return 0;
  }

  if (currGli! > MIN_CURR_GLI) {
    return ((currGli! - targetGli!) / fsi! + hcFood! / uhc!).toFixed(1);
  }

  return (hcFood! / uhc!).toFixed(1);
}

const Form = () => {
  const [fsi, setFsi] = useState<ValueType>(
    localStorage.getItem("fsi") ? Number(localStorage.getItem("fsi")) : null
  );
  const [uhc, setUhc] = useState<ValueType>(null);
  const [targetGli, setTargetGli] = useState<ValueType>(
    localStorage.getItem("targetGli")
      ? Number(localStorage.getItem("targetGli"))
      : null
  );
  const [currGli, setCurrGli] = useState<ValueType>(null);
  const [hcFood, setHcFood] = useState<ValueType>(null);

  const total = calulateInsuline(fsi, uhc, targetGli, currGli, hcFood);

  const handleChange =
    (setFunc: (value: ValueType) => void, storageKey?: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length) {
        storageKey && localStorage.setItem(storageKey, value);
        return setFunc(Number(value));
      }
      return setFunc(null);
    };

  return (
    <StyledContainer>
      <StyledForm>
        <StyledInput
          label="FSI"
          type="number"
          onChange={handleChange(setFsi, "fsi")}
          {...(fsi ? { defaultValue: fsi } : {})}
        />
        <StyledInput
          label="Equivalente Hidratos de Carbono"
          type="number"
          onChange={handleChange(setUhc)}
          {...(uhc ? { defaultValue: uhc } : {})}
        />
        <StyledInput
          label="Hidratos refeição"
          type="number"
          onChange={handleChange(setHcFood)}
          {...(hcFood ? { defaultValue: hcFood } : {})}
        />
        <StyledInput
          label="Glicemia atual"
          type="number"
          onChange={handleChange(setCurrGli)}
          {...(currGli ? { defaultValue: currGli } : {})}
        />
        <StyledInput
          label="Glicemia alvo"
          type="number"
          onChange={handleChange(setTargetGli, "targetGli")}
          {...(targetGli ? { defaultValue: targetGli } : {})}
        />
      </StyledForm>
      <StyledCalc>
        <StyledFrac isCancelled={!!currGli && currGli <= MIN_CURR_GLI}>
          <StyledLine>
            <StyledSpan>{`(${currGli ?? "Glicemia atual"} -`}</StyledSpan>
            <StyledSpan>{`${targetGli ?? "Glicemia alvo"})`}</StyledSpan>
          </StyledLine>
          <StyledDivider />
          <StyledLine>
            <StyledSpan>{fsi ?? "FSI"}</StyledSpan>
          </StyledLine>
        </StyledFrac>
        <StyledSpan>{" + "}</StyledSpan>
        <StyledFrac>
          <StyledLine>
            <StyledSpan>{hcFood ?? "Hidratos refeição"}</StyledSpan>
          </StyledLine>
          <StyledDivider />
          <StyledLine>
            <StyledSpan>{uhc ?? "Equivalente Hidratos de Carbono"}</StyledSpan>
          </StyledLine>
        </StyledFrac>
        <StyledSpan>{" = "}</StyledSpan>
        <StyledResult>{total ?? "Total"}</StyledResult>
      </StyledCalc>
    </StyledContainer>
  );
};

export default Form;
