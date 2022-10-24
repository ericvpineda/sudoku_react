import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCell : [],
    activeCell : []
}

const cellSlice = createSlice({
    name : 'cell',
    initialState,
    reducers : {
        select(state, action) {state.selectedCell = action.payload},
        active(state, action) {state.activeCell = action.payload},
        move(state, action) {
            state.selectedCell = action.payload;
        }, 
    }
})

export default cellSlice.reducer;
export const cellActions = cellSlice.actions;
