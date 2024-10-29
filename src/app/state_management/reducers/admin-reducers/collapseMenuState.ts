'use client';
import { createSlice } from "@reduxjs/toolkit";

interface IMenuState{
    value:boolean;
}

const initialValue: IMenuState= {
    value:false
}

const collapseMenuState= createSlice({
    name: "collapse-menu-state",
    initialState: initialValue,
    reducers: {
        setCollapseMenuState: (state) => {
            state.value = !state.value;
        }
    }
});

export const{setCollapseMenuState}= collapseMenuState.actions;
export default collapseMenuState.reducer;