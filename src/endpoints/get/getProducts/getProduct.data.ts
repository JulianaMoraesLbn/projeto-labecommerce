import { connectionDataBase } from '../../../data/connectionDataBase'
import { DataBaseErr, MissingInformation } from '../../../error/customError'
import { getProductDTO } from '../../../model/types'


export class GetProductData extends connectionDataBase {

    public allProductData = async (inputData: getProductDTO):Promise<{}> => {

        try {

            const { title, order } = inputData

            const result = await GetProductData.connection("table_labecommerce_products")
                .select("*")
                .orderBy("name", order)
                .where("name", "like", `%${title}%`)

            if (!result) { throw new MissingInformation }
          
            return result

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }
    }
} 