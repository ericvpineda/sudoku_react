import {configureStore} from '@reduxjs/toolkit'
import gridReducer from './grid'
import cellReducer from './cell'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
    key : 'root',
    storage
}

// const persistReducer = persistReducer(persistConfig, )

const store = configureStore({
    reducer : {
        grid : gridReducer,
        cell : cellReducer
    }
})

export default store; 