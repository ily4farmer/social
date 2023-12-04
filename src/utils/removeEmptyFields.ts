export const removeEmptyFields = (obj: Record<string, unknown>): Record<string, unknown> => {
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (
      value === '' ||
      value === undefined ||
      value === null ||
      (Array.isArray(value) && value.length === 0)
    ) {
      delete obj[key];
    }
  });
  return obj;
};
