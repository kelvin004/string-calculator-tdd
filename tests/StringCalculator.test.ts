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

  it("should return the sum of the numbers if the string has numbers passed with new line and comma both", () => {
    expect(StringCalculator.add("5\n7,8")).toBe(20);
  });

  it("should return the sum of the numbers if the custom delimiter is passed", () => {
    expect(StringCalculator.add("//;\n4;5")).toBe(9);
  });

  it("should throw an error if the negative number is passed into add function", () => {
    try {
      StringCalculator.add("//;\n4;-5");
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Negative numbers not allowed: -5");
    }
  });

  it("should throw an error with all the negative number if the negative numbers are passed into add function", () => {
    try {
      StringCalculator.add("//;\n4;-5;-6");
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Negative numbers not allowed: -5,-6");
    }
  });

  it("should return the sum of the numbers if the numbers are passed with delimiter of new line", () => {
    expect(StringCalculator.add("5\n6")).toBe(11);
  });
});
