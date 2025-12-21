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
    // @ts-expect-error -- Testing runtime behavior for invalid keys
    expect(pick(object, ["a"])).toStrictEqual({});
  });
  it("doesn't add keys that don't exist in the object", () => {
    const object = {
      a: 1,
      b: 2,
    };
    const expectedObj = {
      a: 1,
    };
    // @ts-expect-error -- Testing runtime behavior for invalid keys
    expect(pick(object, ["c", "a"])).toStrictEqual(expectedObj);
  });
  it("doesn't change the original object", () => {
    const object = { a: 1, b: 2, c: 3 };
    pick(object, ["a", "b"]);
    expect(object).toStrictEqual({ a: 1, b: 2, c: 3 });
  });
  it("doesn't change type of picked properties", () => {
    const object = { a: 1, b: 2, c: null };
    const result = pick(object, ["c"]);
    expect(result["c"]).toEqual(null);
  });
});
