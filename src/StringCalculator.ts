export class StringCalculator {
  static add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    // split all the numbers if there is ", OR \n" characters
    const numbersArray = numbers.split(/,|\n/);
    let sumOfNumbers = 0;

    // Loop through all the numbers and add into variable
    numbersArray.forEach((value) => (sumOfNumbers += parseInt(value)));

    return sumOfNumbers;
  }
}
