import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './features/searchedSlice'
import collectionReducer from './features/collectionSlice'

export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
})