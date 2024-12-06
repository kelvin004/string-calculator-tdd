import { StringCalculator } from "./StringCalculator";

const numbersToAdd = process.argv[2];

console.log(numbersToAdd);

const sum = StringCalculator.add(numbersToAdd);

console.log(sum);
