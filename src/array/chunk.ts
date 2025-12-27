export function chunk<T>(array: T[], size: number): T[][] {
	const returnArr = [];
	for (let i = 0; i < array.length; i += size) {
		returnArr.push(array.slice(i, i + size));
	}
	return returnArr;
}
