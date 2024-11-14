/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  let v = (1/3) * Math.PI*r**2*h;
  let v1 = v.toFixed(2);
  return(v1);
  throw new Error('Not implemented');
};
