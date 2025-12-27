import { expectTypeOf } from "expect-type";
import { describe, expect, it } from "vitest";
import { add } from "./add";

describe("add", () => {
	it("add two numbers", () => {
		expect(add(1, 2)).toBe(3);
	});
	it("check type", () => {
		expectTypeOf(add(1, 2)).toEqualTypeOf<number>();
	});
});
