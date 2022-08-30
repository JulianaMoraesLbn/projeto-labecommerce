
import { product } from '../../../model/types'
import { connectionDataBase } from '../../../data/connectionDataBase'
import {DataBaseErr} from '../../../error/customError'
import { Response } from "express";

export class CreateProductData extends connectionDataBase {

    public insertProduct = async (inputData: product) => {

        try {

            const { id, name, price, image_url } = inputData

            await CreateProductData.connection('table_labecommerce_products')
                .insert({
                    id,
                    name,
                    price,
                    image_url
                })

        } catch(err: any){
            throw new DataBaseErr(err.sqlMessage)
        }
    }
} 