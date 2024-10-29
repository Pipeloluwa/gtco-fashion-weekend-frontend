import { IProduct } from "../shared-interfaces/ProductsInterfaces";

export interface IProductsForm {
    vendor_details: {
        emaiL: string | null;
    },
    products: IProduct[] | null[];
}


export interface IShowCaseType{
    showCase: "Clothes" | "Shoes" | "Accessories";
}