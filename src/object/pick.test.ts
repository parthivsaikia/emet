import { describe, it, expect } from "vitest";
import { pick } from "./pick";

describe("pick", () => {
  it("removes defined property", () => {
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
  it("returns empty object when keys is empty", () => {
    const user = {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      age: 25,
      password: "secret123",
    };
    expect(pick(user, [])).toStrictEqual({});
  });
  it("returns empty object when object is empty", () => {
    const object = {};
    expect(pick(object, ["a"])).toStrictEqual({});
  });
});
