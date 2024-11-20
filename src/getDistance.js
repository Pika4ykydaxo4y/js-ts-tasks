/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const a = Math.abs(firstPoint.X - secondPoint.X);
  const b = Math.abs(firstPoint.Y - secondPoint.Y);

  result = Math.sqrt(a * a + b * b);

  return result.toFixed(2);

  throw new Error('Not implemented'); // remove me and write a solution
};
