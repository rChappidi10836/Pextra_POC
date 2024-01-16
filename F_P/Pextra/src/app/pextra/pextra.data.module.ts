export interface test{
    num?: number;
    thedhi: Date;
}

export interface users{
    uid?: number;
    mobile: string;
    name: string;
    uname: string;
    pwd: string;
    salary: number;
}

// export interface gotusers{
//     mobile: string;
//     name: string;
//     pwd: string;
//     salary: number;
//     uid?: number;
//     uname: string;
// }

export interface expenses{
    sno?: number;
    uid: number;
    expense: string;
    date: Date;
    cost: number;
}