import { Request, Response } from "express"
import { UserClassAbstract } from "../class/UserClassAbstract/UserClassAbtract"

class UserConcrete extends UserClassAbstract {

}

const UserInstance = new UserConcrete()

class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'Created User' })
    }

    async find(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({ message: 'Finded User' })
    }
}


const UserControllerInstance = new UserController()
export default UserControllerInstance