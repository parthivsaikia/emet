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
	it("chunk an empty array", () => {
		const array: number[] = [];
		const size = 1;
		const expectedArr: number[] = [];
		const resultArr = chunk(array, size);
		expect(resultArr).toEqual(expectedArr);
	});
	it("chunk with size 0", () => {
		const array = [1, 2, 3];
		const size = 0;
		expect(() => {
			chunk(array, size);
		}).toThrowError(`size must be positive. Received size: ${size}`);
	});
	it("chunk with negative size", () => {
		const array = [1, 2, 3];
		const size = -3;
		expect(() => {
			chunk(array, size);
		}).toThrowError(`size must be positive. Received size: ${size}`);
	});
	it("chunk with smaller array", () => {
		const array = [1, 2];
		const size = 5;
		const expectedArr = [[1, 2]];
		const resultArr = chunk(array, size);
		expect(resultArr).toEqual(expectedArr);
	});
	it("array length is exactly divisible", () => {
		const array = ["apple", "banana", "cat", "dog"];
		const size = 2;
		const expectedArr = [
			["apple", "banana"],
			["cat", "dog"],
		];
		const resultArr = chunk(array, size);
		expect(resultArr).toEqual(expectedArr);
	});
	it("chunk doesn't mutate the original array", () => {
		const array = [1, 2, 3];
		const size = 2;
		chunk(array, size);
		expect(array).toEqual([1, 2, 3]);
	});
});
