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
        RemovePopUp:(state) =>{
            state.PopUp = false;
        },
        SetRole: (state,action) =>{
            state.UserDetails   = action.payload;
            state.IsLogin       = true;
            console.log('setRole function call ')
            console.log(action.payload)
        }
    },
}) 

export const  { ShowPopUp,RemovePopUp,SetRole } = Login.actions;

export default Login;