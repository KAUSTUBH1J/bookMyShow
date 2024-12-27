import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ShowSideBar     : 0,
    ProfilePopUp    : false,
}

const setting = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        TiggleSideBar: (state, action) => {
            state.ShowSideBar = action.payload;
            // console.log('Setting TiggleSideBar store '+state.ShowSideBar);
        },
        ToggleSideBar: (state, action) => {
            // console.log('Setting ToggleSideBar store '+state.ShowSideBar);
            if(state.ShowSideBar === 2)
                state.ShowSideBar = 0;
            else
                state.ShowSideBar = 2;
            // console.log('Setting ToggleSideBar store '+state.ShowSideBar);
        },
        CloseProfilePopUp: (state,action) =>{
            state.ProfilePopUp = false;
        },
        ShowProfilePopUp: (state) =>{
            state.ProfilePopUp = true;
        }
    },
}) 

export const  { TiggleSideBar, ToggleSideBar,  CloseProfilePopUp, ShowProfilePopUp } = setting.actions;

export default setting;