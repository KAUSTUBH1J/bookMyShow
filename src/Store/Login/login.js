import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PopUp       : false,
    UserDetails : {},
    IsLogin     : false
}


const Login = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        ShowPopUp: (state) => {
            state.PopUp = true;
            console.log('PopUp store'+state.PopUp);
        },
        RemovePopUp: (state) =>{
            state.PopUp = false;
        },
        SetDetails: (state,action) =>{
            state.UserDetails   = action.payload;
            state.IsLogin       = true;
            console.log('setDetails function call ');
            console.log(action.payload)
        },
        RemoveDetails: (state,action) =>{
            state.UserDetails   = '';
            state.IsLogin       = false;
            localStorage.clear();
            console.log('RemoveDetails Function are called');
        }
    },
}) 

export const  { ShowPopUp,RemovePopUp,SetDetails,RemoveDetails } = Login.actions;

export default Login;