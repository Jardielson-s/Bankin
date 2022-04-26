export interface IUser {
    readonly _id?: string;
    name: string;
    email: string;
    password: string;
    job: string;
    age: number;
    bio?: string;
}