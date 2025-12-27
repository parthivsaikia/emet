export function chunk<T>(array: T[], size: number): T[][] {
	const returnArr = [];
	let temp = [];
	for (let i = 0; i < array.length; i++) {
		temp.push(array[i]);
		if (temp.length === size || i === array.length - 1) {
			returnArr.push(temp);
			temp = [];
		}
	}
	return returnArr;
}
