import { describe, it, expect } from "vitest";
import { pick } from "./pick";

describe("pick", () => {
  it("remove one property", () => {
    const user = {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      age: 25,
      password: "secret123",
    };
    const keys = ["id", "name", "age"] as const;
    const expectedObj = {
      id: 1,
      name: "Alice",
      age: 25,
    };
    expect(pick(user, keys)).toStrictEqual(expectedObj);
  });
});
