'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INavAdminValue{
    value: string;
    backButtonState: boolean;
}

const initialValue: INavAdminValue= {
    value:'',
    backButtonState:false
}

const navAdminValue= createSlice({
    name: "nav-admin-value",
    initialState: initialValue,
    reducers: {
        setNavAdminValue: (state, args:PayloadAction<{action:string}>) => {
            state.value= args.payload.action;

        },

        setNavBackButton: (state, args:PayloadAction<{action:boolean}>) => {
            state.backButtonState= args.payload.action;
        }
    }
});

export const{setNavAdminValue, setNavBackButton}= navAdminValue.actions;
export default navAdminValue.reducer;