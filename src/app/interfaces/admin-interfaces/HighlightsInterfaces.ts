export interface IHighlightsBase {
    id: string;
    userName: string;
    designCategory: string;
    userDescription: string;
    userImage: string;
}


export interface IHighlightList {
    higlightsData: IHighlightsBase[]
}



export interface IHighlightsSingle {
    id: string;
    userName: string;
    designCategory: string;
    userDescription: string;
    userImage: string;
    userHighlights: {
        video: string | null;
        pictures: string[] | null[];
    };
}


