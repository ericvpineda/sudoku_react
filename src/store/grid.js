import { createSlice } from "@reduxjs/toolkit";
import {randomGrid, compareGrids} from '../utils/utils.js'

const [initialGrid, solvedGrid, numFilledCells] = randomGrid();

const initialState = {
  initialGrid, 
  workingGrid : initialGrid,
  solvedGrid,
  difficultyModalActive : false,
  difficulty : 'easy',
  numFilledCells,
  isSolved : false
};

const gridSlice = createSlice({
    name : 'grid',
    initialState,
    reducers : {
      fillCell (state, action) { 
        const [num, [row, col]] = action.payload
        if (row != null && col != null && state.initialGrid[row][col] === '.') {
          state.workingGrid[row][col] = num; 
          state.numFilledCells += 1;
        }
      },
      newGame (state) {
        const [newGrid, newSolvedGrid, newFilledCellsCount] = randomGrid(state.difficulty);
        state.initialGrid = newGrid;
        state.workingGrid = newGrid;
        state.solvedGrid = newSolvedGrid;
        state.numFilledCells = newFilledCellsCount;
        state.isSolved = false;
      },
      solveGame (state) {
        state.workingGrid = state.solvedGrid;
        state.numFilledCells = state.initialGrid.length * 2;
        state.isSolved = true; 
      },
      getHint (state, action) {
        const [row, col] = action.payload
        state.workingGrid[row][col] = state.solvedGrid[row][col]
        state.numFilledCells += 1;
      },
      eraseCell (state, action) {
        const [row, col] = action.payload;
        if (row != null && col != null && state.initialGrid[row][col] === '.') {
          state.workingGrid[row][col] = '.';
          state.numFilledCells -= 1;
        }
      },
      activateDifficultyModal (state, action) {
        state.difficultyModalActive = action.payload;
      },
      changeDifficulty (state, action) {
        const [newGrid, newSolvedGrid, newFilledCellsCount] = randomGrid(action.payload);
        state.initialGrid = newGrid;
        state.workingGrid = newGrid;
        state.solvedGrid = newSolvedGrid;
        state.numFilledCells = newFilledCellsCount;
      },
      checkIsSolved (state) {
        state.isSolved = compareGrids(state.workingGrid, state.solvedGrid);
      }
    }
})

export default gridSlice.reducer;
export const gridActions = gridSlice.actions;