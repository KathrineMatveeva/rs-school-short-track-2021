/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMat = [];
  for (let i = 0; i < matrix.length; i++) {
    newMat.push(matrix[i].slice());
  }
  newMat.forEach((row) => row.fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (i > 0 && j > 0) {
          newMat[i - 1][j - 1] += 1;
        }
        if (i > 0) {
          newMat[i - 1][j] += 1;
        }
        if (i > 0 && j < matrix[0].length - 1) {
          newMat[i - 1][j + 1] += 1;
        }
        //
        if (j > 0) {
          newMat[i][j - 1] += 1;
        }
        if (j < matrix[0].length - 1) {
          newMat[i][j + 1] += 1;
        }
        if (i < matrix.length && j > 0) {
          newMat[i + 1][j - 1] += 1;
        }
        if (i < matrix.length) {
          newMat[i + 1][j] += 1;
        }
        if (i < matrix.length && j < matrix[0].length - 1) {
          newMat[i + 1][j + 1] += 1;
        }
      }
    }
  }
  return newMat;
}
module.exports = minesweeper;
