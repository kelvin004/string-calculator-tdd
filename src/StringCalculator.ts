export class StringCalculator {
  static add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    // Grab all the numbers in array to do the summation
    const numbersArray = numbers.split(",");
    let sumOfNumbers = 0;

    // Loop through all the numbers and add into variable
    numbersArray.forEach((value) => (sumOfNumbers += parseInt(value)));

    return sumOfNumbers;
  }
}
