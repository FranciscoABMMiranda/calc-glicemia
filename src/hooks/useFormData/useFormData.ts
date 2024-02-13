import { useMemo, useState } from "react";
import { DataInputs, DataSpecTypes } from "./useFormData.types";
import { ValueType } from "../../types/dataTypes";
import { getFromLocalStorage } from "../../utils/getFromLocalStorage";

const LOCALSTORAGE_KEY = {
  [DataInputs.FSI]: "fsi",
  [DataInputs.TARGET_GLI]: "targetGli",
  [DataInputs.UHC]: "uhc",
};

const useFormData = () => {
  const [fsi, setFsi] = useState<ValueType>(() =>
    getFromLocalStorage(LOCALSTORAGE_KEY[DataInputs.FSI], Number)
  );
  const [uhc, setUhc] = useState<ValueType>(() =>
    getFromLocalStorage(LOCALSTORAGE_KEY[DataInputs.UHC], Number)
  );
  const [targetGli, setTargetGli] = useState<ValueType>(() =>
    getFromLocalStorage(LOCALSTORAGE_KEY[DataInputs.TARGET_GLI], Number)
  );
  const [currGli, setCurrGli] = useState<ValueType>(null);
  const [hcFood, setHcFood] = useState<ValueType>(null);

  const dataSpec: DataSpecTypes = useMemo(
    () => ({
      [DataInputs.FSI]: {
        label: "FSI",
        description: "Fator Sensibilidade Insulina",
        setFunc: setFsi,
        localStorageKey: LOCALSTORAGE_KEY[DataInputs.FSI],
        defaultValue: fsi,
      },
      [DataInputs.UHC]: {
        label: "UHC",
        description: "Equivalente hidratos de carbono",
        setFunc: setUhc,
        localStorageKey: LOCALSTORAGE_KEY[DataInputs.UHC],
        defaultValue: uhc,
      },
      [DataInputs.TARGET_GLI]: {
        label: "Glicemia Alvo",
        description: "Valor alvo de glicemia",
        setFunc: setTargetGli,
        localStorageKey: LOCALSTORAGE_KEY[DataInputs.TARGET_GLI],
        defaultValue: targetGli,
      },
      [DataInputs.CURR_GLI]: {
        label: "Glicemia atual",
        description: "Valor de glicemia atual",
        setFunc: setCurrGli,
        defaultValue: currGli,
      },
      [DataInputs.HC_FOOD]: {
        label: "HC Refeição",
        description: "Contagem de hidratos de carbono da refeição",
        setFunc: setHcFood,
        defaultValue: hcFood,
      },
    }),
    [setFsi, setUhc, setTargetGli, setCurrGli, setHcFood]
  );

  return {
    dataSpec,
    fsi,
    uhc,
    targetGli,
    currGli,
    hcFood,
  };
};

export default useFormData;
