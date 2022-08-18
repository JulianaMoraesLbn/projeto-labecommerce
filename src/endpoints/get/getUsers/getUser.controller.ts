import { Request, Response } from 'express'
import { GenericError } from '../../../error/customError'
import { GetUserBusiness } from './getUser.business'

export class GetUserController {

    public getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            
            const newGetUserBusiness = new GetUserBusiness()
            const result = newGetUserBusiness.getUser()

            res.status(200).send(result)

        }catch (err: any) {
            throw new GenericError

        }
    }
}