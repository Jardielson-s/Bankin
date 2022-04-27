import mongoose from "mongoose"
import { IUser } from "../../interfaces/Users/IUser"
import UserModel from "../../models/User"

class UserRepository {

    constructor() { }

    async UserModelCreate(dataUser: IUser) {
        try {
            const user: mongoose.Model<any> = await UserModel.create(dataUser)
            return user
        } catch (err: any) {
            return err
        }
    }

    async UserModelFind() {
        /*
        Find through the token
        */
    }
}


const UserRepositoryInstance = new UserRepository()


export default UserRepositoryInstance