
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

const randomGrid = () => {
  const grid = emptyGrid();
  const numList = [1,2,3,4,5,6,7,8,9];
  grid[0] = shuffleArray(numList)
  return solveGrid(grid);
};

const solveGrid = (grid) => {
    return grid;
};

const compareGrids = (grid, solution) => {};

export {randomGrid, solveGrid, compareGrids };
