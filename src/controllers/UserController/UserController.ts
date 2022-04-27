import { Request, Response } from "express"
import { UserClassAbstract } from "../class/UserClassAbstract/UserClassAbtract"
import UserRepositoryInstance from "../../Repositories/UserRepository/UserRespository"
import { IUser } from "../../interfaces/Users/IUser"


class UserConcrete extends UserClassAbstract { }
const UserInstance = new UserConcrete()

class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        try {
            const user: IUser = req.body

            const userRepository: IUser = await UserRepositoryInstance.UserModelCreate(user)

            if (userRepository._id) {
                /**
                 * User _id to generate token
                 */
                return res.status(200).json({ message: 'Created User' })
            }
            return res.status(400).json({ message: userRepository })
        } catch (err: any) {
            //console.log(err)
            return res.status(400).json(err.errors)
        }
    }

    async find(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'here Finded User' })
    }
}


const UserControllerInstance = new UserController()
export default UserControllerInstance