import { Request, Response } from "express";
import { MissingInformation } from '../../../error/customError'
import { newAquisitionDTO } from '../../../model/types'
import { NewAquisitionBusiness } from './newAquisition.business'

export class NewAquisitionController {

    public newAquisition = async (req: Request, res: Response) => {

        try {

            const { user_id, product_id, quantity } = req.body

            if (!user_id || !product_id || !quantity) {
                throw new MissingInformation
            }

            const input: newAquisitionDTO = {
                user_id,
                product_id,
                quantity
            }

            const aquisitionBusiness = new NewAquisitionBusiness()
            aquisitionBusiness.createNewAquisition(input)

            res.sendStatus(201)
        }
        catch (err: any) {
            res.status(err.statusCode).send(err.message)
        }
    }
}