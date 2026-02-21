/* eslint-disable no-console */
'use strict';

const rl = require('./modules/readline').rl;
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const numberToGuess = generateRandomNumber();

function prompt() {
  rl.question('Enter your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log('Enter correct guess');

      return prompt();
    }

    const result = getBullsAndCows(answer, numberToGuess);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number!');

      return rl.close();
    }

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);
    prompt();
  });
}

prompt();
