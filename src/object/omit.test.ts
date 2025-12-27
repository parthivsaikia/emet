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
});
