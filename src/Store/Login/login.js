import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PopUp : false
}


const Login = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        ShowPopUp: (state) => {
            
            state.PopUp = true;
            console.log('PopUp store'+state.PopUp)
        },
        RemovePopUp:(state) =>{
            state.PopUp = false;
        }
        
    },
}) 

export const  { ShowPopUp,RemovePopUp } = Login.actions;

export default Login;