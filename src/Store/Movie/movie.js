import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    MoviePopUp: [],
}

const Movies = createSlice({
    name: 'Item',
    initialState,
    reducers: {
        ShowPopUp: (state,action) => {
            console.log(action.payload);   
            state.MoviePopUp.push = (action.payload);
        },
        RemoveMoviePopUp:(state, action) =>{
            
        }
        
    },
})
export const  { ShowPopUp,RemoveMoviePopUp } = Movies.actions;

export default Movies;