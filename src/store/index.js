import {configureStore} from '@reduxjs/toolkit'
import gridReducer from './grid'
import cellReducer from './cell'

const store = configureStore({
    reducer : {
        grid : gridReducer,
        cell : cellReducer
    }
})

export default store; 