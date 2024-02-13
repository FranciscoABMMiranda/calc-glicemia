import { useState } from "react";

import Input from "../input/Input";
import {
  StyledCalc,
  StyledForm,
  StyledFrac,
  StyledLine,
  StyledSpan,
} from "./Form.styles";
import { ValueType } from "./Form.types";

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

  return ((currGli! - targetGli!) / fsi! + hcFood! / uhc!).toFixed(1);
}

const Form = () => {
  const [fsi, setFsi] = useState<ValueType>(null);
  const [uhc, setUhc] = useState<ValueType>(null);
  const [targetGli, setTargetGli] = useState<ValueType>(null);
  const [currGli, setCurrGli] = useState<ValueType>(null);
  const [hcFood, setHcFood] = useState<ValueType>(null);

  const total = calulateInsuline(fsi, uhc, targetGli, currGli, hcFood);

  return (
    <StyledForm>
      <Input
        label="FSI"
        type="number"
        onChange={(e) => setFsi(Number(e.target.value))}
      />
      <Input
        label="Equivalente Hidratos de Carbono"
        type="number"
        onChange={(e) => setUhc(Number(e.target.value))}
      />
      <Input
        label="Hidratos refeição"
        type="number"
        onChange={(e) => setHcFood(Number(e.target.value))}
      />
      <Input
        label="Glicemia alvo"
        type="number"
        onChange={(e) => setTargetGli(Number(e.target.value))}
      />
      <Input
        label="Glicemia atual"
        type="number"
        onChange={(e) => setCurrGli(Number(e.target.value))}
      />
      <StyledCalc>
        <StyledFrac>
          <StyledLine>
            <StyledSpan>{`(${currGli ?? "Glicemia atual"} -`}</StyledSpan>
            <StyledSpan>{`${targetGli ?? "Glicemia alvo"})`}</StyledSpan>
          </StyledLine>
          <StyledLine>
            <StyledSpan>{fsi ?? "FSI"}</StyledSpan>
          </StyledLine>
        </StyledFrac>
        {" + "}
        <StyledFrac>
          <StyledLine>
            <StyledSpan>{hcFood ?? "Hidratos refeição"}</StyledSpan>
          </StyledLine>
          <StyledLine>
            <StyledSpan>{uhc ?? "Equivalente Hidratos de Carbono"}</StyledSpan>
          </StyledLine>
        </StyledFrac>
        {" = "}
        <StyledSpan>{total ?? "Total"}</StyledSpan>
      </StyledCalc>
    </StyledForm>
  );
};

export default Form;
