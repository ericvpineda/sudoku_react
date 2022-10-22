
const emptyGrid = () => {
    return [
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
        ['.','.','.','.','.','.','.','.','.',],
    ]
}

// Note: Fisher-Yates algorithm 
const shuffleArray = (array) => {
    let rand = null;
    for (let i = 1; i < array.length; i++) {
        rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
}

//   Note: Only 9! different combinations of boards
const randomGrid = () => {
  const grid = emptyGrid();
  const numList = [1,2,3,4,5,6,7,8,9];
  grid[0] = shuffleArray(numList)
  solveGrid(grid, 1, 0);
  return grid;
};

const validateGrid = (grid, target, row, col) => {
    const n = grid.length;
    // Check if row is valid
    if (grid[row].includes(target)) {
        return false;
    } 

    // Check if column is valid 
    for (let i = 0; i < n; i++) {
        if (grid[i][col] === target) {
            return false;
        }
    }

    // Check if 3 x 3 block is valid
    let blockRow = Math.floor(row / 3) * 3
    let blockCol = Math.floor(col / 3) * 3

    for (let i = blockRow; i < blockRow + 3; i++) {
        for (let j = blockCol; j < blockCol + 3; j++) {

            if (grid[i][j] === target) {
                return false;
            }
    }}

    return true; 
}

// Note: Input grid should be original grid (non-modified by user)
const solveGrid = (grid, row, col) => {
    
    let n = grid.length;

    if (col === n) {
        row += 1 
        col = 0
    }

    if (row < n && grid[row][col] !== '.') {
        while (row < n && grid[row][col] !== '.') {
            col += 1 

            if (col === n) {
                row += 1
                col = 0
            }
        }
    }

    if (row === n) {
        return true;
    }

    for (let val = 1; val < n + 1; val++) {

        let tmp = val.toString();
        
        if (validateGrid(grid, tmp, row, col)) {
            grid[row][col] = tmp;

            if (solveGrid(grid, row, col + 1)) {
                return true;
            }                                                             
        }
    }
    grid[row][col] = '.'
};

const compareGrids = (grid, solution) => {};

export {randomGrid, solveGrid, compareGrids, validateGrid};
