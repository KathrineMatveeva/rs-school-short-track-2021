/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  for (;;) {
    const n = start + Math.round((end - start) / 2);
    if (array[n] === value) return n;
    if (array[n] < value) {
      start = n + 1;
    } else {
      end = n - 1;
    }
  }
}

module.exports = findIndex;
