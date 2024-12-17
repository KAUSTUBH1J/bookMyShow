import { configureStore } from '@reduxjs/toolkit'
import Movies from './Movie/movie'
import Login from './Login/login'

export const store = configureStore({
    reducer: {
        Login : Login.reducer,
        Movie : Movies.reducer,

    },
})