import { createSlice } from "@reduxjs/toolkit";
import {randomGrid} from '../utils'

const initialState = {
  grid: randomGrid()
};

const gridSlice = createSlice({
    name : 'grid',
    initialState,
    reducers : {
    
    }
})

export default gridSlice.reducer;
export const gridActions = gridSlice.actions;