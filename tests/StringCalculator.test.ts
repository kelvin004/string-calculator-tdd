import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator Operation", () => {
  it("should return 0 for the empty string passed in add function", () => {
    expect(StringCalculator.add("")).toBe(0);
  });
});
