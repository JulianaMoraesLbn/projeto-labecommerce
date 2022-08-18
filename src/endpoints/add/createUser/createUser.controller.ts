import {Request, Response} from 'express'
import { MissingInformation } from '../../../error/customError'
import {createUserDTO} from '../../../model/types'
import { CreateUserBusiness } from './create.User.business'


export class CreateUserController {

    public createUser = async (req: Request, res: Response) => {
        try{
            const {name, email, password} = req.body
    
            if(!name || !email || !password){
                throw new MissingInformation
            }

            const input: createUserDTO = {
                name, 
                email,
                password
            }

            const newUserBusiness = new CreateUserBusiness()
            newUserBusiness.createUser(input)
     
            res.sendStatus(201)
        } catch(err: any) {
            res.status(err.statusCode).send(err.message)
        }
    }
}
