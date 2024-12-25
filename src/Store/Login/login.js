import { createSlice } from "@reduxjs/toolkit";
import { formToJSON } from "axios";

const initialState = {
    PopUp       : false,
    Form        : 'Signin',
    UserDetails : {},
    IsLogin     : false
}


const Login = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        ShowPopUp: (state) => {
            state.PopUp = true;
            // console.log('PopUp store'+state.PopUp);
        },
        RemovePopUp: (state) =>{
            state.PopUp = false;
            state.Form = 'Signin';
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
            // console.log('RemoveDetails Function are called');
        },
        SetFormSignIn: (state) =>{
            state.Form = 'Signin';
        },
        SetFormSignUp: (state) =>{
            state.Form = 'Signup';  
        }
    },
}) 

export const  { ShowPopUp,RemovePopUp,SetDetails,RemoveDetails, SetFormSignIn, SetFormSignUp } = Login.actions;

export default Login;