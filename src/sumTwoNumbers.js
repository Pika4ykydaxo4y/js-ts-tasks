/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const firststring = String(firstNumber);
  const secondstring = String(secondNumber);

  const sF = firststring.replace(/[^\.\-\d]/gi, '');
  const sS = secondstring.replace(/[^\.\-\d]/gi, '');

  const result = Number(sF) + Number(sS);

  return result;
};
