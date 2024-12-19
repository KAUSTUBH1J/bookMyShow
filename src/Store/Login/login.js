import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PopUp   : false,
    Role    : '',
    IsLogin : false
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
            state.Role      = action.payload;
            state.IsLogin   = true; 
        }
    },
}) 

export const  { ShowPopUp,RemovePopUp,SetRole } = Login.actions;

export default Login;