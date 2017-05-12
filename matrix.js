
function count (n, m, matrixArr, r, h){
  if (h < 0 || h >= m || r < 0 || r >= n) {
    return 0
  } else if (matrixArr[h][r] == 0){
    return 0
  } else {
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
function largestRegion(n, m, matrixArr){
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
