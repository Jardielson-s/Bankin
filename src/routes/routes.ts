import { Router } from "express"
import UserControllerInstance from "../controllers/UserController/UserController"

const router = Router()


router.post('/api/create-user', UserControllerInstance.create)
router.get('/api/find-user', UserControllerInstance.find)

export { router }