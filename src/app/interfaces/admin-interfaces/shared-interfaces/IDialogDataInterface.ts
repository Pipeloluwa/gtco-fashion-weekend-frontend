import { Dispatch, SetStateAction } from "react";

export interface IDialogFormData {
    singleUserData: {
        name: string, 
        email: string, 
        phone_no: string, 
        design_category: string
        portfolio_links: string,
        description: string,
        picture: string
    } | null;

    dialogState: boolean;
    setDialogState: Dispatch<SetStateAction<boolean>>;
}