let expect = require('chai').expect


describe('count', function(){
  it('should return the size of that cells region', function(){
    function count (n, m, matrixArr, r, h){
      if (h < 0 || h >= m || r < 0 || r >= n) {
        return 0
      } else if (matrixArr[h][r] == 0){
        return 0
      } else {
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
        )
      }
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
    result1 = count(matrix[0].length, matrix.length, matrix, 2, 0)
    result2 = count(matrix[0].length, matrix.length, matrix, 0, 1)
    result3 = count(matrix[0].length, matrix.length, matrix, 2, 6)


    expect(result1).to.equal(1)
    expect(result2).to.equal(2)
    expect(result3).to.equal(9)

  })
})

describe('largest region', function(){
  it('should return the size of the largest region', function(){
    function count (n, m, matrixArr, r, h){
      if (h < 0 || h >= m || r < 0 || r >= n) {
        return 0
      } else if (matrixArr[h][r] == 0){
        return 0
      } else {
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
        )
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
    largest = largestRegion(matrix[0].length, matrix.length, matrix)


    expect(largest).to.equal(9)

  })
})
