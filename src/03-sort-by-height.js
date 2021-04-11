/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positives = arr.filter((n) => n !== -1).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line no-continue
    if (arr[i] === -1) continue;
    // eslint-disable-next-line no-param-reassign
    arr[i] = positives.shift();
  }
  return arr;
}

module.exports = sortByHeight;
