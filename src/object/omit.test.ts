import { describe, expect, it } from "vitest";
import { omit } from "./omit";

describe("omit", () => {
	it("remove defined properties", () => {
		const user = {
			id: 1,
			name: "Alice",
			email: "alice@example.com",
			age: 25,
			password: "secret123",
		};
		const result = omit(user, ["password", "email"]);
		expect(result).toStrictEqual({
			id: 1,
			name: "Alice",
			age: 25,
		});
	});
	it("remove undefined property", () => {
		const obj = { a: 1, b: 2, c: 3 };
		// @ts-expect-error -- Testing using invalid key
		const result = omit(obj, ["d"]);
		expect(result).toStrictEqual(obj);
	});
	it("using empty keys", () => {
		const obj = { a: 1, b: 2, c: 3 };
		const result = omit(obj, []);
		expect(result).toStrictEqual(obj);
	});
	it("omit function doesn't change original object", () => {
		const obj = { a: 1, b: 2, c: 3 };
		omit(obj, ["a"]);
		expect(obj).toStrictEqual({ a: 1, b: 2, c: 3 });
	});
});
