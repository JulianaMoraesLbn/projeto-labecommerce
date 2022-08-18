import { aquisition } from '../../../model/types'
import { connectionDataBase } from '../../../data/connectionDataBase'
import { DataBaseErr } from '../../../error/customError'

export class CreateNewAquisitionData extends connectionDataBase {

    public insertNewAquisition = async (inputData: aquisition) => {

        try {
            console.log('inputData', inputData)

            const { id, user_id, product_id, quantity, total_price } = inputData

            await CreateNewAquisitionData.connection('table_labecommerce_aquisition')
                .insert({
                    id,
                    user_id,
                    product_id,
                    quantity,
                    total_price
                })

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }
    }

    public queryPriceProduct = async (product_id: string) => {

        try {

            const result = await CreateNewAquisitionData.connection('table_labecommerce_products')
                .select("price")
                .where("id", product_id)

            return result[0].price


        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }



    }

}