export const getFromLocalStorage = (
  key: string,
  valueHandler?: (value: string) => any
) => {
  const value = localStorage.getItem(key);

  if (value) {
    return valueHandler ? valueHandler(value) : value;
  }
  return null;
};
