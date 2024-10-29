
interface IInspirationDataBase{
    picture: string | null;
    quote: string | null;
}

export interface IInspirationData{
    inspiration: IInspirationDataBase[]
}