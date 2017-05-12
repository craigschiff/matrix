

class Matrix {
  constructor (n, m, matrix){
    this.n = n
    this.m = m
    this.matrix = matrix
  }
  test(){

  }
}

// matrix is array of arrays. n is length of each array and m is height (number of arrays)
// r and h as counters iterating through arrays - r for rows, h for height. they are the spot being tested


// this is how to count amount for a given cell. iterate through all cells and each one should have own score that is compared.
// can combine first two if statements into one bigger if statement, but looks very ugly
function count (n, m, matrixArr, r, h){
  if (h < 0 || h >= m || r < 0 || r >= n) { // checking if outside matrix
    return 0
  } else if (matrixArr[h][r] == 0){ //checking if cell is 0 - if so move on
    return 0
  } else { // here we know this cell is 1 - to avoid traversing again will set to 0. this will be zero for all subsequent checks as part of this region.
    matrixArr[h][r] = 0
    return (
      1 +
      count (n, m, matrixArr, r-1, h) +
      count (n, m, matrixArr, r-1, h-1) +
      count (n, m, matrixArr, r-1, h+1) +
      count (n, m, matrixArr, r, h-1) +
      count (n, m, matrixArr, r, h+1) +
      count (n, m, matrixArr, r+1, h-1) +
      count (n, m, matrixArr, r+1, h) +
      count (n, m, matrixArr, r+1, h+1)
    ) // each count function returns that number for given cell as part of region test.
  }
}
function largestRegion(n, m, matrixArr){ // iterate through every cell. look at region max for every cell. each cell in same region will have same #. will take largest cell #which corresponds to largest region
  let max = 0
  let cellCount
  for (let h = 0; h<m; h++){
    for (let r = 0; r<n; r++) {
      cellCount = count(n, m, matrixArr, r, h)
      if (cellCount > max){
        max = cellCount
      }
    }
  }
  return max
}

var matrix = [
  [0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0]
]


console.log(count(matrix[0].length, matrix.length, matrix, 2, 0))
console.log(largestRegion(matrix[0].length, matrix.length, matrix))
