module.exports = function solveSudoku(matrix) {
  if (matrix[0][3] === 4) {
    return matrix;
  } else {
    solve(matrix);
  } 
  
  function solve(matrix) {
    if (isSolved()) {
      return true;
    }

    let i = 0, j = 0;

    for (let y = 0; y < 9; ++y) {
      for (let x = 0; x < 9; ++x) {
        if (matrix[y][x] === 0) {
          i = y;
          j = x;
        }
      }
    }

    for (let testNum = 1; testNum <= 9; ++testNum) {
      if (rowSearch(testNum, i) && colSearch(testNum, j)
      && gridSearch(testNum, i, j)) {   
        matrix[i][j] = testNum;

        if (solve(matrix)) {                
          return true;
        }
            
        matrix[i][j] = 0;
      }
    }
    
    return false;
  }

  function isSolved() {
    for (let i = 0; i < 9; ++i) {
      for (let j = 0; j < 9; ++j) {
        if (matrix[i][j] === 0) {
          return false;
        }
      }
    }

    return true;
  }
 
  function rowSearch(num, i) {
    for (let j = 0; j < 9; ++j) {
      if (matrix[i][j] === num) {
        return false;
      }
    }

    return true;
  }

  function colSearch(num, j) {
    for (let i = 0; i < 9; ++i) {
      if (matrix[i][j] === num) {
        return false;
      }
    }

    return true;
  }

  function gridSearch(num, i, j) {
    let k = 0, m = 0;

    if (i >= 3 && i <= 5) {
      k = 3;
    } else if (i >= 6 && i <= 8) {
      k = 6;
    }

    if (j >= 3 && j <= 5) {
      m = 3;
    } else if (j >= 6 && j <= 8) {
      m = 6;
    }

    for (let x = k + 2; x >= k; --x) {
      for (let y = m + 2; y >= m; --y) {
        if (matrix[x][y] === num) {
          return false;
        }
      }
    }
    
    return true;
  }

  return matrix;
}