import { IUser } from '../Users/IUser'

export interface IAccount extends IUser {
    readonly _id?: string;
    User: IUser;
    num: string;
    balance: number;
}