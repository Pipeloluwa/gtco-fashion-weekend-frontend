export interface IProduct{
    picture: string;
    name: string;
    price: number;
}


export interface ISingleProductData {
    vendor_details: {
        name: string;
        whatsapp_no: string;
        emaiL: string;
        portfolio_link: string;
    },
    product: IProduct;
}

export interface IProductsData {
    vendor_details: {
        name: string;
        whatsapp_no: string;
        emaiL: string;
        portfolio_link: string;
    },
    products: IProduct[];
}