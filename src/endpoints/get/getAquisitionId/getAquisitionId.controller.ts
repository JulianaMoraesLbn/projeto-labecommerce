import { Request, Response } from "express";
import { MissingInformation } from '../../../error/customError'
import { getAquisitionIdDTO } from '../../../model/types'
import { NewAquisitionIdBusiness } from "./getAquisitionId.business";

export class NewAquisitionIdController {

    public getAquisitionId = async (req: Request, res: Response) => {

        try {

            const { user_id } = req.params
            

            if (!user_id) {
                throw new MissingInformation
            }

            const input: getAquisitionIdDTO = {
                user_id
            }

            const aquisitionIdBusiness = new NewAquisitionIdBusiness()
            aquisitionIdBusiness.getAquisitionId(input)

            res.sendStatus(201)
        }
        catch (err: any) {
            res.status(err.statusCode).send(err.message)
        }
    }
}