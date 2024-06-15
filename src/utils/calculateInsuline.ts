import { ValueType } from "../types/dataTypes";
import isAnyNull from "./isAnyNull";

type ArgTypes = {
  fsi: ValueType;
  uhc: ValueType;
  targetGli: ValueType;
  currGli: ValueType;
  hcFood: ValueType;
};

function calulateInsuline({ fsi, uhc, targetGli, currGli, hcFood }: ArgTypes) {
  if (
    isAnyNull<ValueType>(
      Object.values<ValueType>([fsi, uhc, targetGli, currGli, hcFood])
    ) ||
    fsi === 0 ||
    uhc === 0
  ) {
    return null;
  }

  if (currGli! > targetGli!) {
    return ((currGli! - targetGli!) / fsi! + hcFood! * uhc!).toFixed(1);
  }

  return (hcFood! * uhc!).toFixed(1);
}

export default calulateInsuline;
