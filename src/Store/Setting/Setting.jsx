import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Sidebar       : false
}


const Setting = createSlice({
    name: 'Settings',
    initialState,
    reducers: {
        ShowSideBar: (state,action) => {
            state.Sidebar = action.payload;
            console.log('ShowSideBar  '+state.Sidebar);
        },
        
    },
}) 

export const  { ShowSideBar } = Setting.actions;

export default Setting;