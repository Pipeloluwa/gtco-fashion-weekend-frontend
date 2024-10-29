'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IYoutubeApiState{
    value:boolean;
}

const initialValue: IYoutubeApiState= {
    value:false
}

const youtubeState= createSlice({
    name: "youtube-api-state",
    initialState: initialValue,
    reducers: {
        setYoutubeState: (state, args: PayloadAction<{stateValue: boolean}>) => {
            state.value = args.payload.stateValue;
        }
    }
});

export const{setYoutubeState}= youtubeState.actions;
export default youtubeState.reducer;