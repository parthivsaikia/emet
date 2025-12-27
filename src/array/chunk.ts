/**
 * Splits an array into sub arrays of length size
 * @template T - The type of the elements of the array
 * @param array - The source array
 * @param size - The length of sub arrays
 *
 * @example
 * ```
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * const resultArr = chunk(arr, 4)
 * console.log(resultArr)
 * // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
 * ```
 */

export function chunk<T>(array: T[], size: number): T[][] {
	if (size <= 0) {
		throw new Error(`size must be positive. Received size: ${size}`);
	}
	if (array.length === 0) {
		return [];
	}
	const arraySize = Math.ceil(array.length / size);
	const returnArr = new Array(arraySize);
	let count = 0;
	for (let i = 0; i < array.length; i += size) {
		returnArr[count] = array.slice(i, i + size);
		count++;
	}
	return returnArr;
}
