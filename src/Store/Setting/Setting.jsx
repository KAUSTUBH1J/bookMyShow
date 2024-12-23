import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Sidebar         : false,
    ProfilePopUp    : false,
}


const Setting = createSlice({
    name: 'Setting',
    initialState,
    reducers: {
        ShowSideBar: (state,action) => {
            state.Sidebar = action.payload;
            console.log('ShowSideBar  '+state.Sidebar);
        },
        CloseProfilePopUp: (state,action) =>{
            state.ProfilePopUp = false;
        },
        ShowProfilePopUp: (state) =>{
            console.log('sdfsakdfjlkasdjf')
            state.ProfilePopUp = true;
        }

    },
}) 

export const  { ShowSideBar,CloseProfilePopUp,ShowProfilePopUp } = Setting.actions;

export default Setting;