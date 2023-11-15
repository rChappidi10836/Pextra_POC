export interface users{
    uid?: number;
    mobile: string;
    name: string;
    uname: string;
    pwd: string;
    salary: number;
}

export interface expenses{
    sno?: number;
    uid: number;
    expense: string;
    date: Date;
    cost: number;
}