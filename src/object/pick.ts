/**
 * Extract specific properties from an object
 * @template T - The type of the source object.
 * @template K - The keys to pick from the object.
 * @param object - The object to filter propertes.
 * @param keys - The array of keys which needs to be filtered out.
 *
 * @example
 * ```ts
 * const user = {
 * 	name: "Alice",
 *	age: 25,
 *	isAdmin: true,
 * }
 * const result = pick(user, ["name", "age"])
 * console.log(result)
 * //{name: "Alice", age: 25}
 * ```
 */

export function pick<T extends object, K extends keyof T>(
	object: T,
	keys: readonly K[],
): Pick<T, K> {
	const returnObj = {} as Pick<T, K>;
	for (const key of keys) {
		if (key in object) {
			returnObj[key] = object[key];
		}
	}
	return returnObj;
}
