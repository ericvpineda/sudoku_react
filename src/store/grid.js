import { createSlice } from "@reduxjs/toolkit";
import {randomGrid} from '../utils/utils.js'

const [initialGrid, solvedGrid] = randomGrid();

const initialState = {
  initialGrid, 
  workingGrid : initialGrid,
  solvedGrid,
};

const gridSlice = createSlice({
    name : 'grid',
    initialState,
    reducers : {
      fillCell (state, action) { 
        const [num, [row, col]] = action.payload
        if (row != null && col != null && state.initialGrid[row][col] === '.') {
          state.workingGrid[row][col] = num; 
        }
      },
      newGame (state) {
        const [newGrid, newSolvedGrid] = randomGrid();
        state.initialGrid = newGrid;
        state.workingGrid = newGrid;
        state.newSolvedGrid = newSolvedGrid;
      },
      solveGame (state) {
        state.workingGrid = state.solvedGrid;
      },
      getHint (state, action) {
        const [row, col] = action.payload;
        state.workingGrid[row][col] = state.solvedGrid[row][col]
      },
      eraseCell (state, action) {
        const [row, col] = action.payload;
        if (row != null && col != null && state.initialGrid[row][col] === '.') {
          state.workingGrid[row][col] = '.';
        }
      }
    }
})

export default gridSlice.reducer;
export const gridActions = gridSlice.actions;