import { StringCalculator } from "./StringCalculator";

const numbersToAdd = process.argv[2];

const sum = StringCalculator.add(numbersToAdd);

console.log(sum);
