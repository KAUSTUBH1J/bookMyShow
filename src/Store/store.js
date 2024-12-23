import { configureStore } from '@reduxjs/toolkit'
import Movies from './Movie/movie'
import Login from './Login/login'
import Setting from './Settings/setting'
export const store = configureStore({
    reducer: {
        Login       : Login.reducer,
        Movie       : Movies.reducer,
        Setting    : Setting.reducer
    },
})