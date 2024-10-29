export interface IwinnersDataBase {
    id: string;
    title: string;
    votes: number;
    userName: string;
    userDescription: string;
    userImage: string;
}

export interface IWinnersData{
    winnersData: IwinnersDataBase[]
}



export interface IPollsDataBase {
    id: string;
    userName: string;
    userDescription: string;
    userImage: string;
}


export interface IPollsCategory{
    title: string;
    pollsData: IPollsDataBase[];
    voteCategory: string
    setVoteCategory: React.Dispatch<React.SetStateAction<string>>
}