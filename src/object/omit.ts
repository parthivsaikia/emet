/**
 *
 *
 */

export function omit<T extends object, K extends keyof T>(
  object: T,
  keys: readonly K[],
): Omit<T, K> {
  const returnObj = { ...object };
  for (const key of keys) {
    if (key in object) {
      delete returnObj[key];
    }
  }
  return returnObj;
}
