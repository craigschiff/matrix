# matrix

Run the tests with mocha testMatrix.js


The code is in matrix.js


The matrix is an array of arrays. You run the largestRegion function with parameters of n, which is length of each array, with m, which is the number of arrays, and with matrixArr, which is the matrix. The function itself iterates through each cell in the matrix and for each calculates its own 'region', with the region being the number of cells containing a 1 that the given cell is connected to. This is the count function. The largestRegion function stores the max through the iteration and returns it at the end.


The count function takes the matrix, and for a given cell returns the region size. It is given two extra paramenters, r and h, which point to the given cell in the matrix. If the cell is a 1 then it recursively checks the region count of each cell connected to it to calculate the initial cell's total region. The current cell is zero'ed out first to avoid double counting, and 1 is added to the sum of all of the connected cell's regions to reflect the current cell. All cells in the same region will have the same region count.
