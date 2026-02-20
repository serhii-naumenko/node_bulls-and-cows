'use strict';

const readline = require('node:readline');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

rl.question('Enter your guess: ', (answer) => {
  const result = getBullsAndCows(answer, numberToGuess);

  // eslint-disable-next-line no-console
  console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
  rl.close();
});
