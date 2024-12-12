import { configureStore } from '@reduxjs/toolkit'
import Movies from './Movie/movie'

export const store = configureStore({
    reducer: {
        Movie : Movies.reducer,
    },
})