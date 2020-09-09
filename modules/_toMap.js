export const toMap = (obj) => {
  if (obj === undefined || obj === null) return false;
  const map = new Map();
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let value = obj[keys[i]];
    map.set(keys[i], value);
  }
  return map;
};
