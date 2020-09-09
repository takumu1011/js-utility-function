export const has = (obj, key) => {
  if (obj === undefined || obj === null) return false;
  return obj.hasOwnProperty(key);
};
