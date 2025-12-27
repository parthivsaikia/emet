/**
 * Remove specified properties from object
 * @template T - The type of object
 * @template K - The type of key to remove
 * @param object - The source object
 * @param keys - The array of keys to be omitted
 *
 * @example
 * ```
 * const obj = {a: 1, b: 2, c: 3}
 * const result = omit(obj, ["a", "b"])
 * console.log(result)
 *
 * // {c: 3}
 * ```
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
