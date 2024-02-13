import type { Dispatch, SetStateAction } from "react";
import { ValueType } from "../../types/dataTypes";

export enum DataInputs {
  FSI = "fsi",
  UHC = "uhc",
  HC_FOOD = "hcFood",
  TARGET_GLI = "targetGli",
  CURR_GLI = "currGli",
}

export type DataSpecTypes = {
  [key in DataInputs]: {
    label: string;
    description: string;
    setFunc: Dispatch<SetStateAction<ValueType>>;
    localStorageKey?: string;
    defaultValue: ValueType;
  };
};
