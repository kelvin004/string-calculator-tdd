import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator --> add", () => {
  it("should return 0 for the empty string passed in add function", () => {
    expect(StringCalculator.add("")).toBe(0);
  });

  it("should return the number itself if the string has one number", () => {
    expect(StringCalculator.add("7")).toBe(7);
  });

  it("should return the sum of the numbers if the string has more than one number", () => {
    expect(StringCalculator.add("7,9")).toBe(16);
  });
});
