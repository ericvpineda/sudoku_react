import { createSlice } from "@reduxjs/toolkit";
import {compareGrids, randomGrid} from '../utils/utils.js'

const initialState = {
  gridLength : [],
  initialGrid : [], 
  workingGrid : [],
  solvedGrid : [],
  difficultyModalActive : false,
  difficulty : 'easy',
  numFilledCells : 0,
  initFilledCells : 0,
  isSolved : false,
  time : 0
};

const gridSlice = createSlice({
    name : 'grid',
    initialState,
    reducers : {
      fillCell (state, action) { 
        const [num, [row, col]] = action.payload
        if (state.numFilledCells + 1 <= state.gridLength && state.workingGrid[row][col] === '.') {
          state.numFilledCells += 1;
        }
        state.workingGrid[row][col] = num; 
        if (state.numFilledCells === state.gridLength && compareGrids(state.workingGrid, state.solvedGrid)) {
          state.isSolved = true;
        }
      },
      newGame (state, action) {
        const [newGrid, newSolvedGrid, newFilledCellsCount, newGridLength, mode] = randomGrid(action.payload);
        state.initialGrid = newGrid;
        state.workingGrid = newGrid;
        state.solvedGrid = newSolvedGrid;
        state.numFilledCells = newFilledCellsCount;
        state.initFilledCells = newFilledCellsCount;
        state.isSolved = false;
        state.gridLength = newGridLength;
        state.time = 0;
        state.difficulty = mode
      },
      solveGame (state) {
        state.workingGrid = state.solvedGrid;
        state.numFilledCells = state.gridLength;
        state.isSolved = true; 
      },
      getHint (state, action) {
        const [row, col] = action.payload
        if (state.numFilledCells + 1 <= state.gridLength && state.workingGrid[row][col] === '.') {
          state.numFilledCells += 1;
        }
        state.workingGrid[row][col] = state.solvedGrid[row][col]
        if (state.numFilledCells === state.gridLength && compareGrids(state.workingGrid, state.solvedGrid)) {
          state.isSolved = true;
        }
      },
      eraseCell (state, action) {
        const [row, col] = action.payload;
        if (row != null && col != null && state.initialGrid[row][col] === '.') {
          state.workingGrid[row][col] = '.';
          if (state.numFilledCells - 1 >= state.initFilledCells) {
            state.numFilledCells -= 1;
          }
        }
      },
      activateDifficultyModal (state, action) {
        state.difficultyModalActive = action.payload;
      },
      incrementTime (state) {
        if (!state.isSolved) {
          state.time += 10
        }
      }
    }
})

export default gridSlice.reducer;
export const gridActions = gridSlice.actions;