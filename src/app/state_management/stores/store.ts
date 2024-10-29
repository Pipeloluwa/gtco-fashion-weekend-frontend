import { configureStore } from '@reduxjs/toolkit';
import { AdminStore } from './admin-store/admin-store';
import { ClientStore } from './client-store/client-store';


export const Store = configureStore(
    {
        reducer: {
            //+++++++ CLIENT STORE ++++++++++++
            ... ClientStore,

            //+++++++ ADMIN STORE ++++++++++++
            ... AdminStore
            
        }
    }
);

export type RootState= ReturnType<typeof Store.getState>;
export type AppDispatch= typeof Store.dispatch;
