import useFormData from "../../hooks/useFormData/useFormData";
import { DataInputs } from "../../hooks/useFormData/useFormData.types";
import { ValueType } from "../../types/dataTypes";
import calulateInsuline from "../../utils/calculateInsuline";

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

const INPUTS = [
  DataInputs.FSI,
  DataInputs.TARGET_GLI,
  DataInputs.UHC,
  DataInputs.CURR_GLI,
  DataInputs.HC_FOOD,
];

const Form = () => {
  const { fsi, uhc, targetGli, currGli, hcFood, dataSpec } = useFormData();

  const total = calulateInsuline({ fsi, uhc, targetGli, currGli, hcFood });

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
        {INPUTS.map((inputKey) => (
          <StyledInput
            key={dataSpec[inputKey].label}
            label={dataSpec[inputKey].label}
            description={dataSpec[inputKey].description}
            type="number"
            onChange={handleChange(
              dataSpec[inputKey].setFunc,
              dataSpec[inputKey].localStorageKey
            )}
            {...(dataSpec[inputKey].defaultValue
              ? { defaultValue: Number(dataSpec[inputKey].defaultValue) }
              : {})}
          />
        ))}
      </StyledForm>
      <StyledCalc>
        <StyledFrac
          isCancelled={!!currGli && !!targetGli && currGli <= targetGli}
        >
          <StyledLine>
            <StyledSpan>{`(${
              currGli ?? dataSpec[DataInputs.CURR_GLI].label
            } -`}</StyledSpan>
            <StyledSpan>{`${
              targetGli ?? dataSpec[DataInputs.CURR_GLI].label
            })`}</StyledSpan>
          </StyledLine>
          <StyledDivider />
          <StyledLine>
            <StyledSpan>{fsi ?? dataSpec[DataInputs.FSI].label}</StyledSpan>
          </StyledLine>
        </StyledFrac>
        <StyledSpan>{" + "}</StyledSpan>
        <StyledFrac>
          <StyledLine>
            <StyledSpan>
              {hcFood ?? dataSpec[DataInputs.HC_FOOD].label}
            </StyledSpan>
          </StyledLine>
          <StyledDivider />
          <StyledLine>
            <StyledSpan>{uhc ?? dataSpec[DataInputs.UHC].label}</StyledSpan>
          </StyledLine>
        </StyledFrac>
        <StyledSpan>{" = "}</StyledSpan>
        <StyledResult>{total ?? "Total"}</StyledResult>
      </StyledCalc>
    </StyledContainer>
  );
};

export default Form;
