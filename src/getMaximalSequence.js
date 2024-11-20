/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxArr = [];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > maxArr.length) {
        maxSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }

  // Final check for the last sequence
  if (currentSequence.length > maxArr.length) {
    maxSequence = currentSequence;
  }

  return maxArr;
};
