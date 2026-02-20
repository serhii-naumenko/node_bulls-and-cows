'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const result = Math.floor(Math.random() * 9000) + 1000;

  if (hasDuplicateDigits(result)) {
    return generateRandomNumber();
  }

  return result;
}

function hasDuplicateDigits(number) {
  const digits = new Set();

  for (const digit of number.toString()) {
    if (digits.has(digit)) {
      return true;
    }

    digits.add(digit);
  }

  return false;
}

module.exports = {
  generateRandomNumber,
  hasDuplicateDigits,
};
