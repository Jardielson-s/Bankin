import { IUser } from "../../interfaces/Users/IUser"
import UserModel from "../../models/User"

class UserRepository {

    constructor() { }

    async UserModelCreate(dataUser: IUser) {
        const user = await UserModel.create()
        return user
    }

    async UserModelFind() {
        /*
        Find through the token
        */

    }
}


const UserRepositoryInstance = new UserRepository()


export default UserRepositoryInstance