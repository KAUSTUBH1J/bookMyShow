import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ShowSideBar : 0,// 0: hidden, 1: show 2: mobile
}


const setting = createSlice({
    name: 'Setting',
    initialState,
    reducers: {
        TiggleSideBar: (state, action) => {
            state.ShowSideBar = action.payload;
            console.log('Setting TiggleSideBar store '+state.ShowSideBar);
        },
        ToggleSideBar: (state, action) => {
            // console.log('Setting ToggleSideBar store '+state.ShowSideBar);
            if(state.ShowSideBar === 2)
                state.ShowSideBar = 0;
            else
                state.ShowSideBar = 2;
            console.log('Setting ToggleSideBar store '+state.ShowSideBar);
        },
    },
}) 

export const  { TiggleSideBar,ToggleSideBar } = setting.actions;

export default setting;