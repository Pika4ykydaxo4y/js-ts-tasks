/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number (end);
  var sum = 0;
  for (; start <= end; start++)
  {
    sum+=start;
  }
  return(sum)
  throw new Error('Not implemented')
};
