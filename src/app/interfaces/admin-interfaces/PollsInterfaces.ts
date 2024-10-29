export interface  IPollsDataBase {
    id: string;
    title: string;
    votes: number;
    userName: string;
    designCategory: string;
    userDescription: string;
    userImage: string;
    userVotes: {
        userName: string;
    }[];
}

