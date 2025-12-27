export function chunk<T>(array: T[], size: number): T[][] {
	if (size <= 0) {
		throw new Error(`size must be positive. Received size: ${size}`);
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
