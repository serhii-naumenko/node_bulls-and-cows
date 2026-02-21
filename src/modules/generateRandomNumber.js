'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const result = Math.floor(Math.random() * 9000) + 1000;

  const digits = new Set();

  for (const digit of result.toString()) {
    if (digits.has(digit)) {
      return generateRandomNumber();
    }

    digits.add(digit);
  }

  return result;
}

module.exports = {
  generateRandomNumber,
};
