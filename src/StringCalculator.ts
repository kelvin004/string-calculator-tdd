export class StringCalculator {
  static add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    // check if the numbers are matching the required pattern for custom delimiter
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);

    // set default delimiter which are supported currently
    let delimiters = /,|\n/;

    if (delimiterMatch) {
      delimiters = new RegExp(delimiterMatch[1]);
      numbers = numbers.slice(4);
    }

    // split all the numbers if there is ", OR \n" characters
    const numbersArray = numbers.split(delimiters);
    let sumOfNumbers = 0;

    // Loop through all the numbers and add into variable
    numbersArray.forEach((value) => {
      const number = parseInt(value);

      if (number < 0)
        throw new Error(`Negative numbers not allowed: ${number}`);

      return (sumOfNumbers += number);
    });

    return sumOfNumbers;
  }
}
