import { describe, it, expect } from "vitest";
import { expectTypeOf } from "expect-type";
import { add } from "./add";

describe("add", () => {
  it("add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("check type", () => {
    expectTypeOf(add(1, 2)).toEqualTypeOf<number>();
  });
});
