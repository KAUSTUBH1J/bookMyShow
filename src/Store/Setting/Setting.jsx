import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Sidebar         : false,
    profilePopUp    : false,
}


const Setting = createSlice({
    name: 'Settings',
    initialState,
    reducers: {
        ShowSideBar: (state,action) => {
            state.Sidebar = action.payload;
            console.log('ShowSideBar  '+state.Sidebar);
        },
        CloseProfilePopUp: (state,action) =>{
            state.
        }
    },
}) 

export const  { ShowSideBar } = Setting.actions;

export default Setting;