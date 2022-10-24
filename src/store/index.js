import {configureStore, combineReducers} from '@reduxjs/toolkit'
import gridReducer from './grid'
import cellReducer from './cell'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
    key : 'root',
    storage
}

const rootReducer = combineReducers({
    grid : gridReducer,
    cell : cellReducer
})

const persistRedux = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer : persistRedux
})

export default store; 
export const persistor = persistStore(store)