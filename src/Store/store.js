import { configureStore } from '@reduxjs/toolkit'
import Movies from './Movie/movie'
import Login from './Login/login'
import setting from './Settings/setting'

export const store = configureStore({
    reducer: {
        Login       : Login.reducer,
        Movie       : Movies.reducer,
        setting     : setting.reducer
    },
})