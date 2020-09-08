export function size(obj) {
  if (obj === undefined || obj === null) return 0;
  return Object.keys(obj).length;
}
