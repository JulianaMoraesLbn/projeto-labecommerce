import { Request, Response } from "express";
import {createProductDTO} from '../../../model/types'
import { MissingInformation } from '../../../error/customError'
import {CreateProductBusiness} from './createProducts.business'

export class CreateProductController {
    public createProducts = async (req: Request, res: Response) => {
        try {

            const { name, price, image_url } = req.body

            if (!name || !price || !image_url) {
                throw new MissingInformation
            }

            const input: createProductDTO = {
                name,
                price,
                image_url
            }

            const newProductBusiness = new CreateProductBusiness()
            await newProductBusiness.createProducts(input)

            
            res.sendStatus(201)

        } catch(err:any) {
            res.status(err.statusCode).send(err.message)
        }

    }


}