import { describe, expect, it } from "vitest";
import { chunk } from "./chunk";

describe("chunk", () => {
	it("chunk a valid array", () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const size = 4;

		const expectedArr = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
		const resultArr = chunk(array, size);
		expect(resultArr).toEqual(expectedArr);
	});
});
