import { Request, Response } from 'express'
import { GenericError } from '../../../error/customError'
import { getProductDTO } from '../../../model/types'
import { GetProductBusiness } from './getProduct.business'

export class GetProductController {

    public getProducts = async (req: Request, res: Response):Promise<void>=> {
        try {
            // tentei coloca title: string, mas não vai - mas as string rola --- pq?
            let title = req.query.title as string
            let order = req.query.order as string

            if (!title) {
                title = "%"
            }

            if (!order) {
                order = "desc";
            }

            const inputData: getProductDTO = {
                title,
                order
            }

            const allProductBusiness = new GetProductBusiness()
            allProductBusiness.getProducts(inputData)

            res.status(200).send('ok')

        }
        
        catch (err: any) {
            throw new GenericError

        }
    }
}