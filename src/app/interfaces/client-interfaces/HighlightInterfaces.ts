export interface IDesignerDataBase {
    title: string;
    image: string;
    collections: {
        images: string[]
    };
}


export interface IDesignerData {
    designerData: IDesignerDataBase[]
}


export interface IDesignerCollections {
    images: string[];
};