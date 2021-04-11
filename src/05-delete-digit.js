/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString()
    .split('');
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] < str[i + 1]) {
      str.splice(i, 1);
      return Number(str.join(''));
    }
  }
  str.pop();
  return Number(str.join(''));
}

module.exports = deleteDigit;
