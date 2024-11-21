/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxArr = [];
  let mass = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      mass.push(arr[i]);
    } else {
      if (mass.length > maxArr.length) {
        maxArr = mass;
      }
      mass = [arr[i]];
    }
  }

  if (mass.length > maxArr.length) {
    maxArr = mass;
  }

  return maxArr;
};
